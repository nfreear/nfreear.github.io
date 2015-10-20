---
layout: post
title:  Nomensa’s open source Accessible Media Player – first look
date:   2012-01-27 23:02:00
categories:
tags:   [ media player, open source, review, video ]
x-source:  http://freear.org.uk/content/nomensa-accessible-media-player
x-comments: 3
x-comment-url: http://freear.org.uk/content/nomensa-accessible-media-player#comment-85
---



I was tipped off about Nomensa's player, [newly open sourced][newly] (thanks [Chetz][]),
and ever curious, I thought I'd take a look.

I came across version 1 of the player last year, and I must say at the time I was a bit bemused.
It seemed to be a thin wrapper around either YouTube, or the JW Player (I can't remember which), and Nomensa weren't upfront about saying so.

Note, I'm not going to go into the accessibility aspects here, but instead concentrate on how the open-source project itself is presented.

Briefly, the player itself is reasonably elegant. The control bar is fairly deep, which I like, but some may not appreciate.
It could be a bit overwhelming if a number of players are presented on the same page.
The icons for Play, Rewind and so on are a bit small given the size of the control bar, though the active area of the button is bigger.

And, you get the Nomensa logo... I haven't looked yet to see if there is a
`nomensa_branding: false` option yet, or better yet, a `my_logo_url: ..` option!

You can play YouTube, Vimeo apparently, and self-hosted video, via [jwPlayer][].
From memory, the jwPlayer claims to be open-source, but then its very hard (or impossible) to find out what license it is released under ([yes, still the case][yes]!)

Anyway, I digress. Back to Nomensa's project (and apologies to them if any of these points are on their todo list).

Yes, they [host the source code on Github][host] -- first tick (Github truly is the flavour of the moment).

My first impression was, its missing a README file - preferably one in Markdown format (`README.md`).
A few lines about the project, who created it, copyright, the name of the open source license,
credits ("__We use jQuery, jQueryUI, jwPlayer... copyright.. license.__"), where
to look for installation and configuration options etc. would be very useful.
And Github presents the README marked up below the source code.

Second thought, where's the license statement..? Ah, there is a `license.txt` file...
This doesn't look like a standard free/open source license...
Wait a minute, yes its [GPL version 3][gpl] ("__“This License” refers to version 3 of the GNU General Public License.__"), without the GPL 'Preamble' and with odd formatting. A clearer copyright and license statement (including in the README) would help people find their feet.

I cloned the repository (Github's Clone in Mac option really speeds things along).

There is one `examples.html` file. This mixes documentation with a number of example embeds, which is confusing.
I looked at the source, and cut it down from 200 lines of HTML (yes 200), [to 30 in this Gist][to 30].
Convert to the HTML5 doctype, remove the extraneous stuff, and it easier to see what is happening.
And to start playing with the configuration (there is a version of the file with copious comments).

I suggest that examples.html is broken into multiple example files, with a separate quick start file documenting configuration options.

I came across an early problem, when the YouTube example failed to play on my local machine.
A change from the `file:` protocol to local `http:` fixed this.
This probably warrants a warning (first rule of software release -- someone will always try a configuration you didn't think of!)

Nomensa include an example video with captions, which is obvious (given that they are an accessibility consultancy, and the play is sold as accessible), but welcome.

And there is a 22 page PDF, which seems a little excessive.
Given that, some explanation around how the player is accessible wouldn't go a miss (use of HTML buttons, natural tab order, text...).

And any details of their testing regime would be a bonus.
I've thought for a while that if we all took time to publish our usability/accessibility methodologies and reports it would help with education.
[Note][], [some][] [people][] [have][] - thank you!

Anyway, I hope Nomensa's project flourishes. Good luck to the Bristolians.

Now, off to fix my own open source projects...

Quick links:

* [WebAIM thread][newly]
* [Nomensa's news item, fixed link][news]
* [Github: nomensa / Accessible-Media-Player][host]
* [My Gist on Github][to 30]



[Chetz]: http://iet.open.ac.uk/people/c.colwell "Dr Chetz Colwell"
[newly]: http://webaim.org/discussion/mail_thread?thread=5117
[jwPlayer]: http://www.longtailvideo.com/players/jw-flv-player/
[yes]: http://developer.longtailvideo.com/trac/
[host]: https://github.com/nomensa/Accessible-Media-Player
[gpl]: http://www.gnu.org/licenses/gpl.html
[to 30]: https://gist.github.com/1691067

[Note]: http://moodle.org/mod/forum/discuss.php?d=191331 "Moodle forums"
[some]: http://accessibility.oit.ncsu.edu/reports/moodle-2-1/ "Report, NC State University 2011"
[people]: http://docs.moodle.org/dev/Moodle_Accessibility_Specification "Open University report, 2006!"
[have]: http://www.cannect.org/testing-moodle.html "Cannect report, 2009"

[news]: http://www.nomensa.com/about/news-items/nomensas-accessible-media-player-20-now-free-download
