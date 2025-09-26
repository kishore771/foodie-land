import {React} from 'react';
import "./LandingPage.css";

const LandingPage = () => { 

    const categories = [
        { name: 'Breakfast', image: 'https://i.postimg.cc/ZRGBG264/onigiri-3.jpg' },
        { name: 'Vegan', image: 'https://i.postimg.cc/PJztxRvW/cba.jpg' },
        { name: 'Meat', image: 'https://i.postimg.cc/v8LM5CD9/meat.jpg' },
        { name: 'Dessert', image: 'https://i.postimg.cc/Hx1DytgB/dessert.avif' },
        { name: 'Lunch', image: 'https://i.postimg.cc/50SGFdp2/sandwich.jpg' },
        { name: 'Chocolate', image: 'https://i.postimg.cc/HsxKjNMT/choco.jpg' },
    ];

    const recipes = [
        { title: 'Big juicy beef burger', image: 'https://i.postimg.cc/6QSFNfqB/1725461261-big-juicy-burgers.avif', time: '30 minutes', ingredients: ['chicken', 'spices', 'sauce'] },
        { title: 'Fresh lime Roasted Salmon with Ginger Sauce', image: 'https://i.postimg.cc/W3gYcRx7/salmon.jpg', time: '15 minutes', ingredients: ['avocado', 'tomato', 'lettuce'] },
        { title: 'Stawberry oatmeel pancake with Honey syrup', image: 'https://i.postimg.cc/4d6PF6hL/oatmeel.webp', time: '1 hour', ingredients: ['chocolate', 'flour', 'sugar'] },
        { title: 'Fresh and Healthy Mixed Mayonnaise Salad', image: 'https://i.postimg.cc/3Rq8VG5G/salada.jpg', time: '30 minutes', ingredients: ['chicken', 'spices', 'sauce'] },
        { title: 'Chicken Meat Balls with cream cheese', image: 'https://i.postimg.cc/yxqdWRQH/Baked-Chicken-Meatballs-TIMG.jpg', time: '15 minutes', ingredients: ['avocado', 'tomato', 'lettuce'] },
        { title: 'Fruity pancake with Orange & Blueberry', image: 'https://i.postimg.cc/7PQ9tZCy/frutit-pancake.jpg', time: '1 hour', ingredients: ['chocolate', 'flour', 'sugar'] },

    ];

    return (
        <div className="landing-page">
            <section className="hero-section">
                <div className='hero-content'>
                <div className='item-card'>
                    <img src='https://i.postimg.cc/VvfmTF5D/Screenshot-2025-09-26-131658.png' alt='chicken-img' className='chicken-img'/>
                    <p>Hot Recipes</p>
                </div>
                
                <div className='hero-details'>
                    <h1>Spicy Delicious chicken wings</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
                    <div className='hero-icons'>
                        <i class="fa-solid fa-stopwatch"></i>
                        <span>30 minutes</span>
                        <i class="fa-solid fa-utensils"></i>
                        <span>chicken</span>
                    </div>
            
                        
                    
                </div>
                </div>
                <div>
                    <img src='https://i.postimg.cc/90yVrNKm/chciken-wings.jpg' alt='hero-img'className='hero-img' />
                </div>
            </section>

            <section className='categories-section'>
                <div className='categories-content'>
                <h2 className='categories-heading'>Categories</h2>
                <button className='view-all-button'>View All Categories</button>
                </div>
                <div className='categories-container'>
                    {categories.map((category, index) => (
                        <div key={index} className='category-card'>
                            <img src={category.image} alt={category.name} className='category-image' />
                            <div className='category-name'>{category.name}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='recipes-section'>
                <h2 className='recipes-heading'>Simple and Tasty Recipes</h2>
                <p>Lorem ipsum dolor sit amet, consectetuipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
                <div className='recipes-container'>
                    {recipes.map((recipe, index) => (
                        <div key={index} className='recipe-card'>
                            <img src={recipe.image} alt={recipe.title} className='recipe-image' />
                            <div className='recipe-details'>
                                <h3 className='recipe-title'>{recipe.title}</h3>
                                <p className='recipe-time'><i class="fa-solid fa-stopwatch"></i> {recipe.time}</p>
                                <p className='recipe-ingredients'><i class="fa-solid fa-utensils"></i> {recipe.ingredients.join(', ')}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='cta-section'>
                <div className='cta-content'>
                <h2 className='cta-heading'>Everyone can be a  chef in their own kitchen</h2>
                <p>Lorem ipsum dolor sit amet, consectetuipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
                <button className='signup-button'>Learn More</button>
                </div>
                <img src='https://i.postimg.cc/XY2DWkqp/chefew.jpg' alt='cta-img' className='cta-img'/>
            </section>

            <section className='know-about-section'>
                <div className='know-about-content'>
                <h2 className='know-about-heading'>Check out @foodieland on Instragram</h2>
                <p>Lorem ipsum dolor sit amet, consectetuipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
                <div>
                    <img src="https://i.postimg.cc/85n1r6Z5/Screenshot-2025-09-26-141916.png"/>
                </div>
                <button className='signup-button'>Visit Our Instragram</button>
                </div>
            </section>

            <section className='try-section'>
                <div className='try-content'>
                <h2 className='try-heading'>Try these Delicious Recipe to make your day</h2>
                <p>Lorem ipsum dolor sit amet, consectetuipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
                </div>
                <div className='recipes-container'>
                    {recipes.map((recipe, index) => (
                        <div key={index} className='recipe-card'>
                            <img src={recipe.image} alt={recipe.title} className='recipe-image' />
                            <div className='recipe-details'>
                                <h3 className='recipe-title'>{recipe.title}</h3>
                                <p className='recipe-time'><i class="fa-solid fa-stopwatch"></i> {recipe.time}</p>
                                <p className='recipe-ingredients'><i class="fa-solid fa-utensils"></i> {recipe.ingredients.join(', ')}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
