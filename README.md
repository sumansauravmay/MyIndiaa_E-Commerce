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
  Login: POST /login
```

```bash
 {
  "email": "suman@gmail.com",
  "password": "suman@123"
}
```

3. Products

- Get all the product

```bash
 GET /
```

- Add new product

```bash
 POST /add
```

- Request body

```bash
{
    "image": "https://avatars.githubusercontent.com/u/101393663?s=48&v=4",
  "title": "Jeans",
  "description": "This is jeans",
  "Price": 4000
}
```

- Update by id


```bash
 PATCH /update/:id
```


- Delete by id


```bash
 Delete /delete/:id
```


# Orders
- Get all the order


```bash
 GET /orders
```

- Get the order by id


```bash
 GET /orders/:orderId
```

```bash
 POST /add
```

- Make a order

```bash
 POST /orders/
```


```bash
{
   "user": "6672a7b525a591f7d7911f2f",
  "products": [
    "66733090659d8eccc4386583"
  ],
  "totalAmount": 6000
}
```
# Payment

- Get all the payments

```bash
 GET /payment
```
- Get payments by id

```bash
 POST /payment/:id
```

- Request for a payment

```bash
 POST /payment
```

```bash
 {
  "order":"6673f2d2cdf49cdb26cc7697",
  "amount":4000,
  "paymentDate":"Date.now()"
}
```



















