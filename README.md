## cse-341-project2 - Cinema Management API
This project is an API designed to manage a cinema, including operations related to employees and movies.

## Features
**Employee Management**: Create, read, update, and delete employee records.
**Movie Management**: Create, read, update, and delete movie records.

## Prerequisites
**Node.js (v18.17.1 or later recommended)** 
**npm (v9 or later recommended)** 

## Installation
**Install dependencies:**: npm install

## Running the Application
**To run the application in development mode:**: npm run dev

## API Endpoints
**Employees**
* GET /employees/: Get a list of all employees. 
* POST /employees/: Create a new employee.
* GET /employees/{id}: Get a specific employee by ID.
* PUT /employees/{id}: Update an existing employee by ID.
* DELETE /employees/{id}: Delete an employee by ID.

**Movies**
* GET /movies/: Get a list of all movies.
* POST /movies/: Create a new movie.
* GET /movies/{id}: Get a specific movie by ID.
* PUT /movies/{id}: Update an existing movie by ID.
* DELETE /movies/{id}: Delete a movie by ID.

## Authentication
The API uses OAuth for authentication. Ensure you have your OAuth setup correctly to test authenticated routes.
**Protected Routes**
* POST /employees/
* PUT /employees/{id}
* DELETE /employees/{id}
* POST /movies/
* PUT /movies/{id}
* DELETE /movies/{id}
**Testing Authentication**
You can test authentication using tools like Insomnia or Postman. Make sure to include the appropriate OAuth tokens in your requests to access protected routes.

## Authentication Routes
* POST /login: Authenticate and log in a user.
* GET /logout: Logs out the user and destroys the session.

## Swagger Documentation
You can access the API documentation using Swagger UI at:
* http://localhost:3000/api-docs
or
* https://cse-341-project2-ux8v.onrender.com/api-docs/
