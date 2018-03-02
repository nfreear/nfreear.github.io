---
layout: post
title:  Accessibility testing, with 'pa11y-ci'
date:   2018-03-02 21:25
x-created: 2018-02-28 21:35
tags:   [ accessibility, travis-ci, "open source", NPM, javascript ]
# og-desc: A short description
# og-image: https://..
# og-image-alt: ALT text.

last_updated: 2018-02-28
changefreq: daily
priority: 1.0
---


I've recently come across an open source, automated accessibility
testing tool called [pa11y-ci][], and I'm really impressed with how easy
it is to set up, and the usefulness of the results.

Note, tools like `pa11y-ci` are not of course a replacement for accessibility testing with humans.

`pa11y-ci` is written in Javascript for Node.js.
It is built on top of [pa11y][], and [HTML_CodeSniffer][].
And, it integrates well with [continuous integration][ci] platforms like [Travis-CI][].

Here's a run down on how I'm using it so far. (You'll need [npm][].)

To get started, run this command in your terminal:

```sh
npm install pa11y-ci --save-dev
```

Create a configuration file named [`.pa11yci.json`][.pa11y], specifying
a `standard`, some `urls` and other options. Here's an example:

```json
{
  "#": "Automated accessibility testing ~ https://github.com/pa11y/pa11y-ci",

  "defaults": {
    "standard": "WCAG2AAA",
    "timeout": 5000,
    "wait": 2000,
    "verifyPage": "gaad-widget-js"
  },
  "urls": [
    "http://127.0.0.1:9001/embed/?gaadwidget=force&...",
    "http://127.0.0.1:9001/test/static.html?..."
  ]
}
```

I'm eschewing [Grunt][] _et al_, and simply adding `scripts` to my
[`package.json`][pkg]:

```json
{
  "devDependencies": {
    "pa11y-ci": "^1.3.1"
  },
  "scripts": {
    "pa11y-ci": "pa11y-ci --config .pa11yci.json"
  }
}
```

To run the above `script`, type this in your terminal:

```sh
npm run pa11y-ci
```

Here's a more complete [`package.json`][pkg]:

```json
{
  "name": "gaad-widget",

  "devDependencies": {
    "live-server": "^1.2.0",

    "pa11y-ci": "^1.3.1"
  },
  "scripts": {
    "test": "echo Testing ...",
    "serve-ci": "live-server --port=9001 -V --no-browser --watch=DUMMY",

    "pa11y": "pa11y --standard WCAG2AAA http://127.0.0.1:9001/#..",
    "pa11y-ci": "pa11y-ci --config .pa11yci.json"
  }
}
```

And, here is a simplified [`.travis.yml`][trav] file:

```yaml
language: node_js

node_js: 8

git:
  depth: 8

install: npm install

before_script: npm run build

script:
  - npm test
  - npm run serve-ci & sleep 5; npm run pa11y-ci;
```

The above results in this [Travis-CI job output][gaad-job]:

```
> pa11y-ci --config .pa11yci.json
Running Pa11y on 2 URLs:
GET /embed/?gaadwidget=force&_ua=pa11y-ci 200 28.105 ms - 1708
GET /test/static.html?_ua=pa11y-ci 200 30.170 ms - 1792
GET /dist/gaad-widget.js 200 4.013 ms - 12631
GET /style/gaad-widget.css 200 3.276 ms - 1125
 > http://127.0.0.1:9001/embed/?gaadwidget=force&_ua=pa11y-ci - 0 errors
 > http://127.0.0.1:9001/test/static.html?_ua=pa11y-ci - 0 errors
✔ 2/2 URLs passed
```

The good:

 * The [Cloudworks][] home-page
 * [gaad-widget][]
 * ...

The bad:

 * [The comments on my blog][blog] ([see job output][blog-job]) :(
 * ...



If you'd like to use `pa11y-ci`, why not add a [badge][] to your README?
For example:

[![Accessibility testing - GAAD passes][pa11y-icon]][pa11y-ci]

Articles by [Andrew Mee][], [Ire Aderinokun] and others contain more useful tips.


[npm]: https://npmjs.com/get-npm
[pa11y]: http://pa11y.org/
[gh-pa11y]: https://github.com/pa11y/pa11y
[pa11y-ci]: https://github.com/pa11y/pa11y-ci
[travis-ci]: https://travis-ci.org/nfreear/gaad-widget
[gaad-job]: https://travis-ci.org/nfreear/gaad-widget/jobs/347455031#L1083-L1104
[blog-job]: https://travis-ci.org/nfreear/nfreear.github.io/jobs/348424796#L1470-L1554
[pa11y-icon]: https://img.shields.io/badge/accessibility-pa11y--ci-blue.svg
[badge]: https://shields.io/ "accessibility-pa11y--ci-blue.svg"
[HTML_CodeSniffer]: http://squizlabs.github.io/HTML_CodeSniffer/
[ci]: https://en.wikipedia.org/wiki/Continuous_integration
[grunt]: https://gruntjs.com/

[pkg]: https://github.com/nfreear/gaad-widget/blob/3.x/package.json#L1 "package.json"
[trav]: https://github.com/nfreear/gaad-widget/blob/3.x/.travis.yml#L1 ".travis.yml"
[.pa11y]: https://github.com/nfreear/gaad-widget/blob/3.x/.pa11yci.json#L1 ".pa11yci.json"

[gaad-widget]: https://github.com/nfreear/gaad-widget
[cloudworks]: http://cloudworks.ac.uk/
[blog]: # "Oh dear! A work-in-progress"

[Andrew Mee]: http://cruft.io/posts/automated-accessibility-testing-node-travis-ci-pa11y/
[Joviano Dias]: https://medium.com/springernature-qa/integrating-pa11y-ci-in-your-ci-cd-pipeline-f143bb5e36f
[Ire Aderinokun]: https://bitsofco.de/pa11y/

[End]: //.
