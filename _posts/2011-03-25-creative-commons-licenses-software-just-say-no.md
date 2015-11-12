---
layout: post
title:  Creative Commons Licenses for software – just say "NO"
date:   2011-03-25 21:52:00
categories:
tags:   [ creative commons, free software, open source ]
x-source:  http://freear.org.uk/content/creative-commons-licenses-software-just-say-no
x-comment-count: 5
x-comments:
  - id: 53
    by: Mike Linksvayer <http://gondwanaland.com/mlog> (not verified) | Thu, 31/03/2011 - 04:23
    subject: Make Your Open Source Software GPL-Compatible. Or Else.
    text: The best essay germane to this topic is <http://www.dwheeler.com/essays/gpl-compatible.html>
  - id: 55
    by: nick | Wed, 13/04/2011 - 10:26
    text: >
      Hi Mike,
      Thank you for the link. I read this a while back and forgot to include it!
      ...
      A few further thoughts which occur: ...
---


Two points before I start:

1. I'm not a lawyer, so this blog post does not constitute legal advice.
If you need help, contact a lawyer who specializes in software and content licensing. I accept no liability...

2. I'm absolutely not against Creative Commons Licenses, for content.
Indeed on recent projects I've made extensive use of CC licensed text, images and so on, and this blog is CC licensed. Just not for software...


So, you've written some software and decided to share it with others - congratulations!
You may be contemplating licensing it with one of the [range of Creative Commons Licenses][range]...
Hold on! In this blog post, I'll explain why this is a really bad idea, both for you and the community.
And I'll hopefully dispel some myths and point you to other sources of information.

The short answer is, if you use a Creative Commons License your software probably
[won't be free software/ open source software][won't], and therefore won't be
re-usable by others including developers (which is what you want right?)
The Creative Commons foundation themselves say [say you shouldn't use CC for software][say]. Why?


### Creative Commons ??-NonCommercial-?? – probably not what you meant

I'm going to take as my example the [Creative Commons Attribution-NonCommercial-ShareAlike License][cc-by-nc-sa],
which is a common combination, and one that I've seen used for software. You may be considering a "NonCommercial" license, because you don't want others to make a fortune by exploiting your software. Fair enough.

However, there are two problems with this premise. Firstly, what do you and I mean by commercial exactly?
For instance, I work in a university in the United Kingdom, which has been mostly publicly funded (for example by government funding of student places, and research funding).
But we like all other universities receive other funding from not-for profit foundations, private companies, and so on.
Increasingly, we are funded by student fees... Then there are private schools and other examples.
Working out whether certain organizations and contexts are absolutely non-commercial is a mine-field.
And I assume you wouldn't mind bodies like universities using your software...

The other issue is compatibility with other free/open source software licenses.
Commonly used licenses like the [GNU General Public License (GPL)][gpl] (the most common, used for about 60% of free software, including the GNU/Linux operating system, etc.), 2-clause BSD, Apache and MIT/XFree are not anti-commercial.
Indeed, they expressly allow you to use and modify the software in any context.
So, a license which includes a non-commercial clause is not compatible...


### A digression – free software/ open source business models

You may be surprised that the GPL is not anti-commercial. How can you make money if you can't charge for software?
The GPL actually allows you to charge for distribution of the software, but not for the software itself.
So in principle, you can bundle some software like Linux on a CD or DVD and sell it - and [people do][].
Obviously with a free market, and the ubiquity of the Internet, the cost of free software distributions is driven down...

More intriguing is the business model of software communities like Moodle (one that I know quite well).
[Moodle][] is a virtual learning environment, or e-learning software that is used by schools, colleges and universities around the world.
It is free/open source and distributed under the GPL. However, the name Moodle is
trademarked, and while [Moodle's trademark license][tm] allows us to use the name Moodle in non-commercial contexts (including to provide courses and write blogs!), you must seek permission if you wish to use the name for commercial purpose, such as providing Moodle hosting, support or development services.

And many businesses who provide these services pay the Moodle Trust for the privilege.
This helps keep servers running, [supports other][] running [costs and helps pay][costs] for a small subset of the core developers.
Also, large organizations, [like Microsoft and The Open University][like], fund the development of new features in core Moodle.
This and similar models for a lot of software including Drupal, Linux (eg. Redhat) and Firefox makes these software developments and communities sustainable.

I've digressed enough...


### Access to source code is paramount

[Free software definition][Free]: "The freedom to study how the program works, and change it to make it do what you wish (freedom 1). Access to the source code is a precondition for this."

The rationale from [Open source definition, point 2 of 10][Open] says "Rationale: We require access to un-obfuscated source code because you can't evolve programs without modifying them. Since our purpose is to make evolution easy, we require that modification be made easy."

Also, there are the [Debian Free Software Guidelines (DFSG)][Debian] -- point 2 of 10.

So for example, Flash should be distributed in source and compiled form, as
[Duncan Keith does through Subtangent][Duncan] -- dual licensed under the GPL (great!), and the Creative Commons Attribution - NonCommercial - ShareAlike 1.0 licence (not so good).


### Creative Commons ??-ShareAlike, creates more incompatibilities

Another common clause in Creative Commons Licenses is the ShareAlike one.
This says, that you can re-distribute, but only under precisely the same terms/ license.
This makes for example the CC-BY-NC-SA a so-called "viral" license.

More...

### GPL-compatibility, license proliferation

To come...



[range]: http://creativecommons.org/choose/
[won't]: http://gnu.org/philosophy/free-sw.html "GNU Free Software Foundation definition – one of several definitions"
[say]: http://wiki.creativecommons.org/FAQ#Can_I_use_a_Creative_Commons_license_for_software.3F "'We do not recommend it...'"
[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/3.0/ "CC-by-nc-sa, version 3, unported"
[GPL]: http://gnu.org/licenses/gpl.html
[people do]: http://linuxcd.org/ "One of several sites listing CD distributions, with prices"
[Moodle]: http://moodle.org/
[tm]: http://docs.moodle.org/en/License
[supports other]: http://www.oss-watch.ac.uk/resources/cs-moodle.xml#body.1_div.5
    "Moodle founder, Martin Dougiamas talking about sustainability, on OSS-Watch"
[costs]: http://slideshare.net/moodler/moodle-development-moodleposium-7th-september-2009/14
    "A slide from founder Martin Dougiamas on Moodle economics"
[like]: http://slideshare.net/moodler/moodlemoot-japan-2011-7038889/8 "Slides 8 and 9 (the OU is my employer!)"
[Free]: http://www.gnu.org/philosophy/free-sw.html#freedom-1
    "Four freedoms numbered 0 to 3! – Free software definition"
[Open]: http://www.opensource.org/osd.html#2-source-code "Open source definition, point 2 of 10"
[Debian]: http://www.debian.org/social_contract#guidelines-2-source-code "Debian Free Software Guidelines (DFSG)"
[Duncan]: http://subtangent.com/flash/ "Duncan Keith does through Subtangent"

[End]: end
