const fillNav = (elementSelector, list) => {
  $(elementSelector).append(
    `${list
      .map(({name}) => {
        return `<a href="${addUrlParams(`${pageLocation}/shopItems/shopItems.html`,[`type=${name}`])}"><span>${name}</span></a>`;
      })
      .join("")}`
  );
};
