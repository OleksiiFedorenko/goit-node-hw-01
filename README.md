# Contacts Management CLI

This is a command-line interface (CLI) application for managing contacts. It
allows you to perform various actions on a collection of contacts stored in a
JSON file.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)

## Features

You can see all the contacts in a table, get one of them, add new contact, and
remove the one you don't need anymore.

- The application is created based on Node.js
- The standard modules fs and path are used
- Contacts are stored in a json file (imitating a database)
- The module Commander.js is used for the parsing of a command line
- The commands and the samples of arguments are mentioned in 'Usage' section
  below

## Installation

If you want to run this aplication you need to do following actions:

### Step 1: Clone the repository

You can do it using GitHub Desktop App or put the line below to your terminal
and press Enter button

```
$ git clone https://github.com/OleksiiFedorenko/goit-node-hw-01.git
```

### Step 2: Make sure you have Node.js installed on your device

If you're not sure whether it's installed or not you can check in in the
terminal using the line below

```
$ node -v
```

If you have it installed you should see the version like 'v18.12.1'. Otherwise
you should download and install Node.js. You can find all the details here:
https://nodejs.org/

### Step 3: Install dependencies

Install the required dependencies by running the following command:

```
$ npm install
```

## Usage

You can run the following commands in the terminal:

```
# List all contacts in a table format
$ node index.js --action="list"

# Get a contact by ID and display the contact object or null if not found
$ node index.js --action="get" --id [put id here, e.g. 05olLMgyVQdWRwgKfg5J6]

# Add a new contact and display the added contact object
$ node index.js --action="add" --name [put name here, e.g. "Mango"] --email [email here, e.g. "mango@gmail.com"] --phone [and phone, e.g. "322-22-22"]

# Remove a contact by ID and display the removed contact object or null if not found
$ node index.js --action="remove [put id here, e.g. 05olLMgyVQdWRwgKfg5J6]
```

## Screenshots

1. Listing of all contacts
   ![List](https://cdn.screencast.com/uploads/g000302riUmJk2fwRmwNrBiP7yMei/capture-1fa3fe34-d412-4612-b414-56c70512851a.png?sv=2022-11-02&st=2023-06-17T14%3A28%3A17Z&se=2023-06-18T14%3A28%3A17Z&sr=b&sp=r&sig=NFkyEbduGRz6OdZDHrVhftnSM9YZBA%2FMlBTqUXz5mHo%3D)

2. Getting the one by id
   ![Get](https://cdn.screencast.com/uploads/g0003028JWUbu24bIxVSO6dGtdEuw/capture-7898eda6-3caf-46aa-949a-c5d67f828cd8.png?sv=2022-11-02&st=2023-06-17T14%3A40%3A11Z&se=2023-06-18T14%3A40%3A11Z&sr=b&sp=r&sig=DlJtsswIH6qGe1nObp66K%2F368OytBMemSitaF7DOxJU%3D)

3. Adding a new one
   ![Add](https://cdn.screencast.com/uploads/g000302Fjnbe15qUCFjTd1lQK2336/capture-1589a542-fb89-40d1-8f8e-74c64916efe2.png?sv=2022-11-02&st=2023-06-17T14%3A42%3A08Z&se=2023-06-18T14%3A42%3A08Z&sr=b&sp=r&sig=J2PB7sncnE5N7uwt%2BpRMluNtlZ%2Bjg%2Bbqo5f4kcuSmbA%3D)

4. Removing the contact
   ![Remove](https://cdn.screencast.com/uploads/g000302fSsN4CNGLTtIc2pfpROWyZ/capture-0f198ec9-9589-49cb-b1e7-a9efb989a29e.png?sv=2022-11-02&st=2023-06-17T14%3A43%3A51Z&se=2023-06-18T14%3A43%3A51Z&sr=b&sp=r&sig=J2UbgQKuXNEVPL6zLH8gKPnIC%2BbZxOkTn8cH%2BOsa10E%3D)

[Back to Table of Contents](#table-of-contents)
