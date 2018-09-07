.PHONY: build clean
.DEFAULT_GOAL := build

OPTIMISE ?= yes

build:
	npm install
ifeq ($(OPTIMISE), yes)
	$(shell npm bin)/webpack --optimize-minimize
else
	$(shell npm bin)/webpack
endif

clean:
	rm -rf node_modules/
	rm -rf ../site/themes/i3camini/static/
