  $(function () {
    // 初始化SDAPP
    new SDAPP({
      menu: {
        type: "slide,aside",
      },
    });
    $(".entry").find("span").each(function () {
      $(this).css({
        "font-family": "Helvetica"
      })

    })
    $(".entry p").css({
      "font-family": "Helvetica",
      "line-height": "34px"
    })
    $("div > div > div > ul > li>ul>li>ul").html('')
    /*友情链接下拉*/
    $(".botlinks").each(function (index, el) {
      $(el).find(".links-wrap").hover(function () {
        $(this).addClass('wrap-open').children('.link-items').stop(true, true).slideDown(300);
      }, function () {
        $(this).removeClass('wrap-open').children('.link-items').stop(true, true).slideUp(100);
      });
    });
    let flag = $(window).width() < 999;
    if (flag) {
      $(".menu-switch-arrow", ".wp-navi-aside").next().addClass('sub-menu')
      $("table").css({
        "width": $(window).width() * 0.9,
        "float": "left"
      });
      $("table td").css({
        "text-align": "center",
        "word-wrap": "break-word"
      });
      $("table td p").css({
        "text-align": "center",
        "margin": "0",
        "padding": "0",
        "font-size": "8px",
        "font-weight": "400"
      });
      $("table td span").css({
        "text-align": "center",
        "font-size": "8px",
      });
      $("table td span").each(function () {
        var text = $.trim($(this).text())
        $(this).text(text)
      })
    } else {
      $("div > div > div > ul > li>ul>li>ul").html('')
    }
  });