//routes/recipeRoute.js
const express = require('express');
const route = express.Router();
const {
    getRecipe, // Import all controller methods
    postRecipe,
    putRecipe,
    deleteRecipe,
    getRecipeById
} = require('../controllers/recipeController'); // Make sure the path is correct
const auth = require('../middleware/auth'); // JWT-based authentication middleware

// Route for getting recipes based on optional filters (taste, occasion, category, course)
route.get('/', getRecipe); // Controller handles the filters and returns recipes

// Route for creating a new recipe
route.post('/', postRecipe); // Public route for creating recipes

// Route for updating an existing recipe by ID (protected)
route.put('/:id', auth, putRecipe); // Requires JWT authentication

// Route for deleting a recipe by ID (protected)
route.delete('/:id', auth, deleteRecipe); // Requires JWT authentication

// Route for getting a single recipe by ID
route.get('/:id', getRecipeById); // Route to get recipe by ID

module.exports = route;
