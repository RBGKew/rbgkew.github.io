$(function() {
  $(".js-vertical-tab-content").hide();
  ($(window.location.hash+"-content") || $(".js-vertical-tab-content:first")).show();
  ($(window.location.hash+"-content") || $(".js-vertical-tab-content:first")).show();
  ($(window.location.hash+"-tab") || $(".js-vertical-tabs a:first")).addClass("is-active");

  /* if in tab mode */
  $(".js-vertical-tab").click(function(event) {
    event.preventDefault();

    $(".js-vertical-tab-content").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab+"-content").show();

    $(".js-vertical-tab").removeClass("is-active");
    $(this).addClass("is-active");

    $(".js-vertical-tab-accordion-heading").removeClass("is-active");
    $(".js-vertical-tab-accordion-heading[rel^='"+activeTab+"']").addClass("is-active");
  });

  /* if in accordion mode */
  $(".js-vertical-tab-accordion-heading").click(function(event) {
    event.preventDefault();

    $(".js-vertical-tab-content").hide();
    var accordion_activeTab = $(this).attr("rel");
    $("#"+accordion_activeTab+"-content").show();

    $(".js-vertical-tab-accordion-heading").removeClass("is-active");
    $(this).addClass("is-active");

    $(".js-vertical-tab").removeClass("is-active");
    $(".js-vertical-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");
  });
});
