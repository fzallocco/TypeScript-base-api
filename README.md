# 1. TypeScript REST API

To move forward with this app, make sure you run the latest long-term support version of Node.js (v18). I set up this typescript environment to en hance API development. Browsers understand JavaScript, and TypeScript permits stable and scalable code, so this node app will compile TypeScript code into JavaScript, alleviating the workload of debugging and fixing JavaScript code. For the sake of simplicity, I did not include a .env file for now although it is industry practice to embed one to avoid carrying out changes to the port inside the live server numerous times. This image is meant to run the core technology since Firebase will provide every other backend service. Below are the instructions to follow to run the app.

Install this image by executing `npm install`
Next, build app with `npm run build`
Finally, execute `npm run dev`

# 2. Run App in Docker container

We use Docker as part of the CI/CD pipeline & for deployment.
Docker is similar to a virtual machine and makes testing for both developers and users relatively easy because it requires fewer commands to run the app.

Building the image

`docker build -t typescript:dev . --no-cache`

Running the image

`docker run -p 9000:9000 typescript:dev`

# 3. Importing Firebase Project to MVP

To augument the capabilities of MVP, you can use services like Google's Firebase to store data, perform CRUD operations, and implement countless features. To do so, a Firebase account must be created and a Firebase config file needs to be set up within the app.

# 4. Replicating this project

To replicate this project, create an empty repository and follow the code below.

`npm init -y` THis will create an empty package.json

Next, populate the package.json file with the same scripts featured in this app

Subsequently, generate a typescript config file with `tsc --init`

Exposte outDir & rootDir folders in the tsconfig file

Test that typescript is compiled into javascript by executing `tsc`

Finally, executing the last few commands will run the server

A. `npm run build`

B. `npm run build`

C. `npm run dev`

