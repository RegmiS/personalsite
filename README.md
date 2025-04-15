# Personal website - made to display projects and learn new tech
Project is built using Pocketbase hosted on Railway and frontend is hosted on netlify

### Pocketbase setup:
```bash
curl -L https://github.com/pocketbase/pocketbase/releases/latest/download/pocketbase_0.21.0_linux_amd64.zip -o pocketbase.zip
sudo apt install unzip
unzip pocketbase.zip
chmod +x pocketbase
```

Setup the docker file
```docker
# Use Alpine for a lightweight image
FROM alpine:3.18

# Install necessary libs
RUN apk add --no-cache ca-certificates

# Create app directory
WORKDIR /app

# Copy PocketBase binary
COPY pocketbase .

# Copy optional data
COPY pb_data ./pb_data

# Make binary executable
RUN chmod +x ./pocketbase

# Expose the default port
EXPOSE 8090

# Run PocketBase
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
```
Send dockerfile onto whatever cloud hosting serve used to host PocketBase DB

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
npm i -g netlify # install netlify globally
```

## Development Server

Start the development server on `http://localhost:3000`:
```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pushing to netlify after building
netlify deploy
```
