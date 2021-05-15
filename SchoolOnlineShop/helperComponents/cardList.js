const loadCardList = (elementSelector, list) => {
  list.forEach((item) => {
    const image = $(`<img class="image" src="${imageLocation}/${item.imgSrc}" id=${item.name}/>`);
    const card=$(`<div class="card"></div>`);
    $(elementSelector).append(card.append(image).append(cardFooterTemplate(item.title)))
    listenToCardClick(card,item);                                                  
  });
};

const cardFooterTemplate=(title)=>{
  return `<div class="card__footer">
              <span>${title}</span>
              <span><span>Go Shopping</span></span>
          </div>`
}

const listenToCardClick=(card,item)=>{
    card.click(()=>{
      window.location.replace(addUrlParams(`${pageLocation}/shopItems/shopItems.html`,[`categoryId=${item.id}`]))
    })
}