---
layout: post
title:  "Introducing ... Open Media Player"
date:   2015-08-20 15:23:00
categories:
tags:   accessibility   embed   Flash   HTML5   IET-OU   multimedia   oEmbed   OU   ouplayer   usability   video   WAI-ARIA
---


I'm very happy to announce that we have released Open Media Player (formerly called OU Media Player), as a free/open source project. It has been our intention for a while to make the code open source, and we were finally able to plan in the time to make it happen.

[![Open Media Player][example-img]][link]

## Why open source?

We decided to open source because:

 1. Open Media Player aspires to the highest levels of accessibility, while being a mainstream player - a fairly unique proposition;

 2. We adopt a service-based approach, where the player is kept separate from the audio/video files, and the web sites it is embedded in. This aids maintenance, feature roll-out and is again a unique selling point;

 3. To help drive innovation;

 4. Principle – it fits in with the Open University's mission - open to people, places and ideas;

 5. Educational – help others learn from our best-practices and our mistakes.

We've done a lot of work to make the Player straightforward to install, and hopefully understand. Installation via [Composer][packagist] is as simple as copying and pasting this at a terminal:

```
    composer create-project iet-ou/open-media-player --no-dev -sdev --prefer-dist
```

Some of the highlights of version 2 of Open Media Player:

* New embeddable, themed YouTube player
* Configurable site layout and authentication
* [Composer][] adopted, code-base re-factored into sub-packages
* Upgraded to [MediaElement.js][] 2.17.0
* Improved player user-interface in high-contrast (ignore colours) mode

And, [lots more][releases]!

Enjoy!

[iet-ou.github.io/open-media-player][]

[![Open Media Player][logo]][link]


[Composer]: http://getcomposer.org/
[packagist]: https://packagist.org/packages/iet-ou/open-media-player "Open Media Player on Packagist"
[releases]: https://github.com/IET-OU/open-media-player/wiki/Releases#2x
[iet-ou.github.io/open-media-player]: http://iet-ou.github.io/open-media-player/
[link]: http://iet-ou.github.io/open-media-player/
[example-img]: http://iet-ou.github.io/open-media-player/assets/images/omp-example.png
[logo]: http://iet-ou.github.io/open-media-player/assets/images/omp-logo-footer.png
[MediaElement.js]: http://mediaelementjs.com/


Targets:

 * http://www.open.ac.uk/blogs/LTT_IET/
 * http://freear.org.uk/content/introducing-open-media-player
 * http://cloudworks.ac.uk/tag/view/oEmbed

<!-- https://google.co.uk/search?q="Open+Media+Player" -->
