## 📍 Endpoint: `/users/register`

### 📝 Description
This endpoint registers a new user by validating input data, securely hashing the password, storing the user in the database, and returning a JWT authentication token.

---

### 📤 Method
**POST**

---

### 📥 Request Body (JSON)
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "yourStrongPassword"
}
```

---

### ✅ Validations
| Field                 | Validation                        | Message                                      |
|----------------------|------------------------------------|----------------------------------------------|
| `fullname.firstname` | Minimum 4 characters               | "first name should contain 4 characters"     |
| `fullname.lastname`  | Minimum 3 characters               | "last name should contain 3 characters"      |
| `email`              | Must be a valid email              | "Invalid Email"                              |
| `password`           | Minimum 6 characters               | "password must contain at least 6 characters"|

---

### 🔐 Authentication
No authentication required for registration.

---

### 🧠 Controller: `registerUser`

#### Code Flow (Explanation Only):
- **Validation**: Checks for required fields and constraints.
- **Password Hashing**: Hashes the password securely using bcrypt.
- **User Creation**: Calls a service to save the user in the database.
- **Token Generation**: Creates a JWT for the new user.
- **Response**: Returns the user and JWT token on success.

---

### 📦 Example Responses

#### ✅ Success - `201 Created`
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "6612f2b1f8e61a001d234567",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```

#### ❌ Validation Error - `404 Not Found`
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### ❌ Duplicate Email - `500 Internal Server Error`
```json
{
  "message": "E11000 duplicate key error: email already exists"
}
```

---

### 🛠️ Notes
- Password is securely hashed before saving.
- Email must be unique (enforced by MongoDB schema).
- JWT token is signed using `process.env.JWT_SECRET`.

---

## 🗄️ Database Connection (db.js)

## 📝 Description

This module is responsible for establishing a connection with MongoDB using Mongoose.

⸻

## 🧠 Function: connectToDb

## Code Flow (Explanation Only):
	•	Mongoose Configuration: Connects to the MongoDB server using the DB_CONNECT environment variable.
	•	Options Used:
	•	useNewUrlParser: Handles MongoDB connection string parsing.
	•	useUnifiedTopology: Opts in to use the new Server Discover and Monitoring engine.
	•	Success Log: Displays a ✅ message in the console upon successful connection.
	•	Error Handling: Catches and logs ❌ if the connection fails.

⸻

## ⚙️ Environment Variable Required
- Variable
- Description
- DB_CONNECT
- MongoDB connection URI string



 ## 🧑‍💻 User Model - MongoDB with Mongoose

This file defines the User Model used for user authentication and data storage in a Node.js application with MongoDB and Mongoose.

## 📆 File: users.model.js

🚀 Technologies Used
	•	MongoDB – NoSQL Database
	•	Mongoose – ODM (Object Data Modeling) for MongoDB
	•	Bcrypt – For password hashing
	•	JSON Web Token (JWT) – For user authentication

⸻

## 📄 Schema Description

The userSchema defines the structure of the user document to be stored in the MongoDB database.

🔐 Authentication Methods

✅ generateAuthToken()

Generates a JWT token using the user’s _id.
This token is used to authenticate users in future requests.

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
}



⸻

## 🔁 comparePassword(password)

Used during login to compare the plain text password entered by the user with the hashed password stored in the database.

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}



⸻

## 🔒 hashPassword(password)

Hashes a plain text password using bcrypt before storing it in the database.

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
}



⸻

## 📄 Exporting the Model

Finally, the schema is compiled into a Mongoose model and exported:

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;

This allows other files to use it like:

const User = require('./users.model');



⸻

## 📖 Example Usage

Registering a User

const User = require('./users.model');

const hashedPassword = await User.hashPassword(req.body.password);
const newUser = new User({
  fullname: { firstname: "John", lastname: "Doe" },
  email: "john@example.com",
  password: hashedPassword
});
await newUser.save();

Logging In

const user = await User.findOne({ email: req.body.email }).select('+password');
if (user && await user.comparePassword(req.body.password)) {
  const token = user.generateAuthToken();
  // Send token to client
}



⸻

## 📌 Validation Rules Summary

Field	Rule
firstname	Required, Min length 4 characters
lastname	Optional, Min length 3 characters
email	Required, Unique, Min length 5 characters
password	Required, Min length not defined here, but secured by bcrypt
socketId	Optional, used in real-time apps (e.g., Socket.IO)



⸻

## 📌 Note
	•	Ensure process.env.JWT_SECRET is set in your environment to generate JWT tokens securely.
	•	Password is hidden by default (select: false) for better security when querying the database.


## 📘 /users/register - User Registration Endpoint

- Endpoint

## POST /users/register

- Description

- This endpoint allows a new user to register by providing their full name, email, and password. The data is validated before storing in the database, the password is securely hashed, and a JWT token is generated for authentication.

# Request Body Format
    {
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securePassword123"
}

# Response Body Format
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "606d1a2e2f1b2c0015b2b2b2",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "socketId": null
  }
}


# Possible Status Codes
- 201 Created – User registered successfully and token returned
- 404 Not Found – Validation errors in input data
- 409 Conflict – Email already exists in the database
- 500 Internal Server Error – Server side error occurred
- Code Breakdown (Explanation Only)
- Validates incoming request data using express-validator.
- Extracts fullname, email, and password from the request body.
- Hashes the password using a helper method before storing.
- Passes user data to a service layer which handles the database insertion.
- Generates a JWT token for the newly created user.
- Sends a response containing the authentication token and user details.


## 📌 API Endpoint: POST /users/register

## 🧾 Description

This endpoint is used to register a new user in the system. It validates input data, hashes the user’s password for security, stores the user in the database, and returns a JWT authentication token upon successful registration.
 
 ## 🧠 Logic Overview
- •	Validates request fields using express-validator.
- •	If validation fails, responds with a 404 and an array of error messages.
- •	If valid, hashes the password using bcrypt.
- •	Creates a new user document in the MongoDB database.
- •	Generates a JWT token with the user’s ID.
- •	Returns both the token and user data in the response.


## 📘 User Routes Documentation

### 🔐 Authentication Required
All the following routes require the user to be authenticated via a valid JWT token. The token should be passed either as an HTTP-only cookie or in the `Authorization` header as a Bearer token.

---

### 📍 GET `/users/profile`

#### ✅ Description:
Returns the profile information of the currently authenticated user.

#### 🔑 Authentication:
- Required

#### 🧾 Headers:
- `Authorization: Bearer <token>` *(optional if token is stored in HTTP-only cookie)*

#### 📦 Response:
- **200 OK**
```json
{
  "user": {
    "_id": "123456789",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john@example.com",
    // ...any other user fields
  }
}

## GET /users/logout

✅ Description:

Logs out the currently authenticated user by:
- •	Clearing the JWT token from cookies.
	•	(Optionally) Blacklisting the token to prevent reuse.

⸻

🔐 Authentication Required: Yes

⸻

# 🧾 Headers (optional if using cookie-based token):

🔄 Method: GET

🌐 URL: /users/logout

⸻

📦 Success Response:
	•	Status Code: 200 OK

❌ Error Responses:
	•	Status Code: 500 Internal Server Error