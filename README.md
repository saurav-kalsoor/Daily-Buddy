# Daily-Buddy

## Quick Start

Add your MONGO_URI to the default.json file. Make sure you set an env var for that and the jwtSecret on deployment

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