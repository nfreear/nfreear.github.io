---
#published: false
layout: post
title:  Welcome to my new Jekyll-powered blog!
date:   2015-11-07 10:22:00
x-created: 2015-09-29 21:44:20
categories: jekyll update
---


Welcome to my re-developed blog!

My [original blog][], started in [April 2009][] is built on [Drupal, a PHP-based CMS][drupal].
Drupal was an obvious choice at the time, as I'd started using it for [projects at work][olnet].
(The Open University was and still is a heavy user of Drupal.)
Building the blog gave me practice developing and configuring the platform.
In six and a bit years, I've published [80 odd blog posts][80].


[Photo of Stickle Tarn, Langdale, Lake District](https://flickr.com/photos/nfreear/16989343378#!_EMBED_ME_)


However, recently I've not written as much, the design was looking tired,
and I was way behind on security updates (_no longer_).
My options looked like:

1. A _WordPress.com_-hosted blog;
2. Self-hosting a WordPress-based blog (_yes, I like WordPress_).

Option 1 is safer, while option 2 offers more scope for experimentation.
However, neither necessarily appealed a lot, particularly as I now tend to write
in [Markdown][], then convert when I publish.

I had come across [Jekyll][] and [GitHub Pages][] via my recent work for
[Open Media Player][]. Then I read [Dave Cole's 2012 post on CMS-free websites][cole].

His arguments and back-to-basics approach makes a lot of sense.
I can't pretend that I need to think about performance for my blog too much(!),
but who knows when a post might get a lot of traffic via Twitter and social media.

Some of the key benefits for me are:

1. Security -- I don't need to think about patching the application layer
(_PHP + WordPress_ or whatever) -- there is none, and the hosting provider (GitHub pages)
takes care of the server layer (_OS + web_ server, etc.) and build tools (Ruby + Jekyll);
2. Backup / archive -- content isn't locked away in a database;
instead it's in Git (_Markdown + YAML frontmatter creates a type of document-oriented database_);
3. I don't need to learn Ruby to use Jekyll (though I may later);
4. I can experiment, focussing on front-end features.
And, the code is in Git straight away (in Drupal I tended to add code to custom blocks -- _bad, bad!_)

My main area of concern is using third-party commenting tools, and any
usability and accessibility implications
(I hope to talk soon about why I looked at Disqus, but chose [IntenseDebate][] for now).

I've been gradually [importing][] my [archive][], and I'm enjoying writing new posts.


## Technology

Here is a quick rundown of some of the technologies and components:

* Ruby and [Jekyll][] to convert and copy the site source into static HTML + CSS + Javascript;
* [jQuery-oEmbed][] for most of the embedded images, videos and similar ([plugin][]);
* [IntenseDebate][] for commenting;
* jQuery for various functionality, including [accessibility fixes][js];
* Other accessibility fixes are [in the HTML templates][a11y].


[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help

[Markdown]: https://daringfireball.net/projects/markdown/
[cole]: https://developmentseed.org/blog/2012/07/27/build-cms-free-websites/ "by Dave Cole, 2012"
[original blog]: http://freear.org.uk/
[April 2009]: {% post_url 2009-04-16-the-rich-in-rss %}
[drupal]: https://drupal.org/
[olnet]:  http://olnet.org/
[80]: https://google.com/search?q=site%3Ahttp%3A//freear.org.uk/content
    "'About 82 results', says Google. (Not bad, huh? Not that I'm counting ...)"
[GitHub Pages]: https://pages.github.com/
[Open Media Player]: http://iet-ou.github.io/open-media-player
[importing]: https://github.com/nfreear/nfreear.github.io/issues/2
[archive]: https://github.com/nfreear/nfreear.github.io/blob/master/_posts/_blog.md "Analytics"

[jQuery-oEmbed]: https://code.google.com/p/jquery-oembed/ "Project"
[plugin]: https://embed.open.ac.uk/scripts/jquery.oembed.js "Javascript plugin"
[IntenseDebate]: https://intensedebate.com/
[js]: https://github.com/nfreear/nfreear.github.io/blob/master/js/main.js#L80-L91
[a11y]: https://github.com/nfreear/nfreear.github.io/issues/1


[End]: end
