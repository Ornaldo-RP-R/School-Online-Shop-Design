const loadShopItems=async()=>{
    await loadHeader();
    await loadFooter();
    await generateShopItems();
}

loadShopItems();

const generateShopItems=()=>{
    $(`.shopItems`).append(shopItemsTemplate(shopItems))
    shopItems.forEach((item)=>{
        $(`#${item.id+"toCartInput"}`).on('input', function() { 
            $(`#${item.id+"toCartInput"}`).val(parseInt($(this).val(),10))
        });
    })
    shopItems.forEach((item)=>{
        $(`#${item.id+"toCartButton"}`).click(()=>{
            const quantity=parseInt($(`#${item.id+"toCartInput"}`).val());
            if(quantity > 0 ){
                if(itemsInCart.find(({id})=>id === item.id) !== undefined){
                    const indexOfItem=itemsInCart.findIndex(({id})=>id === item.id)
                    itemsInCart[indexOfItem]={...itemsInCart[indexOfItem],quantity:parseInt(quantity) + parseInt(itemsInCart[indexOfItem].quantity)}
                }else{
                    itemsInCart.push({...item,quantity})
                }
            }
           $(`#${item.id+"toCartInput"}`).val(0)
           AddCartIcon();
           checkForDropdowns();
        })
    })
}

const shopItemsTemplate=(shopItemsArray)=>{
    return shopItemsArray.map((item)=>{
        return `<div class="shopItems__cart">
                    <img src="${imageLocation}/${item.imgSrc}" />
                    <span>${item.description}</span>
                    <span>Price : <b>${item.price.toString().toLocaleString("en", { minimumFractionDigits: 2 })} € </b></span>
                    <div class="submit">
                        <input id="${item.id+"toCartInput"}" min="0" placeholder="0" type="number"/>
                        <button id="${item.id+"toCartButton"}">Add To Cart</button>
                    </div>
                </div>`
    }).join("")
}