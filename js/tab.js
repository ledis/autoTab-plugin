(function($){
	$.fn.extend({
		autoTab:function(options){
			var defaults={
				current:"hover",
				tabLi:".tabBar>li",
				tabDiv:".tab_conts>div",
				eventDefault:"click",
				scrolltime:2000,
				num:3
			}
			var options=$.extend(defaults,options);
			var index=0;
			var timer=null;
			this.each(function(){
				var $this=$(this);
				//自动轮播切换
				function autoScroll(){
					timer=setInterval(function(){
						index++;
						if(index>=options.num){
							index=0;
						}
						$this.find(options.tabLi).eq(index).addClass(options.current).siblings().removeClass(options.current);
						$this.find(options.tabDiv).eq(index).show().siblings().hide();
					},options.scrolltime);
				}
				autoScroll();
				//控制两个切换不冲突
				$this.mouseover(function(event) {
					clearInterval(timer);
				});
				$this.mouseout(function(){
					autoScroll();
				});
				//点击选项卡切换
				$this.find(options.tabLi).each(function(i){
					$(this).on(options.eventDefault,function(){
						$(this).addClass(options.current).siblings().removeClass(options.current);
						index=i;
						$this.find(options.tabDiv).eq(index).show().siblings().hide();
					})
				})

			})
			return this;
		}
	})
})(jQuery)