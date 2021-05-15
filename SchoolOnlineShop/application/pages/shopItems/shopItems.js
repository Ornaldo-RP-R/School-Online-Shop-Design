const loadShopItems=async()=>{
    await loadHeader();
    await loadFooter();
    await generateShopItems();
}

loadShopItems();

const generateShopItems=()=>{
    $(`.shopItems`).append(shopItemsTemplate(shopItems))
}

const shopItemsTemplate=(shopItemsArray)=>{
    return shopItemsArray.map((item)=>{
        return `<div class="shopItems__cart">
                    <img src="${imageLocation}/${item.imgSrc}" />
                    <span>${item.description}</span>
                    <span>Price : <b>${item.price.toString().toLocaleString("en", { minimumFractionDigits: 2 })} € </b></span>
                    <div class="submit">
                        <input min="0" placeholder="0" type="number"/>
                        <button>Add To Cart</button>
                    </div>
                </div>`
    }).join("")
}