# Dynamic Table Editor Project

**Live Demo:** [Dynamic Table Editor](https://dynamicinput.netlify.app/)

Welcome to the Dynamic Table Editor Project! This project provides a dynamic table editor implemented in React and TypeScript. It allows users to create, edit, delete, and manage tables and their rows dynamically.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Notes](#notes)
- [License](#license)
- [Contributing](#contributing)

## Features

- Add new tables with a custom name.
- Add, edit, and delete rows in each table.
- Editable table names.
- Confirmation alerts for deleting tables and rows.
- Notifications for actions like adding, editing, and deleting rows.

## Installation

To get started with the project, you need to install the necessary dependencies. Follow the steps below:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/dynamic-table-editor.git
   cd dynamic-table-editor
2.## Installation

### Install dependencies:

Make sure you have Node.js and npm installed on your machine. If not, download and install them from [Node.js official website](https://nodejs.org/).

Then run the following command to install the required npm packages:

```sh
npm install
3.dynamic-table-editor/
├── public/
├── src/
│   ├── components/
│   │   ├── TableEditor.tsx
│   │   ├── RowEditor.tsx
│   │   ├── TableList.tsx
│   ├── types.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── App.css
│   ├── index.css
├── package.json
├── tsconfig.json
├── README.md
Dependencies
The project relies on several npm packages. Here are the key dependencies:

react: A JavaScript library for building user interfaces.
react-dom: This package serves as the entry point to the DOM and server renderers for React.
react-scripts: This package includes scripts and configuration used by Create React App.
react-toastify: Allows you to add notifications to your app with ease.
react-confirm-alert: A simple to use confirm dialog for React.
react-icons: Provides popular icons as React components.
nanoid: A tiny, secure, URL-friendly, unique string ID generator for JavaScript.
Usage
Adding a New Table:

Enter the table name in the input field at the bottom of the page.
Click the add button to create a new table.
Editing a Table Name:

Double-click on the table name to edit it.
Enter the new table name and click the save button to update.
Adding a New Row:

Fill in the row details in the input fields.
Click the add row button to add the new row to the table.
Editing a Row:

Click the edit button next to the row you want to edit.
Modify the row details in the input fields.
Click the save button to update the row.
Deleting a Row:

Click the delete button next to the row you want to delete.
Confirm the deletion in the confirmation dialog.

Notes
The application uses toast notifications to inform users about actions like adding, editing, and deleting rows.
The confirmation dialog is used to confirm deletions to prevent accidental data loss.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributing
If you want to contribute to this project, feel free to create a pull request or raise an issue on the GitHub repository.

Thank you for using the Dynamic Table Editor Project! If you have any questions or need further assistance, please feel free to contact us.
