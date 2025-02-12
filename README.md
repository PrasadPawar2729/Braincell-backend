# User Search API

## Overview
This is a simple RESTful API built with Node.js and Express that provides user data with filtering and sorting capabilities.

## Features
- Fetches user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
- Supports filtering users by name (case-insensitive, partial match).
- Allows sorting users in ascending or descending order by name.
- Handles errors gracefully.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/PrasadPawar2729/Braincell-backend.git
   cd user-search-api
- npm install
- node server.js

  ## API EndPoint
- /users
- /users?name=lea
- /users?sort=asc
