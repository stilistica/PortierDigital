const valuesArr = [
  {
    svg: "img/sprite.svg#icon-smile",
    title: "Passionate",
    desc: "As Pasteur himself commented, “Chance favors only the prepared mind.",
  },
  {
    svg: "img/sprite.svg#icon-fur",
    title: "Curious",
    desc: "As Pasteur himself commented, “Chance favors only the prepared mind.",
  },
  {
    svg: "img/sprite.svg#icon-planet",
    title: "Team Work",
    desc: "As Pasteur himself commented, “Chance favors only the prepared mind.",
  },
  {
    svg: "img/sprite.svg#icon-sm",
    title: "Discipline",
    desc: "As Pasteur himself commented, “Chance favors only the prepared mind.",
  },
  {
    svg: "img/sprite.svg#icon-magic",
    title: "Creative",
    desc: "As Pasteur himself commented, “Chance favors only the prepared mind.",
  },
  {
    svg: "img/sprite.svg#icon-person",
    title: "Compassionate",
    desc: "As Pasteur himself commented, “Chance favors only the prepared mind.",
  },
];

const valuesContainer = document.querySelector(".values__cards");

if (valuesContainer) {
  const cardsHtmlValues = valuesArr.map(
    ({ svg, title, desc }) => {
      return `
			<div class="card">
        <svg class="card__svg">
          <use href="${svg}"></use>
        </svg>
        <div class="card__info">
          <h2 class="card__info-title">${title}</h2>
          <p class="card__info-text">${desc}</p>
        </div>
      </div> 
			` 
    }
  );
  valuesContainer.innerHTML = cardsHtmlValues.join("");
}
