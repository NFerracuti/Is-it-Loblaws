const sobeysBrands = [
  "Big 8 Beverages",
  "Farm Boy",
  "Foodland",
  "Freshco",
  "Chalo!",
  "IGA",
  "Lawtons",
  "Marché Bonichoix",
  "Marché Tradition",
  "Boni-Soir",
  "Dépanneur Voisin",
  "Needs Convenience",
  "Pete's Frootique",
  "Rachelle-Béry",
  "Safeway",
  "Sobeys",
  "Sobeys Extra",
  "Thrifty Foods",
  "Sobeys Liquor",
  "Safeway Liquor",
  "Thrifty Foods Liquor",
  "Voilà"
];


const loblawsBrands = [
  "No Frills",
  "Real Canadian Superstore",
  "Maxi",
  "Extra Foods",
  "Independent Grocer",
  "Zehrs",
  "Valu-mart",
  "Fortinos",
  "Atlantic Superstore",
  "Loblaws",
  "Provigo",
  "City Market",
  "Dominion",
  "Atlantic Cash & Carry",
  "Axep",
  "Bloor Street Market",
  "Les Entrepôts Presto",
  "Freshmart",
  "L'Intermarché",
  "Lucky Dollar Foods",
  "Maxi",
  "Maxi & Cie",
  "NG Cash & Carry",
  "Shop Easy Foods",
  "Shoppers Drug Mart",
  "Pharmaprix",
  "SuperValu",
  "T & T Supermarket",
  "Wholesale Club",
  "Club Entrepôt",
  "Independent CityMarket",
  "Independent",
  "Your Independent Grocer"
];

const metroBrands = [
  "Metro",
  "Food Basics",
  "Super C",
  "Marché Richelieu",
  "Les 5 Saisons",
  "Marché Ami",
  "The Barn Markets"
];

const pattisonBrands = [
  "AG Foods",
  "Bulkley Valley Wholesale",
  "Buy-Low Foods",
  "Choices Markets",
  "Meinhardt Fine Foods",
  "Nature’s Fare Markets",
  "Nesters Market",
  "PriceSmart Foods",
  "Quality Foods",
  "Save-On-Foods",
  "Urban Fare"
];

const DollaramaBrands = ["Dollarama"];
const IKEABrands = ["IKEA"];
const JeanCoutuBrands = ["Jean Coutu"];
const CanadianTireBrands = [
  "Canadian Tire",
  "PartSource",
  "Sport Chek",
  "Mark's",
  "Helly Hansen",
  "Party City Canada",
  "Sher-Wood"
];
const LondonDrugsBrands = ["London Drugs"];
const WholeFoodsBrands = ["Whole Foods"];
const PusaterisBrands = ["Pusateri's"];
const GiantTigerBrands = ["Giant Tiger"];
const MMFoodMarketBrands = ["M&M Food Market"];
const HudsonsBayBrands = ["Hudson's Bay"];
const costcoBrands = ["Costco"];

export const allBrands = [
  ...loblawsBrands,
  ...metroBrands,
  ...sobeysBrands,
  ...pattisonBrands,
  ...costcoBrands,
  ...DollaramaBrands,
  ...IKEABrands,
  ...JeanCoutuBrands,
  ...CanadianTireBrands,
  ...LondonDrugsBrands,
  ...WholeFoodsBrands,
  ...PusaterisBrands,
  ...GiantTigerBrands,
  ...MMFoodMarketBrands,
  ...HudsonsBayBrands,
];

export const getFilteredBrands = (search) => {
  return allBrands.filter(brand => brand.toLowerCase().includes(search.toLowerCase()));
};

export const getStoreOwner = (brand) => {
  const brandOwners = {
    "Atlantic Cash & Carry": "Loblaws",
    "Loblaws": "Loblaws",
    "Axep": "Loblaws",
    "Bloor Street Market": "Loblaws",
    "Les Entrepôts Presto": "Loblaws",
    "Freshmart": "Loblaws",
    "L'Intermarché": "Loblaws",
    "Lucky Dollar Foods": "Loblaws",
    "Maxi": "Loblaws",
    "Maxi & Cie": "Loblaws",
    "NG Cash & Carry": "Loblaws",
    "Shop Easy Foods": "Loblaws",
    "Shoppers Drug Mart": "Loblaws",
    "Pharmaprix": "Loblaws",
    "SuperValu": "Loblaws",
    "T & T Supermarket": "Loblaws",
    "Wholesale Club": "Loblaws",
    "Club Entrepôt": "Loblaws",
    "Independent": "Loblaws",
    "Your Independent Grocer": "Loblaws",
    "Independent CityMarket": "Loblaws",
    "No Frills": "Loblaws",
    "Real Canadian Superstore": "Loblaws",
    "Maxi": "Loblaws",
    "Extra Foods": "Loblaws",
    "Independent Grocer": "Loblaws",
    "Zehrs": "Loblaws",
    "Valu-mart": "Loblaws",
    "Fortinos": "Loblaws",
    "Atlantic Superstore": "Loblaws",
    "Loblaws": "Loblaws",
    "Provigo": "Loblaws",
    "City Market": "Loblaws",
    "Dominion": "Loblaws",
    "Metro": "Metro",
    "Food Basics": "Metro",
    "Super C": "Metro",
    "Marché Richelieu": "Metro",
    "Les 5 Saisons": "Metro",
    "Marché Ami": "Metro",
    "The Barn Markets": "Metro",
    "Big 8 Beverages": "Sobeys",
    "Farm Boy": "Sobeys (Empire Company)",
    "Foodland": "Sobeys (Empire Company)",
    "Freshco": "Sobeys (Empire Company)",
    "Chalo!": "Sobeys (Empire Company)",
    "IGA": "Sobeys (Empire Company)",
    "Lawtons": "Sobeys (Empire Company)",
    "Marché Bonichoix": "Sobeys (Empire Company)",
    "Marché Tradition": "Sobeys (Empire Company)",
    "Boni-Soir": "Sobeys (Empire Company)",
    "Dépanneur Voisin": "Sobeys (Empire Company)",
    "Needs Convenience": "Sobeys (Empire Company)",
    "Pete's Frootique": "Sobeys (Empire Company)",
    "Rachelle-Béry": "Sobeys (Empire Company)",
    "Safeway": "Sobeys (Empire Company)",
    "Sobeys Extra": "Sobeys (Empire Company)",
    "Sobeys Extra": "Sobeys (Empire Company)",
    "Thrifty Foods": "Sobeys (Empire Company)",
    "Sobeys Liquor": "Sobeys (Empire Company)",
    "Safeway Liquor": "Sobeys (Empire Company)",
    "Thrifty Foods Liquor": "Sobeys (Empire Company)",
    "Voilà": "Sobeys (Empire Company)",
    "AG Foods": "Pattison Food Group",
    "Bulkley Valley Wholesale": "Pattison Food Group",
    "Buy-Low Foods": "Pattison Food Group",
    "Choices Markets": "Pattison Food Group",
    "Meinhardt Fine Foods": "Pattison Food Group",
    "Nature’s Fare Markets": "Pattison Food Group",
    "Nesters Market": "Pattison Food Group",
    "PriceSmart Foods": "Pattison Food Group",
    "Quality Foods": "Pattison Food Group",
    "Save-On-Foods": "Pattison Food Group",
    "Urban Fare": "Pattison Food Group",
    "Dollarama": "Dollarama",
    "IKEA": "IKEA",
    "Jean Coutu": "Jean Coutu",
    "Canadian Tire": "Canadian Tire",
    "PartSource": "Canadian Tire",
    "Sport Chek": "Canadian Tire",
    "Mark's": "Canadian Tire",
    "Helly Hansen": "Canadian Tire",
    "Party City Canada": "Canadian Tire",
    "Sher-Wood": "Canadian Tire",
    "London Drugs": "London Drugs",
    "Whole Foods": "Whole Foods",
    "Pusateri's": "Pusateri's",
    "Giant Tiger": "Giant Tiger",
    "M&M Food Market": "M&M Food Market",
    "Costco": "Costco",
    "Hudson's Bay": "Hudson's Bay"
  };

  return brandOwners[brand];
};