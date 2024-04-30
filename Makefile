# Misc
.DEFAULT_GOAL = help
.PHONY        : help build up start down logs sh composer vendor sf cc
.NPM_COMPONENTS = npm --prefix components
.BUNDLER_OPTIONS = --gemfile=jekyll/Gemfile
## —— The Dart Makefile ——————————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9\./_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Jekyll —————————————————————————————————————————————
install: ## Install dependencies
	@bundle install $(.BUNDLER_OPTIONS)
	@$(.NPM_COMPONENTS) install

start: ## Start dev server
	@$(.NPM_COMPONENTS) run watch \
& bundler exec $(.BUNDLER_OPTIONS) jekyll serve --source jekyll --watch -H 0.0.0.0

build: ## Build site
	@bundler exec $(.BUNDLER_OPTIONS) jekyll build --source jekyll
	@$(.NPM_COMPONENTS) run build

clean: ## Clean built files
	@$(.NPM_COMPONENTS) run clean
	@bundler exec $(.BUNDLER_OPTIONS) jekyll clean --source jekyll