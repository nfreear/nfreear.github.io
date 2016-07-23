/*!
  Comments, & accessibility fixes for comments - IntenseDebate.

  @link  http://www.intensedebate.com/js/genericCommentWrapperV2.js
  @copyright Nick Freear, 29 September-14 October 2015.
  @license MIT
*/

jQuery(function ($) {

  'use strict';

  var accessibility_fixes = {
      "a[ href *= 'javascript:' ]": { role: "button" },
      "a.idc-close": { title: "Close", role: "button" },
      "#idc-container #txtEmailNewThread": { type: "email", placeholder: "joe@example.org" },
      "#IDCommentsNewThreadCover h3:first": { id: "x-idc-heading-2" },
      "#idc-container textarea": { required: "required", placeholder: "Enter comment", "aria-labelledby": "x-idc-heading-2" },
      "#idc-container h3:first": { "aria-level": 2 },
      // "region" or nested "article"?
      "#idc-container": { role: "region", "aria-labelledby": "idc-commentcount_label"}
    }
    , BLOG = $.NF_BLOG
    , $loader = $("#x-idc-comments-loading")
    , $wrapper = $("#" + BLOG.comment_div)
    , W = window
    , console = W.console
    // "#IDComment1000836892"
    , comment_hash_re = /(#IDComment(\d+))/
    , m_hash = W.location.hash.match(comment_hash_re)
    , script_src = "//intensedebate.com/js/genericCommentWrapper2.php?"

    // 1. Comment configuration.
    , params = {
      acct: BLOG.comment_acct,
      title: BLOG.post_title,
      postid: BLOG.post_id,
      url: W.location.origin + W.location.pathname
    };

  // 1b. The ONE global variable!
  W.idcomments_div = BLOG.comment_div;

  // 2. Check if HTML containers exist.
  if (! $loader.length || ! $wrapper.length) {
    console.info("Warning: no comments wrapper found.");
    return;
  }

  // 3. Inject the comment engine's next Javascript, with URL parameters.
  $.each(params, function (key, value) {
    script_src += "&" + key + "=" + encodeURIComponent(value);
  });

  if ('localhost' === W.location.hostname && ! BLOG.js_local) {
    $("body").addClass("no-js-local");
    console.info("Localhost – no comments!");
    return;
  }

  $("head").append('<script src="' + script_src + '"></script>');


  when_call(function () {
    // 4. Test if the comment HTML exists yet...
    return $("#idc-container .idc-thread").length;
  },
  function () {

    // 5. ..And, apply accessibility fixes.
    $.each(accessibility_fixes, function (sel, attr) {
        $(sel).attr(attr);
    });

    // 6. Hide loading message, show comment HTML.
    $loader.hide("slow");
    $("#idc-container").show("slow");

    console.debug("comment.js: ", accessibility_fixes, BLOG);
  });

  // 7.
  if (m_hash) {
    when_call(function () {
      return $(m_hash[ 1 ]).length;
    },
    function () {
      console.debug("Comment-scroll: ", m_hash);
      //$("#IDThread" + m_hash[ 2 ]).attr("tabindex", 0).focus();
      $(m_hash[ 1 ]).attr({ tabindex: 0 }).focus();
    });
  }


  function when_call(when_true_FN, callback_FN, interval) {
    var int_id = W.setInterval(function () {
      if (when_true_FN()) {
        W.clearInterval(int_id);
        callback_FN();
      }
    }, interval || 250); // Milliseconds.
  }

});
