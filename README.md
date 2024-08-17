# Personal Finance Tracker - Backend

## Overview

The backend of the Personal Finance Tracker is a simple and efficient Node.js application built using Express.js and MongoDB for data storage. This project was developed as part of a task for a MERN stack internship application. The backend manages user authentication, expense tracking, and data storage, and it is open for contributions or reuse by anyone interested.

[Gratitude Grove - Frontend](https://github.com/Varunkumar0812/Finance-Tracker-frontend)

## Features

- **Authentication:**
  - JWT (JSON Web Token) is used for secure authentication.
  - Routes for user login and registration are provided.

- **Expense Management:**
  - Users can create, update, and delete their expense records.
  - Each expense is associated with a specific user.

- **User Management:**
  - Registration and login features allow users to create accounts and authenticate.
  - User details include email, first name, last name, income, and password.

## Models

- **Expense Model:**
  - **title:** The title of the expense.
  - **description:** A brief description of the expense.
  - **mode:** The mode of payment (e.g., cash, credit).
  - **date:** The date the expense was made.
  - **amount:** The amount spent.
  - **user:** The user who made the expense (reference to the User model).

- **User Model:**
  - **email:** User's email address.
  - **firstname:** User's first name.
  - **lastname:** User's last name.
  - **income:** User's total income.
  - **password:** User's password (hashed).
  - **passwordConfirm:** Field to confirm the user's password.

## Routes

- **User Routes:**
  - **/register:** Register a new user.
  - **/login:** Login and receive a JWT token for authentication.

- **Expense Routes:**
  - **/expenses:** Get all expenses for the authenticated user.
  - **/expenses/:id:** Get, update, or delete a specific expense by ID.
  - **/expenses/create:** Create a new expense record.

## Validation

- **Validator Library:**
  - Used for validating user input during registration and login.

## Tech Stack

- **Backend:**
  - **Node.js:** JavaScript runtime for server-side execution.
  - **Express.js:** Web framework for building RESTful APIs.
  - **MongoDB:** NoSQL database for storing user and expense data.
  - **Mongoose:** ODM (Object Data Modeling) library for MongoDB.

## Contributing

This project is open to contributions. Feel free to fork the repository, make your changes, and submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software as per the terms of the license.

## Acknowledgements

- **Node.js** for providing the runtime environment.
- **Express.js** for the web framework.
- **MongoDB** and **Mongoose** for database management.
- **JWT** for secure authentication.
- **Validator** for input validation.
