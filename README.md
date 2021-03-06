# Node Auth Boilerplate

This is a boilerplate for an Express app with local user authentication. This is customized and handy for future projects.

## What It Includes

* Local Auth (email and password)
* Passport and passport-local
* Sessions for saving user info and displaying flash messages
* Settings for PostgresSQL and Sequelize
* Hashed passwords
* EJS templating and EJS layouts
* Seqeulize User model
* Materialize styling - nav and footer

## Included Models

**User Model**

|Column| Type | Notes |
|-----------------|------------|-------------|
| id | Integer | Serial primary Key|
| firstname | String | Required length > 1 |
| lastname | String | - |
| email | String | Unique Login |
| password | String | Hash |
| birthday | Date | - |
| admin | Boolean | Defaulted to False |
| pic | String | - |
| bio | Text | - |
| createdAt | Date | Automatically added by Sequelize |
| updatedAt | Date | Automatically added by Sequelize |



## Included Routes

**Routes in index.js (main)**

| Method | Path | Purpose |
| ------ | ---------------------- | ---------------------------- |
| GET | `/` | Home page |
| GET | `*` | Catch-all for 404s |

**Routes in controllers/auth.js**

| Method | Path | Purpose |
| ------ | ---------------------- | ---------------------------- |
| GET | `/auth/login` | Render login form |
| POST | `/auth/login` | Process login data |
| GET | `/auth/signup` | Render signup form |
| POST | `/auth/signup` | Process signup data |
| GET | `/auth/logout` | Remove user from session + redirect |

**Routes in controllers/profile.js**

| Method | Path | Purpose |
| ------ | ---------------------- | ---------------------------- |
| GET | `/profile/user` | Show user dashboard (authorized user only) |
| GET | `/profile/admin` | Show admin dashboard (authorized admin only) |
| GET | `/profile/guest/:id` | View user dashboard as guest (authorized user only) |

## Directions For Use

### 1. Clone the repository with a different name

```sh
git clone <repo_link> <new_name>
```

**Example:**

```sh
git clone https://github.com/essleeung/authBoiler.git fancy-new-things
```

### 2. Install the modules from package.json

```sh
npm i
```

### 3. Customize the new project

Remove irrelevant default stuff. For example: 
* Title in `layout.ejs`
* Logo field in nav bar
* Description and repo fields in package.json
* Remove the boilerplate's readme content.
* Swith favicon to project-specific one (`layout.ejs` head section)

### 4. Create a new database for the project.

```sh
createdb <new_db_name>
```

**Example:**
```sh
createdb fancy_db
```

### 5. Alter Sequelize Config File

In `config/config.json`, update the database name to the one created in step 4. Other settings likely okay, but check username, password, and dialect.

### 6. Check user model for relevance to new project's needs

Remove irrelevant fields in user model and user migration files.

### 7. Run the sequelize migrations

```sh
sequelize db:migrate
```

### 8. Create a file for environment variables either in the terminal or text editor.

```sh
touch.env
```

Include the following .env variables:

* SESSION_SECRET - this is a key for the session to use

### 9. Run server and check that everything is a-ok.

```sh
nodemon
``` 
OR 

```sh
node index.js
```

### 10. Delete the origin that points to the boilerplate repo

Currently if we run this command: 

```sh
git remote -v
```

It will show `origin` as being hooked up to the boilerplate repo. We want a fresh repo instead, so remove the orgin remote

```sh
git remote remove origin
```

### 11. Create an empty git repository

Follow instructions for creating new repo on Github website.

```sh
git init
git add .
git commit -m 'initial commit'
git remote add origin <new_repo_link>
git push origin master
```

***Rock on! You're done!***
