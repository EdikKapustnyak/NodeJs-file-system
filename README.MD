This repository is designed for quick file system use, allowing you to quickly and easily locate the files you need.

Below are some commands you might find useful for creating your project:

"npm init -y" - To initialize your project,

"npm install -y" - To initialize your project,

"npm i --save-dev nodemon" - A tool for automatically restarting a Node.js server when files are changed,

"npm i express" - Express is a convenient "constructor" for API,

"npm i dotenv" - Dotenv to store and load environment variables,

"npm i cors" - Middleware for Express that enables CORS (Cross-Origin Resource Sharing),

"npm i pino" - Used to log requests, errors, and server events in a nice, structured way,

"npm install pino-http" - Needed for logging requests/responses in Express, convenient debugging and monitoring of server operation,

"npm install pino-pretty" - Used in conjunction with pino or pino-http to ensure that logs are nicely formatted and readable in the console,

"npm i joi" - A library for data validation in the JavaScript environment, in particular in Node.js.

"npm i bcrypt" - Used for hashing when storing the password

To avoid code duplication when writing controllers, we will create a helper function-wrapper Try...catch in the utilities "ctrlWrapper.js".

In the middleware files, you'll find files such as:

errorHandler and notFoundHandler, which handle errors when accessing the database,  
As well as isValidId and validateBody - which check your validation.

A small addition to the utilities was also made, adding two files: calculatePaginationData and parsePaginationParams, which allow you to add pagination to your database.
