# Contact Management App

This is a simple Node.js application for managing a list of contacts. 
It uses MongoDB database to store the contacts data and provides RESTful API endpoints to perform CRUD operations.

## Prerequisites

Before running the application, you need to have the following installed on your system:

- Node.js (version 14 or later)
- MongoDB (version 4.0 or later)

## Installation

Clone the repository:

```bash
git clone https://github.com/aniyavolfman/nodejs-rest-api.git
```
Install the dependencies:

```bash
npm i
```
Create a .env file in the root directory of the project with the following environment variables:

```bash
DB_HOST=
PORT=
```

Start the application:
```bash
npm run start:dev
```
## API Endpoints

The following API endpoints are available:

- GET /api/contacts : 
Get a list of all contacts.

- GET /api/contacts/:contactId : 
Get a contact by ID.

- POST /api/contacts : 
Add a new contact.

- PUT /api/contacts/:contactId : 
Update a contact by ID.

- PATCH /api/contacts/:contactId/favorite :
Update a contact favorite option.

- DELETE /api/contacts/:contactId : 
Delete a contact by ID.

## Request Body Schema

The request body for creating or updating a contact must follow the following schema:

```javascript
{
  "name": "Wylie Pope",
  "email": "est@utquamvel.net",
  "phone": "(692) 802-2949",
  "favorite": true
}
```
The name, email, and phone fields are required, and the favorite field is optional.

The request body for updating a contact favorite option must follow the following schema:

```javascript
{
  "favorite": true
}
```

## Error Handling

The API endpoints return error responses with code and message.

