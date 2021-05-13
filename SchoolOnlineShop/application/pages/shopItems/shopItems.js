const loadShopItems=async()=>{
    await loadHeader();
    await loadFooter();
    await generateShopItems();
}

loadShopItems();

const generateShopItems=()=>{
    let windowUrl = new URL(window.location.href);
    let categoryId = windowUrl.searchParams.get("categoryId");
    console.log(shopItems[categoryId].description)
    $(`.shopItems`).append(shopItemsTemplate(shopItems[categoryId]))
}

const shopItemsTemplate=(shopItemsArray)=>{
    return shopItemsArray.map((item)=>{
        return `<span>${item.description}</span>`
    }).join("")
}