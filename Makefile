# Misc
.DEFAULT_GOAL = help
.PHONY        : help build up start down logs sh composer vendor sf cc
.BUNDLER_OPTIONS = --gemfile=Gemfile
## —— The Dart Makefile ——————————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9\./_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Jekyll —————————————————————————————————————————————
install: ## Install dependencies
	@bundle install $(.BUNDLER_OPTIONS)

start: ## Start dev server
	bundler exec $(.BUNDLER_OPTIONS) jekyll serve --watch -H 0.0.0.0

build: ## Build site
	@bundler exec $(.BUNDLER_OPTIONS) jekyll build

clean: ## Clean built files
	@bundler exec $(.BUNDLER_OPTIONS) jekyll clean