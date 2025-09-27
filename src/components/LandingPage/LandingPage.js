import React from "react";
import "./LandingPage.css";

// FontAwesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStopwatch, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const LandingPage = () => {
  const categories = [
    { name: "Breakfast", image: "https://i.postimg.cc/ZRGBG264/onigiri-3.jpg" },
    { name: "Vegan", image: "https://i.postimg.cc/PJztxRvW/cba.jpg" },
    { name: "Meat", image: "https://i.postimg.cc/v8LM5CD9/meat.jpg" },
    { name: "Dessert", image: "https://i.postimg.cc/Hx1DytgB/dessert.avif" },
    { name: "Lunch", image: "https://i.postimg.cc/50SGFdp2/sandwich.jpg" },
    { name: "Chocolate", image: "https://i.postimg.cc/HsxKjNMT/choco.jpg" },
  ];

  const recipes = [
    {
      title: "Big juicy beef burger",
      image: "https://i.postimg.cc/6QSFNfqB/1725461261-big-juicy-burgers.avif",
      time: "30 minutes",
      ingredients: "snack",
    },
    {
      title: "Fresh lime Roasted Salmon with Ginger Sauce",
      image: "https://i.postimg.cc/W3gYcRx7/salmon.jpg",
      time: "30 minutes",
      ingredients: "Fish",
    },
    {
      title: "Stawberry oatmeel pancake with Honey syrup",
      image: "https://i.postimg.cc/4d6PF6hL/oatmeel.webp",
      time: "30 minutes",
      ingredients: "Breakfast",
    },
    {
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      image: "https://i.postimg.cc/3Rq8VG5G/salada.jpg",
      time: "30 minutes",
      ingredients: "Healthy",
    },
    {
      title: "Chicken Meat Balls with cream cheese",
      image:
        "https://i.postimg.cc/yxqdWRQH/Baked-Chicken-Meatballs-TIMG.jpg",
      time: "30 minutes",
      ingredients: "Meat",
    },
    {
      title: "Fruity pancake with Orange & Blueberry",
      image: "https://i.postimg.cc/7PQ9tZCy/frutit-pancake.jpg",
      time: "30 minutes",
      ingredients: "Sweet",
    },
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="item-card">
            <img
              src="https://i.postimg.cc/VvfmTF5D/Screenshot-2025-09-26-131658.png"
              alt="chicken-img"
              className="chicken-img"
            />
            <p>Hot Recipes</p>
          </div>

          <div className="hero-details">
            <h1>Spicy Delicious chicken wings</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
            <div className="hero-icons">
              <FontAwesomeIcon icon={faStopwatch} />
              <span>30 minutes</span>
              <FontAwesomeIcon icon={faUtensils} />
              <span>chicken</span>
            </div>
            <div className="user-container">
                <img src="https://i.postimg.cc/90qXyYgM/jonsmith.jpg" alt="user1" className="user-img"/>
        <div className="user-card">
            <h3>John Smith</h3>
            <p>15 March 2022</p>
        </div>
        <button className="follow-button">View Recipes <FontAwesomeIcon icon={faPlay} /></button>
        </div>
          </div>
        </div>
        <div>
          <img
            src="https://i.postimg.cc/90yVrNKm/chciken-wings.jpg"
            alt="hero-img"
            className="hero-img"
          />
        </div>
        
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="categories-content">
          <h2 className="categories-heading">Categories</h2>
          <button className="view-all-button">View All Categories</button>
        </div>
        <div className="categories-container">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
              <div className="category-name">{category.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Recipes Section */}
      <section className="recipes-section">
        <h2 className="recipes-heading">Simple and Tasty Recipes</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <div className="recipes-container">
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-image"
              />
              <div className="recipe-details">
                <h3 className="recipe-title">{recipe.title}</h3>
                <div className="social-icons">
                <p className="recipe-time">
                  <FontAwesomeIcon icon={faStopwatch} /> {recipe.time}
                </p>
                <p className="recipe-ingredients">
                  <FontAwesomeIcon icon={faUtensils} />{recipe.ingredients}
                </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-heading">
            Everyone can be a chef in their own kitchen
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <button className="signup-button">Learn More</button>
        </div>
        <img
          src="https://i.postimg.cc/XY2DWkqp/chefew.jpg"
          alt="cta-img"
          className="cta-img"
        />
      </section>

      {/* Instagram Section */}
      <section className="know-about-section">
        <div className="know-about-content">
          <h2 className="know-about-heading">
            Check out @foodieland on Instagram
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <div>
            <img
              src="https://i.postimg.cc/85n1r6Z5/Screenshot-2025-09-26-141916.png"
              alt="instagram"
            />
          </div>
          <button className="signup-button">
             Visit Our Instagram <FontAwesomeIcon icon={faInstagram} />
          </button>
        </div>
      </section>

      {/* Try Section */}
      <section className="try-section">
        <div className="try-content">
          <h2 className="try-heading">
            Try these Delicious Recipe to make your day
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>
        <div className="recipes-container">
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-image"
              />
              <div className="recipe-details">
                <h3 className="recipe-title">{recipe.title}</h3>
                <div className="social-icons">
                <p className="recipe-time">
                  <FontAwesomeIcon icon={faStopwatch} /> {recipe.time}
                </p>
                <p className="recipe-ingredients">
                  <FontAwesomeIcon icon={faUtensils} />
                  {recipe.ingredients}
                </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="inbox-section">
        <div className="inbox-content">
          <h2 className="inbox-heading">
            Deliciousness to your inbox
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>  
            <div className="input-container">
            <input type="email" placeholder="your Email address" className="email-input"/>
            <button className="subscribe-button">Subscribe</button>
            </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-content">
          <h2 className="contact-heading">
            Foodieland
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetuipiscing elit</p>   
        </div>
        <div className="links-container">
            <ul className="links-list">
            <li className="link-item">Recipe</li> 
            <li className="link-item">Blog</li> 
            <li className="link-item">Contact </li>  
            <li className="link-item">About us</li> 
            </ul>
        </div>
        </section>

        <section className="footer-section">
        <div className="footer-content">
            <p>© 2020 flowbase.Powered by <span className="web-link">Webflow</span>.</p>
            </div>
            <div className="social-icons">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </div>
        </section>
    </div>
  );
};

export default LandingPage;
