import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Lazy-loaded components for better performance
const CuisineDetailPage = lazy(() => import('./components/CuisineDetailPage'));
const Banner = lazy(() => import('./components/Banner'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const KitchenTips = lazy(() => import('./components/KitchenTips'));
const RecipePage = lazy(() => import('./components/RecipePage'));
const AllRecipesPage = lazy(() => import('./components/AllRecipesPage'));
const ThelaMenu = lazy(() => import('./components/ThelaMenu'));
const OccasionDetailPage = lazy(() => import('./components/OccasionDetailPage'));
const TasteDetailPage = lazy(() => import('./components/TasteDetailPage'));
const MealDetailPage = lazy(() => import('./components/MealDetailPage'));
const DietDetailPage = lazy(() => import('./components/DietDetailPage'));
const ThaliSection = lazy(() => import('./components/ThaliSection'));
const ThaliDetailPage = lazy(() => import('./components/ThaliDetailPage'));
const LatestRecipes = lazy(() => import('./components/LatestRecipes'));
const RecipeCarousel = lazy(() => import('./components/RecipeCarousel'));
const TodayMenu = lazy(() => import('./components/TodayMenu'));
const SuperDelicious = lazy(() => import('./components/SuperDelicious'));
const FeaturePosts = lazy(() => import('./components/FeaturePosts'));
const UniqueFood = lazy(() => import('./components/UniqueFood'));
const AddRecipePage = lazy(() => import('./components/AddRecipePage'));
const IngredientsDetailPage = lazy(() => import('./components/IngredientsDetailPage'));
const AllIngredientsPage = lazy(() => import('./components/AllIngredientsPage'));
const Recipe = lazy(() => import('./components/Recipe'));
const Recipe1 = lazy(() => import('./components/Recipe1'));
const WishlistPage = lazy(() => import('./components/WishlistPage'));
const LoginSignup = lazy(() => import('./components/LoginSignup'));
const Cake = lazy(() => import('./components/Cake'));
const Icecream = lazy(() => import('./components/Icecream'));
const EasyRecipesPage = lazy(() => import('./components/EasyRecipesPage'));
const SearchRecipe = lazy(() => import('./components/SearchRecipe'));
const Privacy = lazy(() => import('./components/Privacy'));
const Faq = lazy(() => import('./components/Faq'));
const Contact = lazy(() => import('./components/Contact'));
const Blog = lazy(() => import('./components/Blog'));
const Terms = lazy(() => import('./components/Terms'));

// Layout component for shared header, navbar, and footer
function Layout({ children }) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <>
            <Header />
            <Navbar />
            {isHomePage && (
                <>
                    <Banner />
                    <ThaliSection />
                    <RecipeCarousel />
                    <TodayMenu />
                    <LatestRecipes />
                    <SuperDelicious />
                    <FeaturePosts />
                    <UniqueFood />
                </>
            )}
            {children}
            <Footer />
        </>
    );
}

// Main App component
const App = () => {
    return (
        <AuthProvider>
            <WishlistProvider>
                {/* Add `basename` for deployment */}
                <Router basename="/recipe_project2">
                    <ScrollToTop />
                    <div className="App">
                        <Suspense fallback={<div style={{ minHeight: '300px' }}>Loading...</div>}>
                            <Routes>
                                <Route path="/login" element={<LoginSignup />} />
                                <Route path="/add-recipe" element={<ProtectedRoute element={<AddRecipePage />} />} />
                                <Route path="/" element={<Layout />} />
                                <Route path="/recipe/:id" element={<Layout><Recipe /></Layout>} />
                                <Route path="/recipe1/:id" element={<Layout><Recipe1 /></Layout>} />
                                <Route path="/search" element={<SearchRecipe />} />
                                <Route path="/thali" element={<Layout><ThaliDetailPage /></Layout>} />
                                <Route path="/thali/:thali" element={<Layout><ThaliDetailPage /></Layout>} />
                                <Route path="/all-recipes" element={<Layout><AllRecipesPage /></Layout>} />
                                <Route path="/wishlist" element={<Layout><WishlistPage /></Layout>} />
                                <Route path="/about-us" element={<Layout><AboutUs /></Layout>} />
                                <Route path="/kitchen-tips" element={<Layout><KitchenTips /></Layout>} />
                                <Route path="/recipes/:category" element={<Layout><RecipePage /></Layout>} />
                                <Route path="/cuisine/:cuisine" element={<Layout><CuisineDetailPage /></Layout>} />
                                <Route path="/occasion/:occasionName" element={<Layout><OccasionDetailPage /></Layout>} />
                                <Route path="/meal/:mealType" element={<Layout><MealDetailPage /></Layout>} />
                                <Route path="/diet/:dietType/:subDietType?" element={<Layout><DietDetailPage /></Layout>} />
                                <Route path="/taste/:tasteName" element={<Layout><TasteDetailPage /></Layout>} />
                                <Route path="/ingredients/:ingredientName" element={<Layout><IngredientsDetailPage /></Layout>} />
                                <Route path="/ingredients/:All Ingredients" element={<Layout><AllIngredientsPage /></Layout>} />
                                <Route path="/thela" element={<Layout><ThelaMenu /></Layout>} />
                                <Route path="/cake" element={<Layout><Cake /></Layout>} />
                                <Route path="/ice-cream" element={<Layout><Icecream /></Layout>} />
                                <Route path="/easy-recipes" element={<Layout><EasyRecipesPage /></Layout>} />
                                <Route path="/faqs" element={<Layout><Faq /></Layout>} />
                                <Route path="/privacy-policy" element={<Layout><Privacy /></Layout>} />
                                <Route path="/contact" element={<Layout><Contact /></Layout>} />
                                <Route path="/blog" element={<Layout><Blog /></Layout>} />
                                <Route path="/terms" element={<Layout><Terms /></Layout>} />
                            </Routes>
                        </Suspense>
                    </div>
                </Router>
            </WishlistProvider>
        </AuthProvider>
    );
};

export default App;
