---
published: true
x-csp-disable: true
layout: post
title:  our-journey
date:   2018-10-05 13:32
tags:   [ "open source", javascript ]
og-desc: Our Journey is an interactive online tool to chart the highs and lows of student journeys.
og-image: https://github.com/IET-OU/our-journey/raw/master/assets/screenshot-1.png
og-image-alt: our-journey — screenshot of the online tool.

last_updated: 2018-10-05
changefreq: daily
priority: 1.0
---

I'm happy to say that a week ago, my colleague [Tim Coughlan][tim] flicked the switch,
to publish the code for [our-journey][] as an open-source project.

_our-journey_ started off as a [paper-based game][download], to be used in workshops.
(_You may be surprised at our track-record as a distance university, in using paper-based tools!_)
It allows a student to describe their journey through education, in terms of the highs and lows,
happiness, frustrations, stress and so on.
The student can chart not only the learning-related steps — writing essays, revising, group tutorials etc.,
but also _administrative_ steps like applying to university, completing a Disabled Students' Allowance (DSA) assessment, and so on.

This can assist the student, tutors and support staff to work out where a problem might be,
and how to intervene to ensure success.
It has a firm [research][oro]-[based][oro-2] foundation.

[![Screenshot of the online tool][image]][our-journey]

The paper-based game has been turned into [an online activity][tool], by Tim (with help from me).

We've worked to make the code straightforward to understand, and maintainable.
Also to make it portable.
We've also started providing options for students to share their journeys.

There is a lot still to do, and we'd love your feedback and contributions.

[Fork][gh] the [gpl][]-licensed code on [GitHub][gh].

[tim]: https://iet.open.ac.uk/people/tim.coughlan
[our-journey]: https://iet-ou.github.io/our-journey/ "our-journey"
[download]: https://iet-ou.github.io/our-journey/download.html "PDF downloads"
[tool]: https://unpkg.com/our-journey/index.html
[gh]: https://github.com/IET-OU/our-journey
[gpl]: https://github.com/IET-OU/our-journey/blob/master/LICENSE.txt
  "GNU General Public License v3.0"

[oro]: https://oro.open.ac.uk/54760/ "Research paper. Coughlan & Lister, 2018"
[oro-2]: hhttps://oro.open.ac.uk/48991/ "Researh paper. Coughlan, Ullmann & Lister, 2017."
[image]: https://github.com/IET-OU/our-journey/raw/master/assets/screenshot-1.png

[End]: //.
