import { Injectable, OnInit } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticData  {
  productsList:Iproduct[];
  constructor() {
    this.productsList = [
      {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "price": 9.99,
      "discountPercentage": 10.48,
      "stock": 0,
      "rating": 2.56,
      "category": "beauty",
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
      ]
    },
    {
      "id": 2,
      "title": "Eyeshadow Palette with Mirror",
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "price": 19.99,
      "discountPercentage": 18.19,
      "stock": 34,
      "rating": 2.86,
      "category": "beauty",
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
      ]
    },
    {
      "id": 3,
      "title": "Powder Canister",
      "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      "price": 14.99,
      "discountPercentage": 9.84,
      "stock": 89,
      "rating": 4.64,
      "category": "beauty",
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
      ]
    },
    {
      "id": 4,
      "title": "Red Lipstick",
      "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      "price": 12.99,
      "discountPercentage": 12.16,
      "stock": 91,
      "rating": 4.36,
      "category": "beauty",
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
      ]
    },
    {
      "id": 5,
      "title": "Red Nail Polish",
      "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      "price": 8.99,
      "discountPercentage": 11.44,
      "stock": 79,
      "rating": 4.32,
      "category": "beauty",
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"
      ]
    },
    {
      "id": 6,
      "title": "Calvin Klein CK One",
      "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      "price": 49.99,
      "discountPercentage": 1.89,
      "stock": 29,
      "rating": 4.37,
      "category": "fragrances",
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"
      ]
    },
    {
      "id": 7,
      "title": "Chanel Coco Noir Eau De",
      "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
      "price": 129.99,
      "discountPercentage": 16.51,
      "stock": 58,
      "rating": 4.26,
      "category": "fragrances",
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"
      ]
    },
    {
      "id": 8,
      "title": "Dior J'adore",
      "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
      "price": 89.99,
      "discountPercentage": 14.72,
      "stock": 98,
      "rating": 3.8,
      "category": "fragrances",
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp"
      ]
    },
    {
      "id": 9,
      "title": "Dolce Shine Eau de",
      "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
      "price": 69.99,
      "discountPercentage": 0.62,
      "stock": 4,
      "rating": 3.96,
      "category": "fragrances",
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp"
      ]
    },
    {
      "id": 10,
      "title": "Gucci Bloom Eau de",
      "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
      "price": 79.99,
      "discountPercentage": 14.39,
      "stock": 91,
      "rating": 2.74,
      "category": "fragrances",
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp"
      ]
    },
    {
      "id": 11,
      "title": "Annibale Colombo Bed",
      "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
      "price": 1899.99,
      "discountPercentage": 8.57,
      "stock": 88,
      "rating": 4.77,
      "category": "furniture",
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp"
      ]
    },
    {
      "id": 12,
      "title": "Annibale Colombo Sofa",
      "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
      "price": 2499.99,
      "discountPercentage": 14.4,
      "stock": 60,
      "rating": 3.92,
      "category": "furniture",
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp"
      ]
    },
    {
      "id": 13,
      "title": "Bedside Table African Cherry",
      "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
      "price": 299.99,
      "discountPercentage": 19.09,
      "stock": 64,
      "rating": 2.87,
      "category": "furniture",
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/3.webp"
      ]
    },
    {
      "id": 14,
      "title": "Knoll Saarinen Executive Conference Chair",
      "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
      "price": 499.99,
      "discountPercentage": 2.01,
      "stock": 26,
      "rating": 4.88,
      "category": "furniture",
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/3.webp"
      ]
    },
    {
      "id": 15,
      "title": "Wooden Bathroom Sink With Mirror",
      "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
      "price": 799.99,
      "discountPercentage": 8.8,
      "stock": 7,
      "rating": 3.59,
      "category": "furniture",
      "images": [
        "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/3.webp"
      ]
    },
    {
      "id": 16,
      "title": "Apple",
      "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
      "price": 1.99,
      "discountPercentage": 12.62,
      "stock": 8,
      "rating": 4.19,
      "category": "groceries",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"
      ]
    },
    {
      "id": 17,
      "title": "Beef Steak",
      "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
      "price": 12.99,
      "discountPercentage": 9.61,
      "stock": 86,
      "rating": 4.47,
      "category": "groceries",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp"
      ]
    },
    {
      "id": 18,
      "title": "Cat Food",
      "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
      "price": 8.99,
      "discountPercentage": 9.58,
      "stock": 46,
      "rating": 3.13,
      "category": "groceries",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"
      ]
    },
    {
      "id": 19,
      "title": "Chicken Meat",
      "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
      "price": 9.99,
      "discountPercentage": 13.7,
      "stock": 97,
      "rating": 3.19,
      "category": "groceries",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp",
        "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/2.webp"
      ]
    },
    {
      "id": 20,
      "title": "Cooking Oil",
      "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
      "price": 4.99,
      "discountPercentage": 9.33,
      "stock": 10,
      "rating": 4.8,
      "category": "groceries",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp"
      ]
    },
    {
      "id": 21,
      "title": "Cucumber",
      "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
      "price": 1.49,
      "discountPercentage": 0.16,
      "stock": 84,
      "rating": 4.07,
      "category": "groceries",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp"
      ]
    },
    {
      "id": 22,
      "title": "Dog Food",
      "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
      "price": 10.99,
      "discountPercentage": 10.27,
      "stock": 71,
      "rating": 4.55,
      "category": "groceries",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp"
      ]
    },
    {
      "id": 23,
      "title": "Eggs",
      "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
      "price": 2.99,
      "discountPercentage": 11.05,
      "stock": 9,
      "rating": 2.53,
      "category": "groceries",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp"
      ]
    },
    {
      "id": 24,
      "title": "Fish Steak",
      "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.",
      "price": 14.99,
      "discountPercentage": 4.23,
      "stock": 74,
      "rating": 3.78,
      "category": "groceries",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp"
      ]
    },
    {
      "id": 25,
      "title": "Green Bell Pepper",
      "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
      "price": 1.29,
      "discountPercentage": 0.16,
      "stock": 33,
      "rating": 3.25,
      "category": "groceries",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp"
      ]
    },
    {
      "id": 26,
      "title": "Green Chili Pepper",
      "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
      "price": 0.99,
      "discountPercentage": 1.0,
      "stock": 3,
      "rating": 3.66,
      "category": "groceries",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp"
      ]
    },
    {
      "id": 27,
      "title": "Honey Jar",
      "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
      "price": 6.99,
      "discountPercentage": 14.4,
      "stock": 34,
      "rating": 3.97,
      "category": "groceries",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp"
      ]
    },
    {
      "id": 28,
      "title": "Ice Cream",
      "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
      "price": 5.49,
      "discountPercentage": 8.69,
      "stock": 27,
      "rating": 3.39,
      "category": "groceries",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp",
        "https://cdn.dummyjson.com/product-images/groceries/ice-cream/2.webp",
        "https://cdn.dummyjson.com/product-images/groceries/ice-cream/3.webp",
        "https://cdn.dummyjson.com/product-images/groceries/ice-cream/4.webp"
      ]
    },
    {
      "id": 29,
      "title": "Juice",
      "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
      "price": 3.99,
      "discountPercentage": 12.06,
      "stock": 50,
      "rating": 3.94,
      "category": "groceries",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/juice/1.webp"
      ]
    },
    {
      "id": 30,
      "title": "Kiwi",
      "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
      "price": 2.49,
      "discountPercentage": 15.22,
      "stock": 99,
      "rating": 4.93,
      "category": "groceries",
      "images": [
        "https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp"
      ]
    }
  ]
  }
  allProducts(){
    return this.productsList;
  }

  filterByCategory(category:string){
    if(category=='all'){
      return this.productsList;
    }else{
      return this.productsList.filter(p=>p.category==category);
    }
  }
}
