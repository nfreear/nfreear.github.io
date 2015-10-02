
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');


jQuery(function ($) {

  var W = window
    , debug = W.location.search.match(/debug=1/)
    , D = W.console && debug
    ;

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


  // oEmbed / Open Media Player ...
  $("a[ href *= '_EMBED_ME_' ], a[ href *= '.ac.uk/pod/' ]").oembed(null, {
    oupodcast: { rgb: "omp-purple" },
    youtube: { rgb: "omp-orange" },
    debug: debug ? 2 : 0
  });


  D && console.log("main.js", debug, BLOG);

});
