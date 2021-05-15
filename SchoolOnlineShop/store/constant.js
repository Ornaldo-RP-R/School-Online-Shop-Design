const isLoggedIn = false;
const pageLocation = `file:///Users/crs/Desktop/SchoolOnlineShop/application/pages`;
const imageLocation = "file:///Users/crs/Desktop/SchoolOnlineShop/images/";
const windowUrl = new URL(window.location.href);

const categoryList = [
  { name: "Meshkuj" },
  { name: "Femra" },
  { name: "Sport" },
  { name: "Kozmetik" },
  { name: "Aksesore" },
  { name: "Elektronik" },
];
const listOfShops = [
  {
    name: "Adidas",
    imgSrc: "adidas.png",
    id: 0,
  },
  { name: "Bershka",id: 1, imgSrc: `bershka.jpeg` },
  { name: "Pull & Bear",id: 2, imgSrc: `pullBear.png` },
  { name: "Rolex",id: 3, imgSrc: `rolex.png` },
  { name: "Tifanny & Co",id: 4, imgSrc: `tiffanyCo.png` },
  { name: "Apple",id:5, imgSrc: `apple.png` },
];

const topCategories = [
  {
    title: "Bershka new season",
    id: 0,
    imgSrc: "bershkaBanner.jpeg",
  },
  { title: "Rolex quality brand", id: 1, imgSrc: `rolexBanner.jpeg`, id: 1 },
  { title: "Jewlery season offer", id: 2, imgSrc: `TiffanyCoBanner.jpeg` },
  { title: "Apple", id: 3, imgSrc: `appleBanner.jpeg` },
  { title: "Addidas uxury shoes", id: 4, imgSrc: `adidasBanner.jpeg` },
  { title: "Pull & Bear", id: 5, imgSrc: `pullBearBanner.png` },
];

const shopItems = [
   { description: "Addidas shoes", imgSrc: `addidas1.png`, price: 55 },
    { description: "Addidas cap", imgSrc: `addidas2.png`, price: 60 },
    { description: "Addidas shoes", imgSrc: `addidas3.png`, price: 80 },
    { description: "Addidas shoes", imgSrc: `addidas4.png`, price: 70 },
    { description: "Nike shoes", imgSrc: `nike.png`, price: 55 },
    { description: "Addidas cap", imgSrc: `addidas2.png`, price: 60 },
    { description: "Addidas clothing", imgSrc: `adidasCloth.png`, price: 80 },
    { description: "Jewlery Tiffany", imgSrc: `jewl.png`, price: 70 },
    
];

const addParamByCondition = (url, params, condition = true) => {
  let newUrl = url;
  params.forEach((param, index) => {
    if (index === 0 && condition) {
      newUrl += `?${param}`;
    } else {
      newUrl += `&${param}`;
    }
  });
  return newUrl;
};

const addUrlParams = (newUrl, params) => {
  let newUrlToReturn = `${newUrl}`;
  if (window.location.href.includes(newUrl)) {
    let currentParams = windowUrl.search
      .replace("?", "")
      .split("&")
      .filter((param) => !params.map((param) => param.split("=")[0]).includes(param.split("=")[0]));
    newUrlToReturn = addParamByCondition(newUrlToReturn, currentParams.concat(params));
  } else {
    newUrlToReturn = addParamByCondition(newUrlToReturn, params);
  }
  return newUrlToReturn;
};
