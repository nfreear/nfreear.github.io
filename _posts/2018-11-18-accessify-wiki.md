---
x-csp-disable: true
layout: post
title:  Accessify Wiki
date:   2018-11-18 10:51
tags:   [ "open source", accessify, javascript, accessibility ]
og-desc: Working together to fix accessibility on the Web, one site at a time.
og-image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Gnome-preferences-desktop-accessibility2.svg/240px-Gnome-preferences-desktop-accessibility2.svg.png
og-image-alt: Accessibility icon 2 (Gnome)

last_updated: 2018-11-18
changefreq: daily
priority: 1.0
---


_I should have written this [ages][p1] [ago][p2] ...!_

## What is Accessify Wiki?

_Accessify Wiki_ is a machine and human readable way of describing specific
accessibility fixes for an arbitrary HTML web page,
and a means of delivering those fixes to the user in their browser,
without being the owner or publisher of the web page.

[![Accessibility icon 2][svg-2]][gnome] [![Accessibility icon 1][svg-1]][c-1]

## Why Accessify Wiki?

_Accessify Wiki_ envisages a world where you really need to achieve something on a web page,
book train tickets, read something, or whatever,
and there's an accessibility problem which prevents you from completing your task.
The owner of the page(s) can't make the fix in a timely fashion,
so you reach out to ask if the community can help you crowd-source the solution., using Accessify Wiki.
And, the community pulls through.
In due course, the owner of the page(s), will hopefully incorporate the accessibility fix or fixes, completing a _virtuous cicrle_.

## Where did it come from?

...

## Describing a fix

The specification of accessibility fixes comprises two parts.

### Config

There is a `CONFIG` object defining which URLs/ pages the fixes apply to (expressed in [YAML][] format) ...

```yaml
include:
  - 'https://*.google.de/*'
  - 'https://*.google.co.uk/*'
  - 'http://www.google.com/*'
test_urls:
  - 'https://google.co.uk/search?q=Accessify+Wiki'
  # ...
default_locale: en-GB
authors:
  - Nick @nfreear
created: '2013-04-03T19:34+01:00'
```

### Fixes

...And, a set of [selectors][], with HTML attribute-value pairs, that define the fixes.

```yaml
# ...
.gb_o:
  aria-label: Popup
'.gb_o > a.gb_wa':
  role: button
  title: Close
  aria-label: "Close 'New feature' popup"
```

## Security

The Javascript uses a [whitelist][] to define which HTML attributes can be added or amended.
So, attributes including `alt`, `aria-label` and `role` are allowed,
but Javascript event handlers including `onclick` would not be allowed.
The accessibility fixes are currently exposed via a [JSON][] and [JSONP][] API.

A new API would deprecate `JSON-P` in favour of [CORS][] headers.

Note, that current implementations of _Accessify Wiki_ may be blocked on
some sites by a [Content Security Policy][csp].

## Continuous integration (CI)

The system can use the `test_urls` listed in the `config` object to
periodically test the number of selectors and attribute-value pairs that successfully match.
When the _hit/miss_ ratio goes below a threshold, this can be flagged to the Wiki maintainers/editors.

## How are fixes applied?

There is currently a [Accessify][bm] bookmarklet, and a [user Javascript][].

```js
javascript:(
  function (D, AC5U) {
    var s = D.createElement('script');
    s.src = 'https://accessifywiki.appspot.com/browser/js/accessifyhtml5-marklet.js?x=' + Math.random();
    s.onerror = function (e) { console.error('JS onload error. Probably CSP?', e.target.src, e) };
    D.body.appendChild(s)
  }
)(document, {})
// var%20s=..
```

## Timeline

Initial experimentation happened in [ScraperWiki][], and the [legacy Wiki][], is hosted on Wikia.
The legacy [API][json], [bookmarklet][] and [user Javascript][] were [developed][gh-old] between April 2013 and June 2014.
In 2016, I started a [new Wiki][] written in Markdown and hosted on GitHub Pages.

## What next?

The initial phase of _Accessify Wiki_ was a frenetic period of development and testing.
Since then I've had conversations, but never moved on to the next stages.

I would envisage a pilot study to test the efficacy of the prototype system(s) with real users.

[p1]: https://github.com/nfreear/nfreear.github.io/blob/master/_posts/2015-11-14-accessify-wiki.md
  "Draft blog post, 2015"
[p2]: https://github.com/nfreear/nfreear.github.io/blob/master/_posts/2016-03-19-accessify-wiki-proposal.md
  "Draft blog post 2, 2016"

[scraperwiki]: https://classic.scraperwiki.com/tags/accessify-wiki.html "Browse by tag / accessify-wiki"
[scraperwiki-0]: https://classic.scraperwiki.com/views/accessify-wiki/ "Created: 2013-04-27 07:32:44"
[legacy Wiki]: http://accessify.wikia.com/wiki/Accessify_Wiki
[new Wiki]: https://accessifywiki.github.io/ "January-February 2016"
[fix]: https://accessifywiki.github.io/fix/google-search.html "Fix:Google search"
[bookmarklet]: https://accessifywiki.appspot.com/browser/js/accessifyhtml5-marklet.js
  "Bookmarklet. 14 April 2013 - June 2014"
[user Javascript]: https://accessifywiki.appspot.com/browser/userjs/accessify.user.js
[json]: https://accessifywiki--1.appspot.com/fix?url=https://www.google.co.uk/search%3Fq=Accessify-wiki "JSON API, with CORS headers"
[jsonp]: https://accessifywiki--1.appspot.com/fix?callback=_callback&url=https://www.google.co.uk/search%3Fq=Accessify-wiki "JSON with padding API"
[gh-old]: https://github.com/nfreear/accessify-wiki "Legacy webapp2-based API. 14 April 2013 - June 2014"
[gh-api]: https://github.com/accessifywiki/accessifywiki-api
[selectors]: https://w3.org/TR/selectors-3/
  "Selectors Level 3: W3C Recommendation 06 November 2018"
[whitelist]: https://github.com/yatil/accessifyhtml5.js/blob/master/accessifyhtml5.js#L23-L24
  "`ATTR_SECURE` whitelist in the `yatil/accessifyhtml5.js` Javascript"
[cors]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS "Cross-Origin Resource Sharing (CORS) headers"
[csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP "Content Security Policy (CSP)"
[yaml]: https://en.wikipedia.org/wiki/YAML
  "YAML (YAML Ain't Markup Language) is a human-readable data serialization language. It is commonly used for configuration ..."
[yaml-1.2-ex]: http://yaml.org/spec/1.2/spec.html#id2761803
  "YAML Ain’t Markup Language (YAML™) Version 1.2. 3rd Edition, Patched at 2009-10-01"
[gnome]: https://commons.wikimedia.org/wiki/File:Gnome-preferences-desktop-accessibility2.svg
[svg-2]: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Gnome-preferences-desktop-accessibility2.svg/240px-Gnome-preferences-desktop-accessibility2.svg.png
[svg-1]: https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Gnome-preferences-desktop-accessibility.svg/240px-Gnome-preferences-desktop-accessibility.svg.png
[c-1]: https://commons.wikimedia.org/wiki/File:Gnome-preferences-desktop-accessibility.svg

[bm]: javascript:(function(D,AC5U){var%20s=D.createElement('script');s.src='https://accessifywiki.appspot.com/browser/js/accessifyhtml5-marklet.js?x='+Math.random();D.body.appendChild(s)})(document,{})
  "Javascript bookmarklet"

[End]: //.
