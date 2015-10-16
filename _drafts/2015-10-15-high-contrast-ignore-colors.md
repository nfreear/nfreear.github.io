---
published: false
layout: post
title:  High contrast and ignore colours
date:   2009-10-15 22:00:00
categories:
tags:   high contrast  ignore-color  accessibility  low vision  fixes  javascript  css
---


Recently, I've been doing some one accessibility fixes for a project I maintain - the [LACE Evidence Hub][]. I am also doing some accessibility evaluations of other sites.

And so, I've been revisiting some work I did previously for [Open Media Player][] on fixing high-contrast related bugs and issues

Before we get into the meat of the post, I'll recap why high contrast and ignore colour settings matter. People with low vision face use a [number of techniques to read text and web sites][webaim]. They may use a screen magnifier, or zoom in with their browser. And, those users who struggle to perceive contrast, they may employ the high contrast settings built into operating systems including Windows. Or, they may set their browsers to ignore the colours and styles specified by a web site.

[ Todo - screen shots ... ]

Under such settings, background images used on buttons and elsewhere will disappear, and subtle borders which help to demarcate regions of a page can become invisible. Suddenly, an apparently beautiful page becomes much harder to comprehend!

Obviously, it is better to consider this situation upfront, and take care how background images and other styling is used. However, if find that you need to fix a site after the fact, is there anything you can do?

Yes!

The fix comprises two parts.

This is one of the rare cases where we can detect how the user has set up their computer. First, the small Javascript script, [ignore-color.jquery.js][], can be employed. It runs a test periodically by creating a hidden HTML element, setting its background colour, then detecting if the specified colour is still in use. If the user has used any sort of high contrast or "ignore-colour" setting in the operating system or browser, then the assigned colour will not be used -- the test will "fail".

The Javascript uses the result of the test to set a class on the `<body>` of the web page -- either `ignore-color` or `no-ignore-color`. The Javascript is fairly lightweight -- the only cost is that the test is run every 4-6 seconds via `setInterval()` (as far as I know, there is no alternative -- ideally one would detect Javascript event fired when the user changes their configuration).

While the first part of the fix is fairly generic, the second part is specific to each web site. The body-class set by the Javascript can be employed in stylesheets, to take remedial actions.

....




[LACE Evidence Hub]: http://evidence.laceproject.eu
[Open Media Player]: http://iet-ou.github.io/open-media-player
[webaim]: http://webaim.org/articles/visual/lowvision "WebAIM - Web accessibility in mind"
[useful]: http://ux.stackexchange.com/questions/27992/is-high-contrast-mode-really-useful
[ignore-color.jquery.js]: https://gist.github.com/nfreear/c82581b4485cd303150d


[End]: end
