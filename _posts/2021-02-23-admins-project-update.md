---
x-csp-disable: true
layout: post
title:  ADMINS project — update
date:   2021-02-23 16:30:00
tags:   IET-OU  OpenUniversity  OU  project
og-desc: A short description
# og-image-00: https://c1.staticflickr.com/5/4076/35671915106_62be509598_z.jpg
og-image-alt: ALT text.

last_updated: 2021-02-23
changefreq: daily
priority: 1.0
---

After a busy, rewarding and challenging year,
[Paco][] launched the main trial for [ADMINS][] on the 18th November 2020.
The trial was closed on the 10th January 2021, with 134 student respondents.

The respondents preferred the ADMINS Chat-bot that they trialled for us,
over the existing online form, when disclosing their disabilities and needs to us.
(_Links to research papers to follow_.)

[ADMINS Chat-bot "I have a prosthetic leg …" (screenshot)][cb-1]]

[Chetz Colwell][chetz] undertook accessibility testing before our main trial, and
I've followed up by contributing [accessibility][bug] [fixes][pr] to the Microsoft _WebChat_ Javascript library.

Below I've summarised some of our technical achievements and some challenges we faced.

## Technical achievements

* [Richard][rich] developed a structured data-format to load the conversation into the Chat-bot.
  This gives us flexibility to customize the conversation-flow, without changing the code;

We developed …:

* A custom "_patient_", adaptive speech recognizer for the Chat-bot,
  built on [MS Speech][] Cognitive Services (_live-demoed_!);

* And, a [LUIS model][] to classify multiple disabilities and health conditions
  from a potentially long, multi-sentence disclosure from a student.

## Challenges

* Incomplete documentation; documentation only dealing with simpler use-cases; out-of-date documentation;

* Issues encountered with speech-to-text accuracy when using low bandwidth phone calls ([Paul][])

…

Read more in [various][ms-2021] blog [posts][five] from early February 2021.

_I'm very proud of what we achieved throughout 2019-2020, and the COVID crisis!_

[chatbot-img-1]: https://photos.app.goo.gl/Dx8nmr48TZpgRpoZA
[cb-1]: https://photos.google.com/share/AF1QipNRl8TrqxlRhSc2nE_zQDVydaWk5I10fI32XOtoOkssdUrcXDy_WJZbUK9A8vOSkg/photo/AF1QipMBjIoS3ZMNWd7QYmtFcSOVwvjTZWgWjAtwEk0D?key=eV9WMGJxeFZBTy1LUElrc284ajJmZ0xjME1ZbjRB
[admins]: https://nick.freear.org.uk/2019/10/22/admins-project.html
  "Assistants to the Disclosure and Management of Information about Needs and Support (ADMINS)"
[project]: https://iet.open.ac.uk/projects/admins
  "Assistants to the Disclosure and Management of Information about Needs and Support (ADMINS)"
[luis]: https://eu.luis.ai/ "Language Understanding (LUIS), Microsoft"
[ms speech]: https://speech.microsoft.com/# "Speech Studio, Microsoft"
[paco]: https://iet.open.ac.uk/people/francisco.iniesto
  "Dr Francisco Iniesto, academic"
[rich]: https://iet.open.ac.uk/people/richard.greenwood#biography
  "Richard Greenwood, Edu Tech. developer"
[paul]: http://www.open.ac.uk/people/pam3
  "Paul Maher, Senior Product Development Manager (Emerging Tech)"
[paul fb]: https://facebook.com/paul.maher.98
[chetz]: https://linkedin.com/in/chetz-colwell-5a980510/
  "Dr Chetz Colwell Accessibility expert - Learning & Teaching"
[five]: https://ounews.co/education-languages-health/education/five-ways-the-ous-new-chatbot-can-support-disabled-students/
  "Five ways the OU’s new chatbot can support disabled students, By James Cantwell, January 29, 2021"
[res]: http://www.open.ac.uk/research/news/ou-trials-chatbots-support-students-disabilities
  "OU trials chatbots to support students with disabilities, ~3rd February 2021"
[ms-2021]: https://blogs.microsoft.com/accessibility/ai4aedugrants2021/
  "Reimagining the Future of Accessible Education with AI, Microsoft blog, 3rd Febraury 2021"
[bug]: https://github.com/microsoft/BotFramework-WebChat/issues/3655
  "Accessibility issues found during ADMINS testing, Bug #3655"
[pr]: https://github.com/microsoft/BotFramework-WebChat/pull/3669
  "Allow implementors to change the WAI-ARIA role of the container (#3658), Pull request #3669"

[End]: //.
