const loadCardList = (elementSelector, list) => {
  list.forEach((item) => {
    const image = $(`<img class="image" src="${imageLocation}/${item.imgSrc}" id=${item.name}/>`);
    $(elementSelector).append(
        $(`<div class="card"></div>`)
            .append(image)
            .append(`<div class="card__footer">
                        <span>${item.title}</span>
                        <span><span>Go Shopping</span></span>
                    </div>`)
    );
  });
};
