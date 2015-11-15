---
published: false
layout: post
title:  Accessify Wiki
date:   2015-11-14 20:40:00
categories:
tags:   accessibility  WAI-ARIA  javascript
---


This post is lo-o-oong overdue!

I started development on the prototype Accessify Wiki on [14 April 2013][] and paused work on 1 June 2014.
And really, its high time I tried to explain just what it's for and how it works...

## Raison d'être


[![Accessify Wiki-Fix the Web lifecycle, V2 October 2013][img-1]][img-1-pg]


## Anatomy of a fix

Suppose we have the following snippet of HTML on a page -- an image that when
pressed using a mouse closes a dialog box within the page, via Javascript.

### HTML before
{% highlight html linenos %}
<img
  src="close-button.png"
  onclick="closeDialog();"
/>
{% endhighlight %}


There are various accessibility issues, so here is an imaginary fix,
written in [YAML][] on the Accessify Wiki.

Line one defines a `_CONFIG_` object, with two required entries, `include` and `test_urls`.
`include` contains one or more URL patterns (_glob_ syntax), specifying
the set of pages on which these fix(es) should be applied.
`test_urls` defines one or more URLs to specific pages that can be used to test the fixes.

Line 7 contains a _selector_ as used in CSS stylesheets, jQuery and other contexts.
In this case it says, select images whose `src` attribute contains the text string `close-button`.
Lines 8--10 define three attributes that need to be added to the selected elments:
`tabindex`, `role` and `alt` (_ALT-ernative text_), and there respective values.


### The fix
{% highlight yaml linenos %}
_CONFIG_:
    include:
        - http://example.org/*
    test_urls:
        - http://example.org/test-page-1.html

img[ src *= close-button ]:
    tabindex: 0
    role: button
    alt: Close dialog

# Another fix
# ...
{% endhighlight %}


Note, as [the fix is written in YAML][p], we can dispense with most (almost all), of the
quote characters used in JSON, making the result more readable.

### HTML after

When the fix is injected via Javascript, it results in the following HTML:


{% highlight html linenos %}
<img
  src="close-button.png"
  onclick="closeDialog();"
  tabindex="0"
  role="button"
  alt="Close dialog"
/>
{% endhighlight %}

* A `tabindex` of `0` allows keyboard users to navigate to the button using the _TAB_ key,
* A `role` of `button` allows screen readers like JAWS to announce this element as a button, and
* The `alt` attribute describes to the user what action will be taken by pressing the button.

Our image that looks like a button, now _feels_ like a button
(or as [WCAG 2.0][] says, it is "_perceivable, operable, usable_ and _robust_" -- _POUR_).

Fix complete!


[![Accessify Wiki structure, part 1 -- the browser.][img-2]][img-2-pg]



[wikia]: http://accessify.wikia.com/
[code]: https://github.com/nfreear/accessify-wiki
[14 April 2013]: https://github.com/nfreear/accessify-wiki/commits/webapp2?page=4

[WCAG 2.0]: http://w3.org/TR/WCAG20/#intro-layers-guidance
    "Web Content Accessibility Guidelines (WCAG) 2.0, W3C Recommendation 11 December 2008"
[WAI-ARIA]: http://w3.org/TR/wai-aria/
    "Accessible Rich Internet Applications (WAI-ARIA) 1.0, W3C Recommendation 20 March 2014"
[sel]: http://w3.org/TR/selectors-api/
    "Selectors API Level 1, W3C Recommendation 21 February 2013"
[css]: http://w3.org/TR/css3-selectors/
    "Selectors Level 3, W3C Recommendation 29 September 2011"
[YAML]: http://yaml.org/ "YAML Ain't Markup Language"
[p]: http://yaml-online-parser.appspot.com/?yaml=_CONFIG_%3A%0A++include%3A%0A++++-+http%3A%2F%2Fexample.org%2F*%0A++test_urls%3A%0A++++-+http%3A%2F%2Fexample.org%2Ftest-page-1.html%0A++%0Aimg%5B+src+*%3D+close-button+%5D%3A%0A++tabindex%3A+0%0A++role%3A+button%0A++alt%3A+Close+dialog&type=json
    "Example fix in an online YAML parser"
[Google]: http://accessify.wikia.com/wiki/Fix:Google_search

[img-1]: https://docs.google.com/drawings/d/11cQ211LU3FDXaJIak1gSoidz6cDNYs0UCZO46Qestg8/pub?w=403&h=326
[img-1-pg]: https://docs.google.com/drawings/d/11cQ211LU3FDXaJIak1gSoidz6cDNYs0UCZO46Qestg8/#
[img-2]: https://docs.google.com/drawings/d/1ehhQDOYQpzTrEb_BeelVIBuP4Kov746jc5TPJm2RWio/pub?w=388&h=295
[img-2-pg]: https://docs.google.com/drawings/d/1ehhQDOYQpzTrEb_BeelVIBuP4Kov746jc5TPJm2RWio/#


[End]: end
