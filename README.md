# Instructions for running the NC-500 application.

This project waw bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

NC-500 is a SPA web application built using React.js. 

## Instructions
If not having done so already, Node.js and NPM (node package manager) must be install on the system intended to run the application. The node installers and instructions can be found here: [Download  Node.js](https://nodejs.org/en/download).

The application and it's companion app, the Node/Express API back-end, are hosted on GitHub and can be found here:

[NC-500](https://github.com/J-JohnWills/nc-500)

and here

[NC-500-Backend](https://github.com/J-JohnWills/nc-500)

Clone the applications using your preferred method. This could be through a CLI tool such as Git Bash using the `git clone` command, using the desktop GitHub application, or by simply downloading and then unpacking the .zip file

Open the nc-500-backend folder in your favourite editor and enter the command `npm i` – or – `npm install`. This will download the dependencies specified in the applications package.json, which are necessary for the program to run. Once these have downloaded the program can be started with the command `npm start`. We can check the program is running by opening a browser and navigating to `https://localhost:3000` which should present with a ‘Welcome to Express’ message

A note on port numbers: The express application by default uses port number 3000, however if you have an environment variable named **PORT** set up on your machine that defaults to a different port number, **8000** for example, the express application will use that port value instead.

Now open the nc-500 folder and repeat the previous step for installing dependencies. If the nc-500-backend application is using a port value that isn’t 3000 as noted above, you will need to open **data.js** and edit const **PORT = ‘ ‘** to the port number the nc-500-backend application is running on. This file can be found in the **‘src’** folder.

Once the dependencies have downloaded, and the PORT number has been changed if needed, the application can be run with the command `npm start`, which will open the application in a browser.
