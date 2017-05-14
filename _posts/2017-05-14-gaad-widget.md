---
layout: post
title:  gaad-widget
date:   2017-05-14 07:55
tags:   accessibility
---

To help promote [Global Accessibility Awareness Day (GAAD)][gaad],
I've come up with the automated banner-link you see above.

Global Accessibility Awareness Day happens on the third Thursday of May each year.
The widget automatically appears 10 days before, and disappears 5 days after (_configurable_).
It shows the correct date each year - all thanks to [Datejs][].

The widget requires zero configuration by default:

```html
<div id="id-gaad"></div>

<script src="https://cdn.rawgit.com/nfreear/gaad-widget/1.0-beta/build/GAAD.widget.js"></script>
```

It can be [configured][usage], and already features basic [translation][].
Do give it a try, and vote for new features via the [wishlist][].

It is compatible with all modern browsers, and with Internet Explorer 10-11
([MSIE 9 is a work-in-progress][ie]).

And, it's [open source][MIT] ;).

Happy GAAD!




[GAAD]: http://globalaccessibilityawarenessday.org/?utm_source=github&utm_campaign=gaad-widget
[@gbla11yday]: https://twitter.com/gbla11yday
[@nfreear]: https://twitter.com/nfreear
[gaad-widget]: https://github.com/nfreear/gaad-widget
[usage]: https://github.com/nfreear/gaad-widget/blob/master/README.md#usage
[translation]: https://github.com/nfreear/gaad-widget/blob/master/README.md#translation
[wishlist]: https://github.com/nfreear/gaad-widget/issues/2#!-Wishlist
[ie]: https://github.com/nfreear/gaad-widget/issues/3#!-MSIE-9-11
[Datejs]: https://github.com/datejs/Datejs
[RawGit]: https://rawgit.com/
[MIT]: https://nfreear.mit-license.org/ "MIT License"
