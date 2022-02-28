function clickLink(url) {
    location.href = url;
}

$(".navbar-toggler").on("click", function() {
    $(".toggle").toggleClass("feather-x");
    $(".toggle").toggleClass("feather-menu");

});

const windowHeight = $(window).height();
$(window).scroll(function() {
    let currentPosition = $(this).scrollTop();
  if(currentPosition >= windowHeight- 100) {
      //console.log(currentPosition);
    $("header").addClass("scroll");
      }
  else {
    $("header").removeClass("scroll");
    activeSection("home");
  }
})

function activeSection(current) {
    $(".nav-link").removeClass("active");
    $(`.nav-link[href= '#${current}']`).addClass("active");
}

function navScroll() {
  $("section[id]").waypoint(
    function (direction) {
      activeSection($(this.element).attr("id"));
    },
    {
      offset: "690px",
    }
  );
}

    navScroll();

$(window).on("load", function(){
    $(".loading").fadeOut(function() {
        $(this).remove();
    })
})

