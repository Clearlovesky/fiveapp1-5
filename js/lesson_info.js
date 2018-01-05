
		// 展开伸缩
	  var cur_status = "less";
		$.extend({
		show_more_init:function(){
			//alert("show_more_init!");
			var charNumbers=$(".content").html().length;//总字数
			var limit=54;//显示字数
				if(charNumbers>limit){
					var orgText=$(".content").html();//原始文本
					var orgHeight=$(".content").height();//原始高度
					var showText=orgText.substring(0,limit);//最终显示的文本
					$(".content").html(showText);
					var contentHeight=$(".content").height();//截取内容后的高度
					$(".switch_aa").click(
					function(){
						if(cur_status == "less"){
						$(".content").height(contentHeight).html(orgText).animate({ height:orgHeight}, { duration: "fast" });
						$(this).html("查看详情 ∧");
						cur_status = "more";
						}else{
							$(".content").height(orgHeight).html(showText).animate({ height:contentHeight}, { duration: "fast" });
							$(this).html("查看详情 ∨");
							cur_status = "less";
						}
					});
				}else{
					$(".switch_aa").hide();
				}
			}
		});
		$(document).ready(function(){
			$.show_more_init();
		});


		// 模块二 5组动作视频 区域
		var swiperK = new Swiper('.swiper-container-k', {
        // pagination: '.swiper-pagination-k',
        slidesPerView: 2.6,//屏幕显示小div的个数
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true
    });
    // 爱心点赞
		$(document).ready(function(){ 
			$('body').on("click",'.heart',function(){   	
		    	var A=$(this).attr("id");
		    	var B=A.split("like");
		        var messageID=B[1];
		        var C=parseInt($("#likeCount"+messageID).html());
		    	$(this).css("background-position","")
		        var D=$(this).attr("rel");
		        if(D === 'like') 
		        {      
		        $("#likeCount"+messageID).html(C+1);
		        $(this).addClass("heartAnimation").attr("rel","unlike");
		        }else{
			        $("#likeCount"+messageID).html(C-1);
			        $(this).removeClass("heartAnimation").attr("rel","like");
			        $(this).css("background-position","left");
		        }
		    });
		});

// 页面传值
function subStr(url) {
    var obj = {};
    var str = url.split('?')[1];

    //console.log(str);
    var str2 = str.split('&');
    console.log(str2);
    for (var k in str2) {
        var str3 = str2[k].split('=');
        obj[str3[0]] = str3[1];
    }
    return obj;
}
var href = subStr(window.location.href);
console.log(href.content);
console.log(href.drysalteryID);
console.log(href);
// console.log(decodeURI(href.a));
// 更改头部标题数据decodeURI(乱码值)方法把地址栏中获取到的乱码转换成相应的中文
// $(".middle>h1").text(decodeURI(href.title));
// $(".m-left>h1").text(decodeURI(href.content));



// 课程详情头部渲染
$.ajax({
    url:"http://www.mffive.com:8080/drysaltery/getRecommendList",
    type: "post",
    data: {
        drysalteryID:href.drysalteryID
    },
    success:function(data){
        var tplStr = template('headerLesson',data);
        $('.video').html(tplStr);
         // console.log(data);
         $(".m-left>h1").text(decodeURI(href.title));

         // 分享模态框
			   $(".v-right").on("touchstart",function(){
			      $(".share").slideDown(0);
			      $(".share>ul").css("bottom",0);
			    })
			   $(".share").on("touchstart",function(){
			      $(".share").fadeOut(100);
			      $(".share>ul").css("bottom","-27%");
			    });

    },
    error:function(){
        console.log("请求失败了");
    }
})

// 视频
$.ajax({
    url:"http://www.mffive.com:8080/drysaltery/getRecommendList",
    type: "post",
    // data:{
    // 		drysalteryID:1
    // },
    success:function(data){
        var tplStr = template('watch',data);
        $('.player').html(tplStr);
         console.info(data);
          /*我们需要完成的功能*/
		    $(function(){
		        /*获取到视频对象*/
		        var video = document.querySelector('video');
		        /*获取到一系列操作dom*/
		        var $btn = $('.switch');
		        var $full = $('.expand');
		        var $bar = $('.bar');
		        var $line = $('.line');
		        var $currTime = $('.current');
		        var $countTime = $('.total');
		        /*格式化时间*/
		        var getFormatTime = function(time){
		            var time = time || 0;/*00:00:00*/
		            var h = Math.floor(time/3600);
		            var m = Math.floor(time%3600/60);
		            var s = Math.floor(time%60);
		            return (h<10?'0'+h:h)+':'+(m<10?'0'+m:m)+':'+(s<10?'0'+s:s);
		        };
		        /*1.当能播放的时候  显示播放器，知道视频的总时长，设置播放总时长*/
		        video.oncanplay = function(){
		            /*显示播放器*/
		            video.style.display = "block";
		            /*总时长*/
		            console.log(video.duration);
		            /*设置播放总时长*/
		            $countTime.html(getFormatTime(video.duration));
		        }
		        // --------页面加载时-视频触发start
		        $(".play").click(function(){
		            $("figure").fadeIn();
		            video.play();
		            $btn.removeClass('fa-play').addClass('fa-pause');
		        })

		        $btn.on('click',function(){
		        if($btn.hasClass('fa-play')){
		            /*2.点击播放**/
		            video.play();
		            $btn.removeClass('fa-play').addClass('fa-pause');
		        }else{
		            /*3.点击暂停*/
		            video.pause();
		            $btn.removeClass('fa-pause').addClass('fa-play');
		        }
		    });
		        /*4.显示播放进度*/
		        video.ontimeupdate = function(){
		            /*当前播放的时间*/
		            console.log(video.currentTime);
		            /*当前时间除以总时长 百分比的格式*/
		            var pre = video.currentTime/video.duration * 100 +'%';
		            /*设置进度条的宽度*/
		            $line.css('width',pre);
		            /*显示当前播放的时间*/
		            $currTime.html(getFormatTime(video.currentTime));
		        }

		        /*5.全屏*/
		        $full.on('click',function(){
		            /*使元素全屏的api*/
		            video.webkitRequestFullScreen();
		        });
		        /*6.跃进播放*/
		        $bar.on('click',function(e) {
		            /*比例*/
		            var scale = e.offsetX / $bar.width();
		            /*需要去的时间*/
		            var currTime = scale * video.duration;
		            /*设置*/
		            video.currentTime = currTime;
		        });

		        /*7.播放结束重置视频*/
		        video.onended = function(){
		            /*重置按钮*/
		            $btn.addClass('fa-play').removeClass('fa-pause');
		            /*进度条*/
		            $line.css('width','0px');
		            /*当前时间*/
		            $currTime.html(getFormatTime());/*00:00:00*/
		            /*回到起始的画面*/
		            video.currentTime = 0;
		        }
		        // 横屏播放
		        var width = document.documentElement.clientWidth;
		          var height =  document.documentElement.clientHeight;
		          if( width < height ){
		              console.log(width + " " + height);
		              $print =  $('.player');
		              $print.width(height);
		              $print.height(width);
		              $print.css('top',  (height-width)/2 );
		              $print.css('left',  0-(height-width)/2 );
		              $print.css('transform' , 'rotate(90deg)');
		              $print.css('transform-origin' , '50% 50%');
		         }
		         // 视频关闭按钮X
		         $(".close").click(function(){
		            $("figure").fadeOut();
		              video.pause();
		            $btn.removeClass('fa-pause').addClass('fa-play');
		         })
		    })
    },
    error:function(){
        console.log("请求失败了");
    }
})