  $(function () {
    // 初始化SDAPP
    new SDAPP({
      menu: {
        type: "slide,aside",
      },
    });
    $(".col_path").find(".path_name").next().text("Homepage");
    /*友情链接下拉*/
    $(".botlinks").each(function (index, el) {
      $(el).find(".links-wrap").hover(function () {
        $(this).addClass('wrap-open').children('.link-items').stop(true, true).slideDown(300);
      }, function () {
        $(this).removeClass('wrap-open').children('.link-items').stop(true, true).slideUp(100);
      });
    });
    let url = window.location.href;
    console.log(url);
    let flag = $(window).width() < 999;

    if (!flag) {
      let url_list = ["http://nysxxy.ahu.edu.cn/jszj/list.htm", "http://nysxxy.ahu.edu.cn/jsml/list.htm", "http://nysxxy.ahu.edu.cn/zf_17684/list.htm", "http://nysxxy.ahu.edu.cn/wf_17685/list.htm"] //教师名录
      if (url_list.indexOf(url) > -1) {
        console.log("教师名录--中方/外方")
        $(".my_list1").css({
          "display": "none"
        })
        $(".wp_paging").css({
          "display": "none"
        })
        $(".news_meta").css({
          "display": "none"
        })
        $(".my_list2").css({
          "display": "block"
        })
        $(".news_list").css({ // 教师名录两排排列
          "display": "grid",
          "justify-content": "space-between",
          "grid-template-columns": "repeat(2, auto)"
        })

        $(".list .my_title").each(function () {
          var my_text = $(this).find('.my_intro').text().trim();
          console.log(my_text);
          $(this).text(my_text.substring(my_text.indexOf("姓名") + 3, my_text.indexOf("职位")))
          $(this).parent().find('.my_title2').text(my_text.substring(my_text.indexOf("职位") + 3, my_text.indexOf("领域")))
          $(this).parent().find('.my_title3').text(my_text.substring(my_text.indexOf("领域")))
        })
        $(".news_imgs img").css({
          "margin": "0 auto",
          "width": "200px",
          "height": "220px"
        })

      };
      let url_list_studentHome = ["http://nysxxy.ahu.edu.cn/xssw/list.htm", "http://nysxxy.ahu.edu.cn/xysh/list.htm"] // 学生之家
      if (url_list_studentHome.indexOf(url) > -1) {
        console.log("学生之家")
        $(".my_list1").css({
          "display": "none"
        })
        $(".wp_paging").css({
          "display": "none"
        })
        $(".news_meta").css({
          "display": "none"
        })
        $(".my_list3").css({
          "display": "block"
        })
        $(".my_list0").css({
          "display": "grid",
          "grid-template-columns": "repeat(4, auto)",
          "justify-content": "space-between"
        })
      };
    }


    if (flag) {
      $(".menu-switch-arrow", ".wp-navi-aside").next().addClass('sub-menu')
      $(".col_menu .col_menu_head h3.col_name").css("display", "none");
      $(".col_menu_con").css("display", "none");
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
        "font-weight": "400",
        "text-indent": "0"
      });
      $("table td span").css({
        "text-align": "center",
        "font-size": "8px",
        // "font-weight": "400"
      });

      $("table td span img").each(function () {
        $(this).attr("hspace", "0")
      })
      $("table td span").each(function () {
        $(this).html($(this).html.replace($(this.text()), $.trim($(this).text())))
      })
    } else {
      $("div > div > div > ul > li>ul>li>ul").html('')
    }
  });