# Blog example project with Heroku hosting

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Blog project example with heroku configuration, articles, acl, views, theme and without email and file upload

Email dont are configured, then you need to use the admin account bellow to login

**Admin account:**:
- Email: admin@example.com
- Password: admin

## How to install localy

1. Clone this project
2. Create one database for this project
2. Enter in project folder
3. Copy config/local.example to config/local.js
4. Configure you database params
5. install npm packages:
```sh
npm install
```
6. start with:
```sh
we go
```

See http://wejs.org for we.js docs

## After deploy, generate one build with:

```sh
npm run build
```

This command will optimize your assets for production env.

**Build With:**

- We.js
- 
## Test

```
npm test
```

## License

MIT
