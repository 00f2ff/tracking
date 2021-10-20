# Tracking App

Backend: Async Kotlin server with H2 datastore
Frontend: Functional React + TypeScript

### Steps to run
1. Run `chmod +x run.sh` to make `run.sh` an executable
2. Run `./run.sh` to initiate a docker-compose for the Kotlin server &
   run the React app
3. Visit `localhost:3000` and interact with the app

#### Stopping
* cmd+C will kill the client
* `docker stop tracking_app_1` will kill the Kotlin server running in detached mode

Note: there is a Dockerfile in `tracking-ui`, but it was being finicky
with the compose so I changed how `run.sh` works