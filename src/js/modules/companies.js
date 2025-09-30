const companiesArr = [
  {
    svg: "img/sprite.svg#icon-m",
    title: "Modulz",
    desc: "Lead Designer",
  },
  {
    svg: "img/sprite.svg#icon-ball",
    title: "Stitches",
    desc: "UI Designer",
  },
  {
    svg: "img/sprite.svg#icon-delta",
    title: "Vercel",
    desc: "Frontend developer",
  },
  {
    svg: "img/sprite.svg#icon-boltm",
    title: "Framer",
    desc: "UX Designer",
  },
  {
    svg: "img/sprite.svg#icon-figma",
    title: "Figma",
    desc: "Lead Developer",
  },
];

const companiesContainer = document.querySelector(".companies__cards");

if (companiesContainer) {
  const companiesHtmlValues = companiesArr.map(
    ({ svg, title, desc }) => {
      return `
			<div class="companies__card">
		  <div class="companies__card-svg">
			<svg>
        <use href="${svg}"></use>
      </svg></div>
			<div class="companies__card-text">
				  <h3>${title}</h3>
					<p>${desc}</p>
			</div>
		</div>
			` 
    }
  );
  companiesContainer.innerHTML = companiesHtmlValues.join("");
}