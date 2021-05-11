const loadSlideShow = (elementSelector, list) => {
  const slideShowWrapper = $(`<div class="slide-show custom-scrollbar"></div>`);
  list.forEach((item) => {
    const image = $(`<img class="image" src="${imageLocation}${item.imgSrc}" id=${item.name}/>`);
    slideShowWrapper.append($(`<div class="slide-show__child"><span>${item.name}</span></div>`).prepend(image));
  });
  $(elementSelector)
    .append(`<span class="slide-show__arrow arrow-left"><i class="far fa-chevron-left"></i></span>`)
    .append(slideShowWrapper)
    .append(`<span class="slide-show__arrow arrow-right"><i class="far fa-chevron-right"></i></span>`);
};
