

install: # установить зависимости
	composer install
	npm install
	npm ci

start: # запустить приложение
	# heroku local -f Procfile.dev
	node bin/brain-games.js
	node bin/brain-even.js

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .