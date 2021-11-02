# Daily-Buddy

Daily Buddy is just not an application but it is your best 
friend in your college which helps you to keep you updated with 
daily news bulletin. It will further helps you in maintaining your 
budget and helps you keep organize your daily online meeting 
links, which are lost somewhere in your whatsapp group and  don’t worry 
about the secured data we are one of the best in it. 

## Quick Start

In `backend` folder create a `.env` file add the
following variables.
```bash
PORT = 5000
MONGODB_URI = 
DB_NAME = 'dailyBuddy'
ACCESS_TOKEN_SECRET = 
REFRESH_TOKEN_SECRET = 
```
Add your MONGODB_URI which is generally 
`"mongodb://localhost:27017"` and values of
access tokens can be created by running
`require('crypto').randomBytes(16).toString('hex')` in node.

In `frontend` folder create .env.local file containing
the following variable.
```bash
REACT_APP_HOST = "http://localhost:5000"
```

```bash
# Install dependencies for server
cd backend
npm install

# Install dependencies for client
npm run forntend-install

# Run the client & server with concurrently
cd frontend
npm run both

# Backend runs on http://localhost:5000 and Frontend on http://localhost:3000
```
## Tech Stack

**Client:** HTML5, CSS3, Bootstrap4, React.Js

**Server:** Node.js, Express.js, MongoDb


## Authors

This project is developed and maintained
by 
- [@Hasan Koser](https://www.github.com/HASH-002) 
- [@Saurav Kalsoor](https://github.com/saurav-kalsoor)