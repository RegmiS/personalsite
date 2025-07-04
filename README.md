# Personal website - Displaying my projects and learning new tech
Tech stack: PocketBaseDB, TS, JS, Nuxt3, Vue, Tailwindcss, Netlify, Railway/Koyeb, NodeJS
<br> <br>
Goal: Learn a new framework and develop a website that can be updated and added onto. Ex - If I ever want to learn more about Auth, I can add it into the server and use it as a test ground.

Pitfalls: Config files and uploading/deploying to the cloud. Nuxt 3 compiling, nuxi vs nuxt, configuring for SSR, and understanding the production build process.
- Learning how to set environment variables for cloud deployment. Setting up the pocketbase server on Railway was also a little bit confusing.
    - For example, when setting 'netlify' as the preset for building, it will build into a /dist folder - but understanding why this was the case took a bit of time (because I was convinced that it should be outputting to a /.output folder when SSR is enabled)

### Things I learned from this project:
- Vue and templating
- Setting up serverless hosting using Netlify and hosting a DB on the cloud
- Layouts in Nuxt3 and SSR (Server side rendering)
- Using efficient DB calls (to save on usage and unnecessary calls)
- Transition effects between pages in Nuxt and doing transitions
- TailwindCSS and how easy/fun it is
- Vue Caurosel 

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

```bash
# need to make a .env file in root with the url of pocketbase db
API_BASE_URL=https://dburl
# also need to add environment vars in cloud hosting service: name - API_BASE_URL, url - url
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
# push to netlify in production branch
netlify deploy --prod

# since I use volta to install netlify, I have to do this:
npxnetlify deploy --prod
```
