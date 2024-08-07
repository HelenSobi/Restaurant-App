
### Restaurant APP using React + Vite
Initialize a new React.js project:

### `npm create vite@latest weather-app -- --template react`

Install project dependencies:

### `npm install`

Install Tailwind CSS IntelliSense in editor setup VS Code

### `npm install -D tailwindcss postcss autoprefixer`

### `npx tailwindcss init -p`

### update extension in `tailwind.config.js`
******************************************
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  *******************************************

### Add the files in `index.css`
******************************************
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
*******************************************

Start the development server: 

### `npm start`

Building for production: 

### `npm run build`

Axios is a third library package that we can add to our program to retrieve information from an API.

### Install the package Axios

`npm i axios`

