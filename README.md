# User and Role Management System

This project is a simple React application that allows managing users and roles using localStorage for data persistence. The application consists of two main features:

1. **User Management**: Allows adding, editing, and deleting users with attributes like name, email, role, and status.
2. **Role Management**: Allows adding, editing, and deleting roles with a set of permissions.

## Features

- **User Management**: 
  - Add, Edit, and Delete users.
  - Persistent data using `localStorage`.
  - Users have attributes: Name, Email, Role, Status.
  
- **Role Management**: 
  - Add, Edit, and Delete roles.
  - Assign and update permissions to roles.

- **Data Persistence**: 
  - Both users and roles are stored in the browser's `localStorage`, so data persists even after the page is refreshed.

## Tech Stack

- **React**: The frontend library for building the UI.
- **Material UI**: A popular React UI framework for building user interfaces.
- **localStorage**: Used for persistent storage of users and roles data.

## Installation

To get started, clone this repository and install the necessary dependencies.

```bash
git clone <repository-url>
cd <repository-directory>
npm install


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.