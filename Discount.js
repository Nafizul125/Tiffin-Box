
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import "./Discount.css";

const foodItems = [
    {
      name: "PEPPER BARBECUE CHICKEN",
      variants: ["small", "medium", "large"],
      prices: [{ small: 200, medium: 350, large: 400 }],
      discountPercent: 24,
      discountedPrices: [{ small: 152, medium: 266, large: 304 }],
      category: "nonveg",
      image: "https://www.dominos.co.in/files/items/Margherita.jpg",
      description: "Brust of multiple flavours with Pepper Barbecue Chicken | Fresh Cheese",
    },
    {
      name: "MARGHERITA",
      variants: ["small", "medium", "large"],
      prices: [{ small: 180, medium: 320, large: 380 }],
      discountPercent: 19,
      discountedPrices: [{ small: 146, medium: 259, large: 308 }],
      category: "veg",
      image: "https://www.dominos.co.in/files/items/Margherita.jpg",
      description: "Classic delight with 100% real mozzarella cheese",
    },
    {
      name: "FARMHOUSE",
      variants: ["small", "medium", "large"],
      prices: [{ small: 220, medium: 370, large: 450 }],
      discountPercent: 27,
      discountedPrices: [{ small: 161, medium: 270, large: 328 }],
      category: "veg",
      image: "https://www.dominos.co.in/files/items/Farmhouse.jpg",
      description: "Delightful combination of onion, capsicum, tomato & mushroom",
    },
    {
      name: "CHICKEN DOMINATOR",
      variants: ["small", "medium", "large"],
      prices: [{ small: 250, medium: 400, large: 500 }],
      discountPercent: 30,
      discountedPrices: [{ small: 175, medium: 280, large: 350 }],
      category: "nonveg",
      image: "https://www.dominos.co.in/files/items/Farmhouse.jpg",
      description: "Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers",
    },
    {
      name: "CHICKEN BIRYANI",
      variants: ["regular", "large"],
      prices: [{ regular: 180, large: 250 }],
      discountPercent: 15,
      discountedPrices: [{ regular: 153, large: 213 }],
      category: "nonveg",
      image: "https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/67e2df08b7c385524f8d9d28_roast%20burhani%20pulao-p-1080.avif",
      description: "Fragrant basmati rice cooked with marinated chicken and aromatic spices.",
    },
    {
      name: "VEG PULAO",
      variants: ["regular", "large"],
      prices: [{ regular: 150, large: 220 }],
      discountPercent: 22,
      discountedPrices: [{ regular: 117, large: 172 }],
      category: "veg",
      image: "https://ministryofcurry.com/wp-content/uploads/2022/10/Veg-Pulao-6-1024x1536.jpg",
      description: "Aromatic rice cooked with fresh vegetables and mild spices.",
    },
    {
      name: "BUTTER NAAN",
      variants: ["single", "double"],
      prices: [{ single: 40, double: 75 }],
      discountPercent: 29,
      discountedPrices: [{ single: 28, double: 53 }],
      category: "veg",
      image: "https://foodess.com/wp-content/uploads/2023/02/Butter-Naan-2-819x1024.jpg",
      description: "Soft and fluffy naan topped with melted butter.",
    },
    {
      name: "TANDOORI CHICKEN",
      variants: ["half", "full"],
      prices: [{ half: 250, full: 450 }],
      discountPercent: 18,
      discountedPrices: [{ half: 205, full: 369 }],
      category: "nonveg",
      image: "https://i0.wp.com/blendofspicesbysara.com/wp-content/uploads/2021/04/PXL_20210403_202643777.PORTRAIT-01.jpeg?resize=800%2C840&ssl=1",
      description: "Chicken marinated in yogurt and spices, cooked in a clay oven.",
    },
    {
      name: "PANEER TIKKA",
      variants: ["half", "full"],
      prices: [{ half: 200, full: 350 }],
      discountPercent: 16,
      discountedPrices: [{ half: 168, full: 294 }],
      category: "veg",
      image: "https://www.vegrecipesofindia.com/wp-content/uploads/2011/10/grilled-paneer-tikka.jpg",
      description: "Cottage cheese cubes marinated in spices and grilled to perfection.",
    },
    {
      name: "DAL TADKA",
      variants: ["regular", "large"],
      prices: [{ regular: 120, large: 180 }],
      discountPercent: 11,
      discountedPrices: [{ regular: 107, large: 160 }],
      category: "veg",
      image: "https://www.vegrecipesofindia.com/wp-content/uploads/2025/03/dal-tadka-1-1024x1536.jpg",
      description: "Lentils cooked with aromatic spices and topped with tempered ghee.",
    },
    {
      name: "EGG CURRY",
      variants: ["regular", "large"],
      prices: [{ regular: 150, large: 220 }],
      discountPercent: 20,
      discountedPrices: [{ regular: 120, large: 176 }],
      category: "nonveg",
      image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/eggcurry-1-1e3c663.jpg?quality=90&webp=true&resize=300,272",
      description: "Boiled eggs cooked in rich tomato-onion gravy.",
    },
    {
      name: "CHICKEN KORMA",
      variants: ["regular", "large"],
      prices: [{ regular: 220, large: 350 }],
      discountPercent: 25,
      discountedPrices: [{ regular: 165, large: 263 }],
      category: "nonveg",
      image: "https://www.teaforturmeric.com/wp-content/uploads/2018/06/Chicken-Korma-full-728x1092.jpg",
      description: "Creamy chicken curry with aromatic spices and cashew paste.",
    },
    {
      name: "MUTTON ROGAN JOSH",
      variants: ["regular", "large"],
      prices: [{ regular: 320, large: 450 }],
      discountPercent: 28,
      discountedPrices: [{ regular: 230, large: 324 }],
      category: "nonveg",
      image: "https://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-13.jpg",
      description: "Slow-cooked mutton in a flavorful red curry.",
    },
    {
      name: "GULAB JAMUN",
      variants: ["single", "double"],
      prices: [{ single: 40, double: 75 }],
      discountPercent: 13,
      discountedPrices: [{ single: 35, double: 65 }],
      category: "dessert",
      image: "https://www.seriouseats.com/thmb/qqZf1gTkobAud-3FaKJMdW4ExUE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__11__20201109-gulab-jamuns-nik-sharma-9-ad652cf623834c1aaff916678aba47f1.jpg",
      description: "Soft and spongy dumplings soaked in sugar syrup.",
    },
  ];
  
  
const Discount = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/userpage"); // Adjust if your route is different
  };

  const goToCart = () => {
    navigate("/cart"); // Adjust if your route is different
  };

  // Sort by higher discount first
  const sortedItems = [...foodItems].sort((a, b) => b.discountPercent - a.discountPercent);

  return (
    <div className="discount-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="nav-title"> Upcoming Discounts</h1>
        <button className="nav-button" onClick={goToHome}>Home</button>
      </nav>

      {/* Food Items */}
      <div className="food-grid">
        {sortedItems.map((item, index) => (
          <div className="food-card" key={index}>
            <img src={item.image} alt={item.name} className="food-image" />
            <div className="food-info">
              <h2 className="food-name">{item.name}</h2>
              <p className="food-description">{item.description}</p>
              <p className="food-category">{item.category.toUpperCase()}</p>

              <div className="price-section">
                {item.variants.map((variant, idx) => (
                  <div key={idx} className="variant-row">
                    <span className="variant-name">{variant}</span>
                    <span className="original-price">৳{item.prices[0][variant]}</span>
                    <span className="discounted-price">৳{item.discountedPrices[0][variant]}</span>
                  </div>
                ))}
              </div>

              <div className="discount-badge">{item.discountPercent}% OFF</div>

              {/* Order Now Button */}
              <button className="order-button" onClick={goToCart}>
                View Cart
              </button>
              <button
  className="order-button"
  onClick={() => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem('cart', JSON.stringify([...existingCart, item]));
    alert('Item added to cart!');
  }}
>
  Order Now
</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discount;
