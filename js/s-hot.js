window.onload=function(){
	// footer点击变色
	var aArr =$(".footer>a");
	var imgArr=$(".footer").find("img");
	aArr[0].onclick=function(){
	    imgArr[0].src="images/ico_selected@2x.png";
	    imgArr[1].src="images/ico_shequ@2x.png";
	    imgArr[2].src="images/ico_sport@2x.png";
	    imgArr[3].src="images/ico_ganhuo@2x.png";
	    imgArr[4].src="images/ico_wode@2x.png";
	    $(this).find("span").css("color","#F8E71C").parent("div").parent("a").siblings("a").find("span").css("color","#E3E3E3");
	}
	aArr[1].onclick=function(){
		  // $(this).find("span").css("color","#F8E71C").parent("div").parent("a").siblings("a").find("span").css("color","#E3E3E3");
	    imgArr[0].src="images/ico_yujian@2x.png";
	    imgArr[1].src="images/ico_shequ_selected@2x.png";
	    imgArr[2].src="images/ico_sport@2x.png";
	    imgArr[3].src="images/ico_ganhuo@2x.png";
	    imgArr[4].src="images/ico_wode@2x.png";
	    $(this).find("span").css("color","#F8E71C").parent("div").parent("a").siblings("a").find("span").css("color","#E3E3E3");
	}
	aArr[2].onclick=function(){
	    imgArr[0].src="images/ico_yujian@2x.png";
	    imgArr[1].src="images/ico_shequ@2x.png";
	    imgArr[2].src="images/ico_sport_selected@2x.png";
	    imgArr[3].src="images/ico_ganhuo@2x.png";
	    imgArr[4].src="images/ico_wode@2x.png";
	    $(this).find("span").css("color","#F8E71C").parent("div").parent("a").siblings("a").find("span").css("color","#E3E3E3");
	}
	aArr[3].onclick=function(){
	    imgArr[0].src="images/ico_yujian@2x.png";
	    imgArr[1].src="images/ico_shequ@2x.png";
	    imgArr[2].src="images/ico_sport@2x.png";
	    imgArr[3].src="images/ico_ganhuo_selected@2x.png";
	    imgArr[4].src="images/ico_wode@2x.png";
	    $(this).find("span").css("color","#F8E71C").parent("div").parent("a").siblings("a").find("span").css("color","#E3E3E3");
	}
	aArr[4].onclick=function(){
	    imgArr[0].src="images/ico_yujian@2x.png";
	    imgArr[1].src="images/ico_shequ@2x.png";
	    imgArr[2].src="images/ico_sport@2x.png";
	    imgArr[3].src="images/ico_ganhuo@2x.png";
	    imgArr[4].src="images/ico_wode_selected@2x.png";
	    $(this).find("span").css("color","#F8E71C").parent("div").parent("a").siblings("a").find("span").css("color","#E3E3E3");
	}
// 头部导航
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // spaceBetween: 50
    });
    // 头部教学区域轮播
    var swiperH = new Swiper('.swiper-container-h', {
        pagination: '.swiper-pagination-h',
        slidesPerView: 2.5,//屏幕显示小div的个数
        paginationClickable: true,
        spaceBetween: 10, //间隙
        // autoplay: 2500, //轮播时间
        freeMode: false //自动贴合
    });
    // 饮食 第二屏 轮播
    var swiperJ = new Swiper('.swiper-container-j', {
        pagination: '.swiper-pagination-j', //轮播导航小点点
        slidesPerView: 1,//屏幕显示小div的个数
        paginationClickable: true,
        spaceBetween: 0,
        autoplay: 2500, //轮播时间
        freeMode: false
    });
    var swiperK = new Swiper('.swiper-container-k', {
        // pagination: '.swiper-pagination-k',
        slidesPerView: 2.6,//屏幕显示小div的个数
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true
    });
};