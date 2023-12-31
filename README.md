# -Inventory
Inventory management  for an imaginary store. This application include categories and items. User should be able to choose a category to view, and then get a list of every item in that category . User can also perform all CRUD methods for both items and categories

# Node.js Express MongoDB REST API

This is a Node.js application that provides a RESTful API for managing categories and items. It uses Express.js for routing and MongoDB with Mongoose for data storage.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Categories](#categories)
  - [Items](#items)
- [License](#license)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Other dependencies...

## Getting Started

To get started with this project, follow the instructions below:

### Prerequisites

- Node.js and npm should be installed on your machine.
- MongoDB should be installed and running.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   cd your-project

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Create a .env file and add your environment variables:

   PORT=4000
   MONGO_URL=your-mongodb-connection-string

4. Create a .env file and add your environment variables:

   npm start

## Usage
To use the API, you can make HTTP requests to the provided endpoints. Here's how you can interact with the API:

## API Endpoints
Categories
POST /categories: Create a new category.
GET /categories: Retrieve all categories.
GET /categories/:id: Retrieve a single category by ID.
PUT /categories/:id: Update a category by ID.
DELETE /categories/:id: Delete a category by ID.
Items
POST /items: Create a new item.
GET /items: Retrieve all items with category names.
GET /items/:id: Retrieve a single item by ID with category name.
PUT /items/:id: Update an item by ID.
DELETE /items/:id: Delete an item by ID.

## License
This project is licensed under the [Your License Name] License - see the LICENSE file for details.


Please note that you should replace `"your-username/your-project.git"` with the actual URL of your project's Git repository, and specify the correct MongoDB connection string and license name in the `.env` and license sections respectively.

