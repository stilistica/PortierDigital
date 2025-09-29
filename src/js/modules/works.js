const worksArr = [
  {
    mobUrl: "/img/works/card-1-mob.webp",
    tabletUrl: "/img/works/card-1-tablet.webp",
    deskUrl: "/img/works/card-1-desk.webp",
    desc: "Portier - The ultimate templates & components library.",
  },
  {
    mobUrl: "/img/works/card-2-mob.webp",
    tabletUrl: "/img/works/card-2-tablet.webp",
    deskUrl: "/img/works/card-2-desk.webp",
    desc: "The Coporate - Card for Indian Startups",
  },
  {
    mobUrl: "/img/works/card-3-mob.webp",
    tabletUrl: "/img/works/card-3-tablet.webp",
    deskUrl: "/img/works/card-3-desk.webp",
    desc: "Components Web App Interface UI",
  },
];

const worksContainer = document.querySelector(".works");

if (worksContainer) {
  const cardsHtmlWorks = worksArr.map(({ mobUrl, tabletUrl, deskUrl, desc }) => {
    return `
		<li class="works__card">
		<picture class="works__card-image">
      <source srcset="${deskUrl}" media="(min-width: 1440px)">
      <source srcset="${tabletUrl}" media="(min-width: 568px)">
      <img src="${mobUrl}" alt="Work ${desc}">
    </picture>
		<p class="works__card-text">${desc}<p>
		<a class="works__card-more" aria-label="Open Project">
      <svg>
        <use href="img/sprite.svg#icon-more"></use>
      </svg>
    </a>
		</div>`;
  });
  worksContainer.innerHTML = cardsHtmlWorks.join("");
}
