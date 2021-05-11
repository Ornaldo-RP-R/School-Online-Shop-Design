const fillNav = (elementSelector, list) => {
  $(elementSelector).append(
    `${list
      .map((itemInList) => {
        return `<span>${itemInList.name}</span>`;
      })
      .join("")}`
  );
};
