---
published: false
layout: post
title:  Composer-suggest, JuxtaLearn, LACE & Open Media Player
date:   2015-10-25 13:51:00 +0000
categories:
tags:   php  composer  LACE  JuxtaLearn  ouplayer  plugin
---


Over the course of a number of recent development phases in different software projects,
I've been working to simplify installation and dependency management, while leaving room
for the sort of experimentation required in research projects (indeed, many software projects?)

Way back in November 2013, I was working for [Gill Clough][] on the
[Tricky Topic tool][ttt], for the [JuxtaLearn][] European funded project.
Initial work for the tool was done by Martin Hawksey, and built on WordPress.
When I took over, I decided to use [Git submodules][] to the manage dependencies on
WordPress, third-party plugins, and custom plugins being developed for the project.

You can [see the results][github-1] in the first screenshot ...


[  Screen shot 1 ...  ]


Some potential benefits to note about Git submodules -- you can see the dependencies,
and their Git SHA-1 sums directly in GitHub, as the above screen shot shows.
However, as anyone who has tried submodules tends to realise, their are a [number][]
of [drawbacks][d].

There are [alternatives][alt], built to work fairly closely with Git.
However, these would all require evaluation, and would probably prove difficult
to support in our small, busy team.
So, after some experimentation, I concluded it was safer to adopt the _de facto_
standard dependency-manager for PHP, [Composer][], in my next project.
This was the [LACE Evidence Hub][LACE-EH], for Doug Clow and Rebecca Ferguson.



[Gill Clough]: https://twitter.com/gillclough
[ttt]: http://trickytopic.juxtalearn.net/ "JuxtaLearn Tricky Topic tool"
[JuxtaLearn]: http://juxtalearn.eu/
[Git submodules]: https://git-scm.com/book/en/v2/Git-Tools-Submodules
[github-1]: https://github.com/IET-OU/oer-evidence-hub-org/tree/juxtalearn "JuxtaLearn branch on GitHub, November 2013 – November 2014."
[number]: https://startpage.com/do/search?query=Git+submodules+disadvantages
[alt]: http://blogs.atlassian.com/2013/05/alternatives-to-git-submodule-git-subtree/ "By Nicola Paolucci, May 16, 2013"
[d]: http://codingkilledthecat.wordpress.com/2012/04/28/why-your-company-shouldnt-use-git-submodules/
    "By Amber Yust, April 28, 2012"
[Composer]: https://getcomposer.org/
[LACE-EH]: http://evidence.laceproject.eu/

[End]: end
