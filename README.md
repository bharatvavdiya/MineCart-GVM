# MineCart

## Introduction

The "MineCart" project is a front-end application for an online store that sells various products from different vendors and of different types. The application allows the store owner to upload products to the website, and customers can browse, select, and purchase these products. Additionally, the application provides reporting functionality to track product sales by vendors and by product type.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of `Node.js` and `npm`.
- You have a `<Windows/Linux/Mac>` machine. State if the setup is specific to an operating system.

## Installing MineCart

To install MineCart, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/bhratvavdiya/MineCart-GVM.git
   ```
2. Navigate into the project directory:
   ```
   cd minecart
   ```
3. Install the dependencies:
   ```
   npm install
   ```

# Dependencies

This project uses the following npm libraries:

- [React Bootstrap](https://react-bootstrap.github.io/): Used for implementing Bootstrap components in React.
- [Bootstrap](https://getbootstrap.com/): Used for styling and layout.
- [Material-UI (MUI)](https://mui.com/): Used for implementing Material Design components in React.
- [React Router DOM](https://reactrouter.com/web/guides/quick-start): Used for managing routing in the application.

To install these dependencies, run the following command:

```bash
npm install react-bootstrap bootstrap @mui/material react-router-dom
```

## Using MineCart

To use MineCart, follow these steps:

1. Start the development server:
   ```
   npm start
   ```
2. Open your web browser and navigate to `http://localhost:3000` (or whatever port your project is set to run on).

## Contributing to MineCart

To contribute to MineCart, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

# Architectural Decisions

Please note that for the scope of this project, I have intentionally avoided the use of advanced state management libraries such as Redux or the Context API. My primary focus has been on delivering the core functionality of the application.

I have leveraged the capabilities of the browser's Local Storage to handle the state management of cart details. This approach also extends to the representation of data on the admin dashboard for report generation.

This decision aligns with my goal of maintaining simplicity and clarity in my codebase. I believe this approach effectively demonstrates the core functionalities of the MineCart application without introducing additional complexity.

## Contact

If you want to contact me you can reach me at `bharatr.vavadiya@gmail.com`
