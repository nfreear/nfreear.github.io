/*!
  Comments, & accessibility fixes for comments - IntenseDebate.

  @link  http://www.intensedebate.com/js/genericCommentWrapperV2.js
  @copyright Nick Freear, 29 September-14 October 2015.
*/

jQuery(function ($) {

  'use strict';

  var accessibility_fixes = {
      "a[ href *= 'javascript:' ]": { role: "button" },
      "a.idc-close": { title: "Close", role: "button" },
      "#idc-container #txtEmailNewThread": { type: "email", placeholder: "joe@example.org" },
      "#IDCommentsNewThreadCover h3:first": { id: "x-idc-heading-2" },
      "#idc-container textarea": { required: "required", placeholder: "Enter comment", "aria-labelledby": "x-idc-heading-2" },
      "#idc-container": { role: "section", "aria-labelledby": "idc-commentcount_label"}
      //"#idc-commentcount_label": { role: "heading", "aria-level": 3 }
    }
    , BLOG = $.NF_BLOG
    , $loader = $("#x-idc-comments-loading")
    , $wrapper = $("#" + BLOG.comment_div)
    , W = window
    , D = W.console && BLOG.debug
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
    W.console && console.log("Warning: no comments wrapper found.");
    return;
  }

  // 3. Inject the comment engine's next Javascript, with URL parameters.
  $.each(params, function (key, value) {
    script_src += "&" + key + "=" + encodeURIComponent(value);
  });

  $("head").append('<script src="' + script_src + '"></script>');


  when_call(function () {
    // 4. Test if the comment HTML exists yet...
    return $("#idc-container .idc-thread").length;
  },
  function () {

    // 5. ..And, apply accessibility fixes.
    $.each(accessibility_fixes, function (sel, attr) {
        $(sel).attr(attr);

        D && console.log(sel, attr);
    });

    // 6. Hide loading message, show comment HTML.
    $loader.hide("slow");
    $("#idc-container").show("slow");

    D && console.log("comment.js: ", W.idcomments_post_id, W.idcomments_post_url, BLOG);
  });


  function when_call(when_true_FN, callback_FN, interval) {
    var int_id = setInterval(function () {
      if (when_true_FN()) {
        clearInterval(int_id);
        callback_FN();
      }
    }, interval || 250); // Milliseconds.
  }

});
