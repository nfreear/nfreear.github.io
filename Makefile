#
# The default, serve & draft targets require Ruby & Jekyll.
# The "rewrite" target requires PHP & Melody (http://melody.sensiolabs.org)
#

default: serve

help:
	# Targets: serve draft rewrite count

serve:
	jekyll serve

draft:
	jekyll serve --drafts --unpublished --future

rewrite:
	../melody.phar run -vvv _bin/rewritemap.php
	php -l _out/index.php

count:
	@echo "Count of posts: " && ls _posts/ | wc -l

#End.
