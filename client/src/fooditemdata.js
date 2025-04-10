const pizzas=[
    {
      name: "PEPPER BARBECUE CHICKEN",
       variants : ["small", "medium", "large"],
       prices : [
        {
          small : 200,
          medium : 350,
          large : 400
        }
      ],
       category :  "nonveg",
       image : "https://www.dominos.co.in/files/items/Margherita.jpg",
       description : "Brust of multiple flavours with Pepper Barbecue Chicken | Fresh Cheese"
    },
    {
       name : "MARGHERITA",
       variants : ["small", "medium", "large"],
       prices : [
        {
          small : 180,
           medium : 320,
           large : 380
        }
        
      ],
       category : "veg",
       image : "https://www.dominos.co.in/files/items/Margherita.jpg",
       description : "Classic delight with 100% real mozzarella cheese"
    },
    {
       name : "FARMHOUSE",
       variants : ["small", "medium", "large"],
       prices : [
        {
           small : 220,
           medium : 370,
           large : 450
        }
        
      ],
       category : "veg",
       image : "https://www.dominos.co.in/files/items/Farmhouse.jpg",
       description : "Delightful combination of onion, capsicum, tomato & mushroom"
    },
    {
       name : "CHICKEN DOMINATOR",
       variants : ["small", "medium", "large"],
       prices : [
        {
           small : 250,
           medium : 400,
           large : 500
        }
        
      ],
       category : "nonveg",
       image : "https://www.dominos.co.in/files/items/Farmhouse.jpg",
       description : "Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers"
    },
    {
       name : "CHICKEN BIRYANI",
       variants : ["regular", "large"],
       prices : [{regular: 180, large: 250}],
       category: "nonveg",
       image: "https://cdn.prod.website-files.com/63de61fd6af00b31333c0d3a/67e2df08b7c385524f8d9d28_roast%20burhani%20pulao-p-1080.avif",
       description: "Fragrant basmati rice cooked with marinated chicken and aromatic spices."
  },
  {
       name: "VEG PULAO",
       variants: ["regular", "large"],
       prices: [{regular: 150, large: 220}],
       category: "veg",
       image: "https://ministryofcurry.com/wp-content/uploads/2022/10/Veg-Pulao-6-1024x1536.jpg",
       description: "Aromatic rice cooked with fresh vegetables and mild spices."
  },
  {
       name: "BUTTER NAAN",
       variants: ["single", "double"],
       prices: [{single: 40, double: 75}],
       category: "veg",
       image: "https://foodess.com/wp-content/uploads/2023/02/Butter-Naan-2-819x1024.jpg",
       description: "Soft and fluffy naan topped with melted butter."
  },
  {
       name: "TANDOORI CHICKEN",
       variants: ["half", "full"],
       prices: [{half: 250, full: 450}],
       category: "nonveg",
       image: "https://i0.wp.com/blendofspicesbysara.com/wp-content/uploads/2021/04/PXL_20210403_202643777.PORTRAIT-01.jpeg?resize=800%2C840&ssl=1",
       description: "Chicken marinated in yogurt and spices, cooked in a clay oven."
  },
  {
       name: "PANEER TIKKA",
       variants: ["half", "full"],
       prices: [{half: 200, full: 350}],
       category: "veg",
       image: "https://www.vegrecipesofindia.com/wp-content/uploads/2011/10/grilled-paneer-tikka.jpg",
       description: "Cottage cheese cubes marinated in spices and grilled to perfection."
  },
  {
       name: "DAL TADKA",
       variants: ["regular", "large"],
       prices: [{regular: 120, large: 180}],
       category: "veg",
       image: "https://www.vegrecipesofindia.com/wp-content/uploads/2025/03/dal-tadka-1-1024x1536.jpg",
       description: "Lentils cooked with aromatic spices and topped with tempered ghee."
  },
  {
       name: "EGG CURRY",
       variants: ["regular", "large"],
       prices: [{regular: 150, large: 220}],
       category: "nonveg",
       image: " https://images.immediate.co.uk/production/volatile/sites/30/2020/08/eggcurry-1-1e3c663.jpg?quality=90&webp=true&resize=300,272 ",
       description: "Boiled eggs cooked in rich tomato-onion gravy."
  },
  {
       name: "CHICKEN KORMA",
       variants: ["regular", "large"],
       prices: [{regular: 220, large: 350}],
       category: "nonveg",
       image: " https://www.teaforturmeric.com/wp-content/uploads/2018/06/Chicken-Korma-full-728x1092.jpg ",
       description: "Creamy chicken curry with aromatic spices and cashew paste."
  },
  {
       name: "MUTTON ROGAN JOSH",
       variants: ["regular", "large"],
       prices: [{regular: 320, large: 450}],
       category: "nonveg",
       image: "https://www.yummytummyaarthi.com/wp-content/uploads/2014/10/1-13.jpg",
       description: "Slow-cooked mutton in a flavorful red curry."
  },
  {
       name: "GULAB JAMUN",
       variants: ["single", "double"],
       prices: [{single: 40, double: 75}],
       category: "dessert",
       image: "https://www.seriouseats.com/thmb/qqZf1gTkobAud-3FaKJMdW4ExUE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__11__20201109-gulab-jamuns-nik-sharma-9-ad652cf623834c1aaff916678aba47f1.jpg",
       description: "Soft and spongy dumplings soaked in sugar syrup."
  }
    
  ]
  export default pizzas;