const loadApp=async()=>{
    await loadHeader();
    await fillNav('.container .navbar',categoryList);
    await loadSlideShow('.container .slideshowWrapper',listOfShops)
    await loadCardList('.container .cardListWrapper',topCategories)
    await loadFooter();
}

loadApp();