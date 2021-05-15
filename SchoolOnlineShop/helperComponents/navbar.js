const fillNav = (elementSelector, list) => {
  const activeType=new URLSearchParams(windowUrl.search).get("type");
  $(elementSelector).append(
    `${list
      .map(({name}) => {
        return `<a class="${activeType === name ?"active" : ""}" href="${addUrlParams(`${pageLocation}/shopItems/shopItems.html`,[`type=${name}`])}"><span>${name}</span></a>`;
      })
      .join("")}`
  );
};
