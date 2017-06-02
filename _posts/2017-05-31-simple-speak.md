---
published: false
layout: post
title:  Simple-speak, voiceFamily
date:   2017-05-31 19:00
tags:   accessibility  javascript  e-learning
x-footer-script: https://cdn.rawgit.com/nfreear/simple-speak/28b78961/build/simple-speak.js
x-footer-script-00: https://rawgit.com/nfreear/simple-speak/master/build/simple-speak.js

##<style> input#id-simple-speak { min-width: 16em; font-size: 1em; padding: 2px 8px; } form { margin: 1em 0; } </style>
---


I've been continuing with the burst of activity that lead to the [gaad-widget][],
and a re-booted [sign-machine][].
In the case of `sign-machine`, it was desirable to produce a quick prototype, then judge the reaction.

Ever since I discovered screen readers, and worked for a speech technology
company [Aurix][], I've been fascinated by speech synthesisers.



<div class="demo">

<label>Speech input <input id="id-simple-speak" value="Hello. I'm simple-speak!"></label>

<div data-simple-speak='{ "voiceFamily": "Google UK English Female, Microsoft Anna - English (US), Kathy" }'></div>


<!-- <div id="XX--id-simple-speak">
  <p>Hello world!
  <p>I'm simple-speak.
</div> -->
</div>


It can be embedded on a page with 3 lines of HTML — including jQuery:

```html
<div id="id-simple-speak"> Hello. I'm simple-speak. </div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="https://cdn.rawgit.com/nfreear/simple-speak/1.0-alpha/build/simple-speak.js"></script>
```


Some possible use cases for `simple-speak`:

* As a component of online learning tools. For example, a re-boot of the [Moodle SimpleSpeak][mdl-p] [filter plugin][gh-mdl],
* A site widget (a bit like [Google's translate your site service][gtrans]),
* A browser extension,
* An updated synthesiser for an `in-browser` screen-reader, such as [WebAnywhere][].
  ([GitHub][gh-wa])
  _(Currently the screen-reader appears to be broken — a real pity.)_



[gaad-widget]: {% post_url 2017-05-14-gaad-widget %} "'Global Accessibility Awareness Day' — Javascript widget."
[sign-machine]: {% post_url 2017-05-21-sign-machine %} "Sign language Javascript widget."
[gh]: https://github.com/nfreear/simple-speak
[gh-mdl]: https://github.com/nfreear/moodle-filter_simplespeak "GitHub"
[mdl-p]: https://moodle.org/plugins/view.php?plugin=filter_simplespeak "Moodle plugins page"
[WebAnywhere]: http://webinsight.cs.washington.edu/papers/webanywhere-html/
  "'WebAnywhere: A Screen Reader On-the-Go' (2008) Bigham, Prince and Ladner, University of Washington."
[gs-wa]: https://scholar.google.com/scholar?q=WebAnywhere%3A+A+Screen+Reader+On-the-Go&
[gh-wa]: https://github.com/CMUBigLab/webanywhere
[wa]: http://webanywhere.cs.washington.edu/beta/
[gtrans]: https://translate.google.com/manager/website/
[aurix]: http://oaisys.com/aurix.aspx "Aurix, formerly '20/20 Speech', now part of OAISYS."
[ar-2020]: http://web.archive.org/web/20030207005542/http://www.2020speech.com:80/
