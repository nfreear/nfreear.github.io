#
# The default, serve & draft targets require Ruby & Jekyll.
# The "rewrite" target requires PHP & Melody (http://melody.sensiolabs.org)
#

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

edit:
	@find _posts -type f -name "*$q*" | atom

npm-install:
	npm install grunt-cli -g
	npm install grunt grunt-exec grunt-contrib-jshint grunt-contrib-sass

#End.
