.PHONY: build clean
.DEFAULT_GOAL := build

OPTIMISE ?= yes

build:
	npm install
	bower install

ifeq ($(OPTIMISE), yes)
	webpack --optimize-minimize
else
	webpack
endif

clean:
	rm -rf bower_components/
	rm -rf node_modules/
	rm -rf ../site/themes/i3camini/static/
