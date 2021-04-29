// 初始化SDAPP
new SDAPP({
  menu: {
    type: "aside",
  },
});
/**底部链接部分空ul不占空间*/
$("li.sub-item").find("ul").css({
  "display": "none",
})
$(".dtjt8_div_img").css({
  "margin": "0 auto",
  "width": $(window).width(),
  "height": 800 / 1920 * ($(window).width())
})

$(".dtjt8_div_img img").css({
  "margin": "0 auto",
  "width": $(window).width(),
  "height": 800 / 1920 * ($(window).width())
})
$(".main1 .my_title").each(function () {
  var my_text = $(this).text().trim()
  $(this).text(my_text.substring(0, my_text.length - 10))
})
$(".main2 .my_time").each(function () {
  var my_text = $(this).text().trim()
  $(this).text(my_text.substring(5))
})
$(".main3 .my_title").each(function () {
  var my_text = $(this).text().trim();
  console.log(my_text);
  $(this).text(my_text.substring(my_text.indexOf("姓名") + 3, my_text.indexOf("职位")))
  $(this).parent().find('.my_title2').text(my_text.substring(my_text.indexOf("职位") + 3, my_text.indexOf("领域")))
  $(this).parent().find('.my_title3').text(my_text.substring(my_text.indexOf("领域")))

})
let flag = $(window).width() < 999;
if (flag) {
  $(".menu-switch-arrow", ".wp-navi-aside").next().addClass('sub-menu')
  // $(".main3 .news_tu .news_list li.news .news_imgs").css({
  //   "margin": "0 auto",
  //   "width": $(window).width()*0.9,
  //   "height": 267 / 249 * 0.9*($(window).width())
  // })
  $(".my_tab1").click(function () {
    $(this).css("color", "#990000")
    $(".my_tab2").css("color", "#999999")
    $(".post44").css("display", "none")
    $(".post43").css("display", "block")
  })
  $(".my_tab2").click(function () {
    $(this).css("color", "#990000")
    $(".my_tab1").css("color", "#999999")
    $(".post43").css("display", "none")
    $(".post44").css("display", "block")
  })
} else {
  $("div > div > div > ul > li>ul>li>ul").html('')
  $(".my_tab1").mouseenter(function () {
    $(this).css("color", "#990000")
    $(".my_tab2").css("color", "#999999")
    $(".post44").css("display", "none")
    $(".post43").css("display", "block")
  })
  $(".my_tab2").mouseenter(function () {
    $(this).css("color", "#990000")
    $(".my_tab1").css("color", "#999999")
    $(".post43").css("display", "none")
    $(".post44").css("display", "block")
  })
}