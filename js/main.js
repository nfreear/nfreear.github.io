

/* Search redirect.
*/
(function (W, L) {
  if ('/' === L.pathname && L.href.match(/[\?&]q=\w+/)) {
    W.location = '/search/' + L.search;
    W.console && console.log("Redirect", L);
    //throw [ "Redirect", L ];
  }
}(window, window.location));


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');


jQuery(function ($) {

  'use strict';

  var W = window
    , debug = W.location.search.match(/debug=1/) // /debug=([1-9])/
    , D = W.console && debug
    , BLOG = $("#js-config").data()
    ;

  BLOG.debug = debug;

  $.NF_BLOG = BLOG;


  /* Google Analytics.
  */
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


  if (! W.location.search.match(/\?q=\w+/)) {
    $("#x-cse-loading").replaceWith(
      '<input name="q" id="gsc-i-id1" type="search" placeholder="Google custom search" required><button>Search</button>'
    );
    $("body").addClass("search-empty");
  }

  /* Browser search plugin button - Firefox 2+ and IE 7+, OpenSearch.
  */
  var $plugin = $("#plugin")
    , $search = $("link[ rel = search ]");
  if (W.external && ("AddSearchProvider" in W.external) && $plugin.length) {
    var $btn = $('<a role="button">Add browser search plugin</a>')
      .attr("href", $search.attr("href"))
      .on("click", function () {
        D && console.log("Search plugin:", $search.attr("href"));
        W.external.AddSearchProvider($search.attr("href"));
        return false;
    });
    $plugin.append($btn);
  }


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

  // Add per-paragraph/ chunk navigation.
  $("article p, article li, .highlight").each(function (cn, elem) {
    if (! elem.id) { //$el[ 0 ].id
      elem.id = "p-" + (cn + 1);
    }
  })


  /* oEmbed / Open Media Player ..
  */
  $.fn.oembed && $("a[ href *= _EMBED_ME_ ], a[ href *= '.ac.uk/pod/' ]").oembed(null, {
    oupodcast: { rgb: "omp-purple" },
    youtube: { rgb: "omp-orange" }
  },
  function (data, undefined) {
    // Clean up Flickr embeds :(.
    if ("Flickr" === data.provider_name) {
      data.code = data.code.replace(/<\/div><div.+/, "</div>"); //.replace(/<script.+/, "");
    }
    D && console.log("onEmbed: ", data, undefined);

    $.fn.oembed.insertCode(this, "replace", data);
  });


  $("a[ href *= _FRAME_ME_ ]").each(function () {
    var $link = $(this)
      , url = $link.attr("href").replace(/\#\!.+/, "");

    $link.replaceWith('<div class="frame-me"><iframe src="' + url + '"></iframe></div>');
  });

  $("a[ href *= _ME_ ]").each(function () {
    var $link = $(this)
      , url = $link.attr("href")
      , m = url.match(/\#\!?__?((BIG|[A-Z]+)_ME)_/i)
      , url_clean = url.replace(/\#\!.+/, "")
      , text = $link.html().replace(/\#\!.+/, "");

    if (m) {
      $link.addClass(m[ 1 ].toLowerCase() + " x-me").attr("href", url_clean);  //.html(text);
    }
    D && console.log("big-me: ", m);
  });


  D && console.log("main.js", debug, BLOG);

});
