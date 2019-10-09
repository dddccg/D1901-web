  $(function () {
      $(".username>.nameinput>input").focus(function () {
          $(this).removeClass("shandowr");
          $(this).addClass("shandow");
      });
      $(".username>.nameinput>input").blur(function () {
          $(this).removeClass("shandow");
          $(this).addClass("shandowr");
      });
  })


  $(function () {
      $(".login-remeber>label>.tubiao").click(function(){
          $(this).addClass("clicked");
      },function () {
        $(this).toggleClass("clicked");
    });
  })
