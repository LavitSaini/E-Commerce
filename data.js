// All products data in form of array and objects
const productsData = [
  {
    category: "Shirts",
    items: [
      {
        name: "T-shirt",
        url: "/media/All Product Images/white-shirt.webp",
        description: "Comfortable everyday cotton shirt.",
        price: 1499.99, // in INR
        qualityPoints: [
          "This T-shirt offers unparalleled comfort with its soft cotton fabric.",
          "Designed for everyday wear, it provides breathability and freedom of movement.",
          "The classic design makes it a versatile addition to any wardrobe.",
          "Durable construction ensures long-lasting quality.",
          "Available in various sizes and colors to suit individual preferences.",
        ],
        relatedImages: [
          "/media/All Product Images/white-shirt.webp",
          "/media/All Product Images/white-shirt.webp",
          "/media/All Product Images/white-shirt.webp",
        ],
        clothCategory: "Shirts",
      },
      {
        name: "Polo Shirt",
        url: "/media/All Product Images/pngimg.com-polo_shirt_PNG8143.webp",
        description: "Classic stylish casual polo shirt.",
        price: 2199.99, // in INR
        qualityPoints: [
          "This Polo Shirt exudes style and sophistication with its timeless design.",
          "Crafted from high-quality materials, it offers superior comfort and durability.",
          "Perfect for both casual and semi-formal occasions, adding versatility to your wardrobe.",
          "The fine craftsmanship ensures a polished look every time.",
          "Available in a range of colors to suit individual preferences.",
        ],
        relatedImages: [
          "/media/All Product Images/pngimg.com-polo_shirt_PNG8143.webp",
          "/media/All Product Images/pngimg.com-polo_shirt_PNG8143.webp",
          "/media/All Product Images/pngimg.com-polo_shirt_PNG8143.webp",
        ],
        clothCategory: "Shirts",
      },
      {
        name: "Button-down Shirt",
        url: "/media/All Product Images/pngimg.com-dress_shirt_PNG8061.webp",
        description: "Elegant formal button-down shirt.",
        price: 3199.99, // in INR
        qualityPoints: [
          "This Button-down Shirt epitomizes elegance and sophistication with its refined design.",
          "Made from premium fabrics, it offers luxurious comfort and impeccable style.",
          "Perfect for formal occasions or professional settings, enhancing your professional image.",
          "The meticulous attention to detail ensures a flawless fit and finish.",
          "Investing in this shirt is investing in timeless style and lasting quality.",
        ],
        relatedImages: [
          "/media/All Product Images/pngimg.com-dress_shirt_PNG8061.webp",
          "/media/All Product Images/pngimg.com-dress_shirt_PNG8061.webp",
          "/media/All Product Images/pngimg.com-dress_shirt_PNG8061.webp",
        ],
        clothCategory: "Shirts",
      },
      {
        name: "Flannel Shirt",
        url: "/media/All Product Images/red shirt.webp",
        description: "Warm cozy outdoor flannel shirt.",
        price: 4499.99, // in INR
        qualityPoints: [
          "This Flannel Shirt is a must-have for outdoor enthusiasts, offering warmth and comfort.",
          "Crafted from soft flannel fabric, it provides cozy insulation against cold weather.",
          "Designed for durability and functionality, it withstands rugged outdoor conditions.",
          "The classic plaid pattern adds a touch of style to your outdoor adventures.",
          "Whether for camping, hiking, or everyday wear, this shirt delivers both warmth and style.",
        ],
        relatedImages: [
          "/media/All Product Images/red shirt.webp",
          "/media/All Product Images/red shirt.webp",
          "/media/All Product Images/red shirt.webp",
        ],
        clothCategory: "Shirts",
      },
    ],
  },
  {
    category: "Pants",
    items: [
      {
        name: "Jeans",
        url: "/media/All Product Images/pent.webp",
        description: "Classic denim casual jeans.",
        price: 5999.99, // in INR
        qualityPoints: [
          "These Jeans are a wardrobe staple, offering timeless style and versatility.",
          "Crafted from high-quality denim, they provide durability and comfort for daily wear.",
          "The classic design makes them suitable for various casual occasions.",
          "Designed for a flattering fit, they enhance your silhouette with their slimming effect.",
          "Investing in these jeans ensures enduring style and comfort for years to come.",
        ],
        relatedImages: [
          "/media/All Product Images/pent.webp",
          "/media/All Product Images/pent.webp",
          "/media/All Product Images/pent.webp",
        ],
        clothCategory: "Pants",
      },
      {
        name: "Chinos",
        url: "/media/All Product Images/Chino-Black_1082x.webp",
        description: "Versatile comfortable casual chinos.",
        price: 4999.99, // in INR
        qualityPoints: [
          "These Chinos offer versatility and comfort, making them a wardrobe essential.",
          "Crafted from premium materials, they provide a soft and comfortable feel all day long.",
          "Perfect for both casual and semi-formal occasions, they add a touch of sophistication to any outfit.",
          "The classic design and tailored fit ensure a polished appearance.",
          "With their durable construction, these chinos are a reliable choice for everyday wear.",
        ],
        relatedImages: [
          "/media/All Product Images/Chino-Black_1082x.webp",
          "/media/All Product Images/Chino-Black_1082x.webp",
          "/media/All Product Images/Chino-Black_1082x.webp",
        ],
        clothCategory: "Pants",
      },
      {
        name: "Cargo Pants",
        url: "/media/All Product Images/cargo.webp",
        description: "Functional outdoor cargo pants.",
        price: 3999.99, // in INR
        qualityPoints: [
          "These Cargo Pants are designed for practicality and functionality, making them ideal for outdoor activities.",
          "Featuring multiple pockets, they offer ample storage space for essentials on the go.",
          "Crafted from durable materials, they withstand rugged outdoor conditions.",
          "The versatile design allows for easy styling with various casual outfits.",
          "Whether for hiking, camping, or everyday wear, these cargo pants deliver both style and utility.",
        ],
        relatedImages: [
          "/media/All Product Images/cargo.webp",
          "/media/All Product Images/cargo.webp",
          "/media/All Product Images/cargo.webp",
        ],
        clothCategory: "Pants",
      },
      {
        name: "Slim-fit Trousers",
        url: "/media/All Product Images/mens-lycra-plain-formal-pant-500x500.webp",
        description: "Modern elegant formal trousers.",
        price: 6999.99, // in INR
        qualityPoints: [
          "These Slim-fit Trousers combine modern style with classic elegance, perfect for formal occasions.",
          "Crafted from high-quality fabric, they offer a sleek silhouette and impeccable tailoring.",
          "The slim-fit design provides a flattering look, enhancing your professional image.",
          "Versatile enough to pair with dress shirts or casual tops, they offer endless styling possibilities.",
          "Investing in these trousers ensures sophistication and confidence for any formal event.",
        ],
        relatedImages: [
          "/media/All Product Images/mens-lycra-plain-formal-pant-500x500.webp",
          "/media/All Product Images/mens-lycra-plain-formal-pant-500x500.webp",
          "/media/All Product Images/mens-lycra-plain-formal-pant-500x500.webp",
        ],
        clothCategory: "Pants",
      },
    ]
  },
  {
    category: "Dresses",
    items: [
      {
        name: "Casual Dress",
        url: "/media/All Product Images/pngimg.com-dress_PNG127.webp",
        description: "Relaxed easygoing summer dress.",
        price: 7999.99, // in INR
        qualityPoints: [
          "This Casual Dress exudes effortless style and comfort, perfect for laid-back summer days.",
          "Crafted from lightweight fabric, it offers breezy comfort in warm weather.",
          "The relaxed silhouette ensures freedom of movement and easy wearability.",
          "Versatile enough to dress up or down, it transitions seamlessly from day to night.",
          "With its charming design and comfort, this dress is a wardrobe staple for casual occasions.",
        ],
        relatedImages: [
          "/media/All Product Images/pngimg.com-dress_PNG127.webp",
          "/media/All Product Images/pngimg.com-dress_PNG127.webp",
          "/media/All Product Images/pngimg.com-dress_PNG127.webp",
        ],
        clothCategory: "Dresses",

      },
      {
        name: "Evening Gown",
        url: "/media/All Product Images/Red-dress.webp",
        description: "Glamorous formal evening gown.",
        price: 12999.99, // in INR
        qualityPoints: [
          "This Evening Gown epitomizes glamour and sophistication, perfect for formal events.",
          "Crafted from luxurious fabric, it drapes elegantly and flatters every silhouette.",
          "The intricate detailing and exquisite craftsmanship make it a standout piece.",
          "Designed to make a statement, it ensures a memorable entrance at any event.",
          "Investing in this evening gown guarantees an unforgettable, show-stopping look.",
        ],
        relatedImages: [
          "/media/All Product Images/Red-dress.webp",
          "/media/All Product Images/Red-dress.webp",
          "/media/All Product Images/Red-dress.webp",
        ],
        clothCategory: "Dresses",
      },
      {
        name: "Maxi Dress",
        url: "/media/All Product Images/dress-png-26103 - Copy.webp",
        description: "Flowing elegant beach maxi.",
        price: 9999.99, // in INR
        qualityPoints: [
          "This Maxi Dress exudes effortless elegance, perfect for beach outings or summer soirees.",
          "Crafted from lightweight, flowy fabric, it offers breezy comfort and freedom of movement.",
          "The maxi length adds drama and sophistication to your look, while the relaxed fit ensures comfort.",
          "Versatile enough to dress up with heels or down with sandals, it offers endless styling possibilities.",
          "With its timeless design and comfort, this maxi dress is a must-have for any wardrobe.",
        ],
        relatedImages: [
          "/media/All Product Images/dress-png-26103 - Copy.webp",
          "/media/All Product Images/dress-png-26103 - Copy.webp",
          "/media/All Product Images/dress-png-26103 - Copy.webp",
        ],
        clothCategory: "Dresses",
      },
      {
        name: "Wrap Dress",
        url: "/media/All Product Images/pngimg.com-dress_PNG149.webp",
        description: "Flattering chic wrap dress.",
        price: 8999.99, // in INR
        qualityPoints: [
          "This Wrap Dress is a wardrobe essential, offering flattering style and effortless elegance.",
          "Crafted from high-quality fabric, it drapes beautifully and accentuates your curves.",
          "The wrap design cinches at the waist, creating a feminine silhouette.",
          "Versatile enough to wear from day to night, it transitions seamlessly for various occasions.",
          "Investing in this wrap dress ensures timeless sophistication and confidence with every wear.",
        ],
        relatedImages: [
          "/media/All Product Images/pngimg.com-dress_PNG149.webp",
          "/media/All Product Images/pngimg.com-dress_PNG149.webp",
          "/media/All Product Images/pngimg.com-dress_PNG149.webp",
        ],
        clothCategory: "Dresses",
      },
    ],
  },
  {
    category: "Jackets",
    items: [
      {
        name: "Denim Jacket",
        url: "/media/All Product Images/Jean-Jacket-PNG-Isolated-Pic.webp",
        description: "Classic casual denim jacket.",
        price: 7999.99, // in INR
        qualityPoints: [
          "This Denim Jacket is a classic wardrobe staple, perfect for adding a casual edge to any outfit.",
          "Crafted from durable denim fabric, it offers timeless style and durability.",
          "The versatile design pairs effortlessly with jeans, chinos, or dresses.",
          "Featuring functional pockets and metal hardware, it combines style with practicality.",
          "With its enduring appeal and versatility, this denim jacket is a must-have for any season.",
        ],
        relatedImages: [
          "/media/All Product Images/Jean-Jacket-PNG-Isolated-Pic.webp",
          "/media/All Product Images/Jean-Jacket-PNG-Isolated-Pic.webp",
          "/media/All Product Images/Jean-Jacket-PNG-Isolated-Pic.webp",
        ],
        clothCategory: "Jackets",
      },
      {
        name: "Leather Jacket",
        url: "/media/All Product Images/pngimg.com - leather_jacket_PNG29.webp",
        description: "Stylish rugged leather jacket.",
        price: 14999.99, // in INR
        qualityPoints: [
          "This Leather Jacket exudes rugged sophistication, perfect for adding an edgy flair to your look.",
          "Crafted from premium leather, it offers durability, style, and comfort.",
          "The timeless design features classic details like a moto collar and zippered pockets.",
          "Designed to age beautifully over time, it becomes more unique with wear.",
          "Investing in this leather jacket guarantees timeless style and rugged elegance.",
        ],
        relatedImages: [
          "/media/All Product Images/pngimg.com - leather_jacket_PNG29.webp",
          "/media/All Product Images/pngimg.com - leather_jacket_PNG29.webp",
          "/media/All Product Images/pngimg.com - leather_jacket_PNG29.webp",
        ],
        clothCategory: "Jackets",
      },
      {
        name: "Bomber Jacket",
        url: "/media/All Product Images/Simple Jacket.webp",
        description: "Trendy urban bomber jacket.",
        price: 9999.99, // in INR
        qualityPoints: [
          "This Bomber Jacket is a must-have for trendsetters, offering urban style with a modern edge.",
          "Crafted from high-quality materials, it provides warmth and comfort without sacrificing style.",
          "The classic bomber silhouette is versatile and effortlessly cool, perfect for casual outings.",
          "Featuring ribbed trims and a zippered front, it adds a sporty vibe to your look.",
          "With its trendy design and comfort, this bomber jacket is a standout piece in any wardrobe.",
        ],
        relatedImages: [
          "/media/Bomber Jacket Images/Bomber2.webp",
          "/media/Bomber Jacket Images/Bomber3.webp",
          "/media/Bomber Jacket Images/Bomber4.webp",
        ],
        clothCategory: "Jackets",
      },
      {
        name: "Trench Coat",
        url: "/media/All Product Images/pngimg.com - coat_PNG33.webp",
        description: "Sophisticated classic trench coat.",
        price: 12999.99, // in INR
        qualityPoints: [
          "This Trench Coat exudes timeless elegance and sophistication, perfect for any occasion.",
          "Crafted from premium fabric, it offers luxurious comfort and durability.",
          "The classic design features a double-breasted front and belted waist for a flattering fit.",
          "Versatile enough to wear over formal attire or casual outfits, it adds polish to any look.",
          "Investing in this trench coat ensures enduring style and sophistication for years to come.",
        ],
        relatedImages: [
          "/media/All Product Images/pngimg.com - coat_PNG33.webp",
          "/media/All Product Images/pngimg.com - coat_PNG33.webp",
          "/media/All Product Images/pngimg.com - coat_PNG33.webp",
        ],
        clothCategory: "Jackets",
      },
    ],
  },
];

// Check each product name and add new property  in each objects of items array called qualityPoints that is an array and holds 5 string points and each point have 30 words about praise  product quality and  reasons to buy it. Please generate complete data for all items.
