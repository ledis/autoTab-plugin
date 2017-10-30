;(function($){
	$.fn.extend({
		'autoTab':function(options){
			var defaults={
				currentClass:"hover",
				tabLi:".tabBar>li",
				tabCont:".tab_conts>div",
				eventType:"click",
				time:2000
			};
			var endoptions=$.extend(defaults,options);
			var timer=null;
			var index=1;
			this.each(function(){
				var _this=$(this);
				//点击选项卡切换
				_this.find(endoptions.tabLi).each(function(i){
					$(this).on(endoptions.eventType,function(){
						$(this).addClass(endoptions.currentClass).siblings().removeClass(endoptions.currentClass);
						_this.find(endoptions.tabCont).eq(i).show().siblings().hide();
						index=i+1;
						console.log(index);
					})
				})
				//控制两个切换不冲突
				_this.mouseover(function(){
					window.clearInterval(timer);
				})
				_this.mouseout(function(){
					auto();
				});
				//自动轮播切换
				function auto(){
					window.clearInterval(timer);
					timer=setInterval(function(){
						index++;
						if(index>3){
							index=1;
						}
						_this.find(endoptions.tabLi).eq(index-1).addClass(endoptions.currentClass).siblings().removeClass(endoptions.currentClass);
						_this.find(endoptions.tabCont).eq(index-1).show().siblings().hide();
					},endoptions.time);
				}

				auto();
			})
			return this;
		}
	})
})(jQuery)

