# env-prepare: # создать .env-файл для секретов
# 	cp -n .env.example .env

# sqlite-prepare: # подготовить локальную БД
# 	touch database/database.sqlite

install: # установить зависимости
	composer install
	npm install
	npm ci

key: # сгенерировать ключи
# 	php artisan key:generate

# db-prepare: # загрузить данные в БД
# 	php artisan migrate --seed

start: # запустить приложение
	# heroku local -f Procfile.dev
	node bin/brain-games.js

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint