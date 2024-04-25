export const getStoreOwner = (brand) => {
  const brandOwners = {
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
    "Food Basics": "Metro",
    "Super C": "Metro",
    "Marché Richelieu": "Metro",
    "Les 5 Saisons": "Metro",
    "Marché Ami": "Metro",
    "The Barn Markets": "Metro"
  };

  return brandOwners[brand];
};

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
  "Dominion"
];

const metroBrands = [
  "Food Basics",
  "Super C",
  "Marché Richelieu",
  "Les 5 Saisons",
  "Marché Ami",
  "The Barn Markets"
];

export const allBrands = [...loblawsBrands, ...metroBrands];

export const getFilteredBrands = (search) => {
  return allBrands.filter(brand => brand.toLowerCase().includes(search.toLowerCase()));
};