

install: # установить зависимости
	composer install
	npm install
	npm ci

start: # запустить приложение
	node bin/brain-games.js
	node bin/brain-even.js
	node bin/brain-calc.js
	node bin/brain-gcd.js
	node bin/brain-progression.js
	node bin/brain-prime.js

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .