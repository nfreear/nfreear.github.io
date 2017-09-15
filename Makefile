#
# Makefile | © 2015-2017 Nick Freear | License: MIT.
#
# The default, serve & draft targets require Ruby & Jekyll.
# The "rewrite" target requires PHP & Melody (http://melody.sensiolabs.org)
#

POST_DATE=`date +%Y-%m-%d`
# POST_DATE=`date +%Y-%m-%d-%H.%M.%S`
POST_FILE=_posts/$(POST_DATE)-edit-me.md
TEMPLATE=_drafts/2017-09-15-template.md


default: draft

help:
	# Targets: serve draft rewrite count find q={ KEYWORD }

serve:
	jekyll serve

draft:
	jekyll serve --drafts --unpublished --future

rewrite:
	../melody.phar run -vvv _bin/rewritemap.php
	php -l _out/index.php

count:
	@echo "Count of posts: " && ls _posts/ | wc -l

browse:
	/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome http://localhost:4000/

find:
	@echo q = $q
	find _posts -type f -name "*$q*"

unpublished:
	grep 'published: false' _posts/*

edit:
	@find _posts -type f -name "*$q*" | atom

npm-install:
	npm install grunt-cli -g
	npm i grunt grunt-exec grunt-contrib-jshint semistandard
	#npm install grunt-contrib-sass

new-post:
	cp $(TEMPLATE) $(POST_FILE)
	atom $(POST_FILE)
	#/usr/bin/open -a "/Applications/Google Chrome.app" 'http://google.com/'
	open -a "/Applications/Google Chrome.app" 'http://127.0.0.1:4000/'
	make draft

#End.
