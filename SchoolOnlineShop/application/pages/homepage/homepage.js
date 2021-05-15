const loadApp=async()=>{
    await loadHeader();
    await loadSlideShow('.container .slideshowWrapper',listOfShops)
    await loadCardList('.container .cardListWrapper',topCategories)
    await loadFooter();
}

loadApp();