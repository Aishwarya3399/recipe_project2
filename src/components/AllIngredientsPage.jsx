import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useWishlist } from '../context/WishlistContext';
import './IngredientsDetailStyles.css';

const AllIngredientsPage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();

    // Fetch all recipes
    const fetchAllRecipes = async () => {
        try {
            console.log('Fetching all recipes...');
            const response = await axios.get('http://localhost:5000/api/recipe'); // Adjust your API endpoint
            console.log(response.data); // Debug response

            if (response.data && response.data.data) {
                setRecipes(response.data.data);
            } else {
                setRecipes([]); // Handle empty data case
            }
        } catch (err) {
            console.error('Error fetching all recipes:', err); // Log errors
            setError('Failed to load recipes. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Group recipes alphabetically by the first letter of the recipe name
    const getGroupedRecipes = () => {
        const grouped = {};
        recipes.forEach((recipe) => {
            const firstLetter = recipe.RecipeName.charAt(0).toUpperCase();
            if (!grouped[firstLetter]) {
                grouped[firstLetter] = [];
            }
            grouped[firstLetter].push(recipe);
        });
        return grouped;
    };

    // Toggle wishlist (add or remove)
    const toggleWishlist = (recipe) => {
        const isInWishlist = wishlistItems.some(item => item.id === recipe._id);
        if (isInWishlist) {
            removeFromWishlist(recipe._id);
        } else {
            addToWishlist({ id: recipe._id, name: recipe['RecipeName'], image: recipe.Images });
        }
    };

    // Check if a recipe is in the wishlist
    const isInWishlist = (recipeId) => wishlistItems.some(item => item.id === recipeId);

    // Fetch all recipes on component mount
    useEffect(() => {
        fetchAllRecipes();
    }, []);

    // Loading state
    if (loading) return <div className="loading">Loading...</div>;

    // Error state
    if (error) return <div className="error-message">{error}</div>;

    // Group recipes alphabetically
    const groupedRecipes = getGroupedRecipes();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div className="all-ingredients-container">
            <h1 className="all-ingredients-title">All Recipes Alphabetically</h1>

            {/* Alphabet Navigation */}
            <div className="alphabet-nav">
                {alphabet.map((letter) => (
                    <a key={letter} href={`#${letter}`} className="alphabet-link">
                        {letter}
                    </a>
                ))}
            </div>

            {/* Recipes List Grouped by Alphabet */}
            <div className="recipes-list">
                {alphabet.map((letter) => (
                    <div key={letter} id={letter} className="recipe-group">
                        <h2 className="group-title">{letter}</h2>
                        {groupedRecipes[letter] && groupedRecipes[letter].length > 0 ? (
                            <div className="group-recipes">
                                {groupedRecipes[letter].map((recipe) => (
                                    <div key={recipe._id} className="recipe-card">
                                        <Link to={`/recipe/${recipe._id}`} className="recipe-link">
                                            <img
                                                src={recipe.Images ? recipe.Images : '/images/default-recipe.jpg'}
                                                alt={recipe['RecipeName'] || 'Recipe'}
                                                className="recipe-image"
                                            />
                                            <h2 className="recipe-name">{recipe['RecipeName'] || 'Unnamed Recipe'}</h2>
                                        </Link>

                                        {/* View Recipe Button */}
                                        <Link to={`/recipe/${recipe._id}`} className="view-recipe-button">
                                            View Recipe
                                        </Link>

                                        {/* Wishlist Button */}
                                        <button
                                            className="wishlist-button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleWishlist(recipe);
                                            }}
                                            aria-label={
                                                isInWishlist(recipe._id)
                                                    ? 'Remove from wishlist'
                                                    : 'Add to wishlist'
                                            }
                                        >
                                            <i className={`fas fa-heart ${isInWishlist(recipe._id) ? 'red' : ''}`}></i>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="no-recipes">No recipes found for {letter}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllIngredientsPage;
