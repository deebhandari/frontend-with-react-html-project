// Mock data for a Nepali online store. Prices are in NPR.
// Each product has an `image` path inside public/images. If that photo file is missing,
// the site automatically shows the drawn illustration (`shape`) instead.
export const categories = ["Food & Tea", "Clothing", "Handicrafts", "Home & Living"];

export const categoryInfo = {
  "Food & Tea": "Ilam tea, mountain honey and spices from Nepali farms.",
  Clothing: "Pashmina, wool and traditional Nepali wear.",
  Handicrafts: "Singing bowls, lokta paper and felt crafts made by artisans.",
  "Home & Living": "Brass, copper and everyday pieces for the home.",
};

export const products = [
  {
    id: 1, image: "/images/illam.jpg", label: "ILAM TEA", name: "Ilam Orthodox Black Tea 100 g", category: "Food & Tea", price: 650, rating: 4.8,
    tag: "Bestseller", featured: true, shape: "bag", colors: ["#f2a900", "#0b3a6f"],
    description: "Whole-leaf black tea from the hills of Ilam. Malty and smooth with a light floral finish. Packed in a resealable bag.",
  },
  {
    id: 2, image: "/images/honey.jpg", label: "HONEY", name: "Himalayan Wild Honey 500 g", category: "Food & Tea", price: 900, rating: 4.7,
    shape: "jar", colors: ["#fbe3a1", "#8a5a00"],
    description: "Raw honey collected from cliff bees in the mid-hills. Thick, dark and rich. Not heated or filtered.",
  },
  {
    id: 3, image: "/images/timur.jpg", label: "TIMUR", name: "Timur Pepper 50 g", category: "Food & Tea", price: 350, rating: 4.5,
    shape: "jar", colors: ["#dfe8f3", "#0b3a6f"],
    description: "Whole timur berries with a citrus aroma and a tingling bite. Used in achar, chutney and meat marinades.",
  },
  {
    id: 4, image: "/images/dry.jpg", label: "APPLE", name: "Mustang Dried Apple Slices", category: "Food & Tea", price: 450, rating: 4.4,
    shape: "bag", colors: ["#e9f1e4", "#2f5d2a"],
    description: "Sun-dried apple slices from Mustang with no added sugar. A good trekking snack. 200 g.",
  },
  {
    id: 5, image: "/images/kurti.jpg", name: "kurti Boys", category: "Clothing", price: 4800, rating: 4.9,
    tag: "Top rated", featured: true, shape: "shawl", colors: ["#f2a900", "#0b3a6f"],
    description: "Soft pashmina-silk blend woven in Kathmandu. Warm, light and 70 x 200 cm.",
  },
  {
    id: 6, image: "/images/dhaka.jpg", name: "Dhaka Topi", category: "Clothing", price: 950, rating: 4.6,
    shape: "hat", colors: ["#dfe8f3", "#a31621"],
    description: "Traditional Nepali cap made from handwoven Dhaka fabric. Available in sizes S to XL.",
  },
  {
    id: 7, image: "/images/sweeter.jpg", name: "Felted Wool Scarf", category: "Clothing", price: 1500, rating: 4.5,
    shape: "shawl", colors: ["#e9f1e4", "#2f5d2a"],
    description: "Hand-felted Nepali wool in a warm, even weave. Soft against the skin and good for cold mornings.",
  },
  {
    id: 8, image: "/images/bowl.jpg", name: "Tibetan Singing Bowl", category: "Handicrafts", price: 3500, rating: 4.8,
    tag: "New", featured: true, shape: "bowl", colors: ["#f2a900", "#1c222b"],
    description: "Hand-hammered bronze bowl, 12 cm wide, with a wooden mallet and cushion. Gives a long, clear tone.",
  },
  {
    id: 9, image: "/images/ram.jpg", label: "LOKTA", name: "Lokta Paper Notebook", category: "Handicrafts", price: 450, rating: 4.6,
    shape: "notebook", colors: ["#dfe8f3", "#0b3a6f"],
    description: "Notebook made from lokta bark paper, a Nepali craft tradition. 120 pages, A5, sewn binding.",
  },
  {
    id: 10, image: "/images/mango.jpg", name: "Felt mango, Set of 4", category: "food&tea", price: 600, rating: 4.4,
    shape: "coasters", colors: ["#fbe3a1", "#a31621"],
    description: "Colourful coasters made from hand-rolled felt balls by a women's cooperative in Kathmandu.",
  },
  {
    id: 11, image: "/images/copper.jpg", name: "Copper Water Bottle 900 ml", category: "Home & Living", price: 2200, rating: 4.6,
    featured: true, shape: "bottle", colors: ["#f2a900", "#8a3b12"],
    description: "Pure copper bottle with a screw cap. Traditionally used to store drinking water overnight.",
  },
  {
    id: 12, image: "/images/brass.jpg", name: "Brass Oil Lamp (Diyo)", category: "Home & Living", price: 1100, rating: 4.7,
    shape: "lamp", colors: ["#dfe8f3", "#8a5a00"],
    description: "Hand-cast brass diyo for puja and festivals like Tihar. Comes with 10 cotton wicks.",
  },
];
