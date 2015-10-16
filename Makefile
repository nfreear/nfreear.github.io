
default: serve

serve:
	jekyll serve

draft:
	jekyll serve --drafts --unpublished --future

rewrite:
	../melody.phar run -vvv _bin/rewritemap.php
	php -l _out/index.php

#End.
