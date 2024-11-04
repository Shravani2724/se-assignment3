<!-- # React + TypeScript + Vite
created vite workspace
do the below command for vite creation
npm create vite@latest my-ecommerce-fashion --template react
choose typescript
go th the current folder that is my-ecommerce-fashion
cd my-ecommerce-fashion
npm install
npm install react-router-dom

After following the above commands
run the application using command npm run dev
click on the displayed localhoast inorder to see output
stage the changes by using command git add .
commit the changes by using command git commit -m "message"
push the changes by using the command git push -->



frontend

npm run dev

backend 

npx express-generator --view=ejs my-ecommerce-backend

cd ecommerce-backend
npm install
npm install axios


node app.js
server running on the port 5000


# my-ecommerce-fashion (Used ChatGPT-4o to write README file)

This project is an e-commerce application built with React and Node.js, allowing users to browse clothes, add them to a cart or wishlist, and manage their purchases. The app is deployed and accessible online.


## Deployment Information

- **Web Address**:
- **EC2 Instance IP Address**: `XX.XX.XX.XX`

## Project Overview

This project was built using [Create React App](https://github.com/facebook/create-react-app) and features:
- **Reusable Components**: Organized and reusable components for product listing, product details, cart, and wishlist.
- **State Management**: React Context API for managing cart and wishlist states with persistent data using `mongodb`.
- **Product Search/Filter**: A search bar for filtering products by name and price.
- **Navigation**: Smooth page navigation with React Router and meaningful URLs.
- **Responsive Design**: A clean and user-friendly interface optimized for various devices.

## Features

- **Product Listing**: Search and filter products by name and price.
- **Add to Cart/Wishlist**: Users can add or remove products from the cart and wishlist with live updates.
- **Persistent State**: Uses Context API for state management.
- **API Integration**: Backend interaction to manage products, cart, and wishlist items.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (>= 14.x recommended)
- **npm** or **yarn** (for dependency management)

### Backend Setup

1. Clone the repository and navigate to the backend folder:

   ```bash
   git clone https://github.com/your-username/e-commerce-book-store.git
   cd my-ecommerce-backend

2. Install dependencies:

    ```bash
    npm install

3. Set up MongoDB:

    Make sure you have MongoDB running locally or have access to a MongoDB Atlas instance.

    Configure the MongoDB URI in your .env file:

    ```bash
    MONGO_URI=mongodb://your-mongo-uri  

4. Start the backend server:

    ```bash
    npm start    

The backend will run at http://localhost:5000

## Frontend Setup

1. Navigate to the frontend folder:

    ```bash
    cd ../frontend


2. Install frontend dependencies:    

    ```bash
    npm install

3. Start the frontend server:

    ```bash
    npm start

Open http://localhost:5000 to view the app in your browser.


### Running in Production

1. Build the frontend for production:

    ```bash
    npm run build

    mongoURI ="mongodb+srv://bommishettishravani:HDU1BVuaphTUThLP@shravcluster.8ngdp.mongodb.net/?retryWrites=true&w=majority"


### Resources and Credits

The Majority portion of this app is inspired from:
1. https://www.youtube.com/watch?v=tEMrD9t85v4

I referred to this youtube video and their github repo to learn and implement. But the overall code base is much different with the assignment specific features implemented in the project.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
