---
published: false
layout: post
title:  Speech-devices and stammering
date:   2021-05-08 08:30:00
tags:   stammer
og-desc: A short description
# og-image-00: https://c1.staticflickr.com/5/4076/35671915106_62be509598_z.jpg
og-image-alt: ALT text.

last_updated: 2021-05-08
changefreq: daily
priority: 1.0
---

Do you stammer/stutter? I do.

While working on the [ADMINS][] Chat-bot project last year, we came to a significant realisation.

The speech recognizer used by default in [Webchat][] (and many other speech user-interfaces) assume the first pause in your speech (_even a small one_) is the end of your utterance and move on with the conversation. Now this may be acceptable if your responses consist of “_yes_“, “_no_“ and “_continue_“, or you have typical speech patterns.

However, as soon as you're answering open-ended questions, or have a stammer/stutter or other dis-fluency, then it soon breaks down, and the Chat-bot cuts you off mid-response. I characterize that as _impatient_!

Our answer was to develop an alternative, adaptive speech recognizer, built on Microsoft's [cognitive speech][] SDK. This was configured with a longer timeout for the open-ended questions in our Chat-bot's dialog, while recognizing and responding more quickly to the shorter closed responses like “_yes_“, “_no_“ and “_move on_“.

After some experimentation, we settled on a timeout of _1.75 seconds_ (a compromise between everyone's needs), and the adaptive speech recognizer was used successfully during the main trial for ADMINS. Always at the back of my mind was the question — could the speech recognizer adapt to the _speaker_, not just to the conversation?

Since then, I've realised that most speech-devices, including smart speakers like Alexa, voice assistants like Siri and automated phone-systems are not well suited to those with a stammer/stutter or other non-typical speech.

What I sense is needed, is data on the attitudes of people who have dis-fluencies to speech-devices, and research into the effectiveness of potential adaptations. This could be used to drive change, potentially including through standards like the [Web Content Accessibility Guidelines][wcag].

I'm working to put together a research project. I effectively _mocked up_ a short [survey on twitter][twit-survey], with interesting results!

Luckily I'm not the only one working in this space! Project [Euphonia][] and Project [Understood][] are important and ambitious projects to effect change. Researchers including [Leigh Clark][] are doing valuable research.

If you're interested in collaborating, please reach out to me on [twitter][nfreear] or [via The Open University][ou-profile].

[admins]: https://iet.open.ac.uk/projects/admins
  "Assistants to the Disclosure and Management of Information about Needs and Support"
[webchat]: https://github.com/Microsoft/BotFramework-WebChat
  "Microsoft's Bot Framework Web Chat component"
[cognitive speech]: https://github.com/Microsoft/cognitive-services-speech-sdk-js
  "Microsoft Cognitive Services Speech SDK for JavaScript"
[twit-survey]: https://twitter.com/nfreear/status/1385986720928260096
  "“To all who #stutter/#stammer/have a disfluency from a stammerer- I'm interested in how speech-enabled Chatbots Alexa Siri & automated phone systems impact you. I'd love your responses to these Qs…”, tweet by @nfreear, 24-April-2021"
[wcag]: https://www.w3.org/TR/WCAG21/
  "Web Content Accessibility Guidelines (WCAG) 2.1, W3C Recommendation 05 June 2018."
[euphonia]: https://sites.research.google/euphonia/about/
  "Project Euphonia is a Google Research initiative focused on helping people with atypical speech be better understood."
[understood]: https://projectunderstood.ca/
  "Teaching Google to understand people with Down syndrome, one voice at a time."
[Leigh Clark]: https://doi.org/10.1145/3405755.3406139
  "Clark, L., Cowan, B. R., Roper, A., Lindsay, S., & Sheers, O. (2020, July). Speech diversity and speech interfaces: considering an inclusive future through stammering. In Proceedings of the 2nd Conference on Conversational User Interfaces (pp. 1-3)."
[nfreear]: https://twitter.com/nfreear "@nfreear on Twitter"
[ou-profile]: https://iet.open.ac.uk/people/nick.freear
