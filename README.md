# Tracking App

Backend: Async Kotlin server with H2 relational datastore  
Frontend: Functional React + TypeScript

## Steps to run
1. Run `chmod +x run.sh` to make `run.sh` an executable
2. Run `./run.sh` to initiate a docker-compose for the Kotlin server &
   run the React app
3. Visit `localhost:3000` and interact with the app. The Kotlin server is
   running in detached mode so it probably won't load before the client
   is ready. Wait a few minutes and then refresh the page. You'll know
   the server is ready when a very special character shows up.

Note: the UX for updating isn't great -- all fields need to be populated
for the update to go through.

### Stopping
* cmd+C will kill the client
* `docker stop tracking_app_1` will kill the Kotlin server running in detached mode

Note: there is a Dockerfile in `tracking-ui`, but it was being finicky
with the compose so I changed `run.sh` to run the React app locally

## Overview
The backend has server-side validation of character stats + a lot of error handling. See `Routing.kt` for an overview (it should be easy enough to follow even if you don't know Kotlin). It uses the H2 in-memory datastore to model a relational SQL database.

I haven't done modern frontend programming since 2018 so it's likely the client is missing a few best practices. I did a lot of web design in the past so my knowledge of CSS is decent, but due to the time constraint I only spent about 5 minutes on the CSS for the site (i.e. enough to make it usable). I toyed with using Tailwind but I decided the learning curve wouldn't leave me enough time to focus on core functionality.

Things I would add if I had more time:
* Tests (backend unit/integration, frontend, e2e)
* Authentication (likely zero-password OTP, maybe an integration with Auth0)
* Better UX (e.g. update character auto-population) & styling (including media queries since users use different devices)
* Client-/server-side request data sanitization for security (e.g. avoid XSS, database injection, etc.)
* Image hosting on [Docker Hub](https://hub.docker.com) to make this project faster / easier to run
* Better React state handling to avoid page repainting & smooth visual updates
* Deployment (CI/CD with deploy hook on `main` branch, automated testing, deployment to AWS ECS or EKS)
