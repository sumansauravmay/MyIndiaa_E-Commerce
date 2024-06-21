# MyIndiaa_E-Commerce Backend Plateform

This is a scalable server-side application for an e-commerce platform, developed using Node.js, Express.js, and MongoDB. The application provides robust APIs for user management, product management, and order processing. It also integrates with third-party services for payment processing and logistics.

# Description

This is a backend application for an e-commerce platform designed to handle user authentication, product catalog, order processing and Payment with stripe. 
The application uses Json Web Token(JWT) for authentication, MongoDB for database, and integrates with mock payment gateways.

# Features

- User authentication and authorization using JWT
- Product management (CRUD operations)
- Order processing
- Integrated with mock api for payment gateways
- Secure data handling and storage
- Performance optimization

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- CORS
- JWT
- Bcrypt
- Nodemon
- env

# Installation

Clone the repo

```bash
  git clone https://github.com/sumansauravmay/MyIndiaa_E-Commerce.git
```

# Deployed Link

```bash
  https://myindiaa-e-commerce.onrender.com/
```

# Start the server:

- npm start 
- The server will be running at http://localhost:4000


# API Documentation

1. Registration

```bash
  Register: POST /register
```
```bash
  {
  "name": "Suman",
  "email": "suman@gmail.com",
  "password": "suman@123"
}
```



2. Login (Authentication)

```bash
  Register: POST /login
```


```bash
 {
  "email": "suman@gmail.com",
  "password": "suman@123"
}
```





