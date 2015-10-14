
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');


jQuery(function ($) {

  'use strict';

  var W = window
    , debug = W.location.search.match(/debug=1/)
    , D = W.console && debug
    , BLOG = $("#js-config").data()
    ;

  BLOG.debug = debug;

  $.NF_BLOG = BLOG;

  // Google Analytics.
  ga('create', BLOG.analytics_id, 'auto');
  ga('send', 'pageview');


  // Event tracking: https://developers.google.com/analytics/devguides/collection/analyticsjs/events
  $("a").on("click", function (ev) {
    var url = $(this).attr("href")
      , text = $(this).text();

    // Assumption: absolute URL === external link.
    if (url.match(/^https?:/)) {
      ga('send', 'event', 'link', 'click', text +' '+ url);

      D && console.log("Track extern link click:", text, url);
    }

    //ev.preventDefault();
  });


  /* Accessibility fixes.
  */
  $("header a.menu-icon").attr({
    role: "button",
    title: "Show/hide navigation",
    "aria-label": "Show / hide navigation"
  })
  .on("click", function (ev) {
    $("header .trigger").toggle();

    ev.preventDefault();
  });


  /* oEmbed / Open Media Player ..
  */
  $.fn.oembed && $("a[ href *= _EMBED_ME_ ], a[ href *= '.ac.uk/pod/' ]").oembed(null, {
    oupodcast: { rgb: "omp-purple" },
    youtube: { rgb: "omp-orange" },
    debug: debug ? 2 : 0
  });


  $("a[ href *= _FRAME_ME_ ]").each(function () {
    var $link = $(this)
      , url = $link.attr("href").replace(/\#\!.+/, "");

    $link.replaceWith('<div class="frame-me"><iframe src="' + url + '"></iframe></div>');
  });

  $("a[ href *= _BIG_ME_ ]").each(function () {
    var $link = $(this)
      , url = $link.attr("href").replace(/\#\!.+/, "")
      , text = $link.html().replace(/\#\!.+/, "");

    $link.addClass("big-me").attr("href", url);  //.html(text);
  });


  D && console.log("main.js", debug, BLOG);

});
