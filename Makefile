
default: serve

serve:
		jekyll build && jekyll serve

rewrite:
		../melody.phar run -vvv _bin/rewritemap.php
		php -l _out/index.php

#End.
