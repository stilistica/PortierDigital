const blogArr = [
  {
    mobUrl: "img/blog/card-1-mob.webp",
    tabletUrl: "img/blog/card-1-tablet.webp",
    deskUrl: "img/blog/card-1-desk.webp",
    title: "Free fonts alternatives: The ultimate <br/> guide",
    desc: "You must engrave deeply in your mind and never forget: your emotional commitment to what you are doing will be translated into your work.",
  },
  {
    mobUrl: "img/blog/card-2-mob.webp",
    tabletUrl: "img/blog/card-2-tablet.webp",
    deskUrl: "img/blog/card-2-desk.webp",
    title: "How to design an app from stratch",
    desc: "You must engrave deeply in your mind and never forget: your emotional commitment to what you are doing will be translated into your work.",
  },
  {
    mobUrl: "img/blog/card-3-mob.webp",
    tabletUrl: "img/blog/card-3-tablet.webp",
    deskUrl: "img/blog/card-3-desk.webp",
    title: "100 things a UI-UX Designer should <br/> know",
    desc: "You must engrave deeply in your mind and never forget: your emotional commitment to what you are doing will be translated into your work.",
  },
  {
    mobUrl: "img/blog/card-4-mob.webp",
    tabletUrl: "img/blog/card-4-tablet.webp",
    deskUrl: "img/blog/card-4-desk.webp",
    title: "4 rules for intuitive UX",
    desc: "You must engrave deeply in your mind and never forget: your emotional commitment to what you are doing will be translated into your work.",
  },
];

const blogContainer = document.querySelector(".blog__cards");

if (blogContainer) {
  const cardsHtmlBlog = blogArr.map(
    ({ mobUrl, tabletUrl, deskUrl, title, desc }) => {
      return `
		<li class="blog__card">
		<picture class="blog__card-image">
      <source srcset="${deskUrl}" media="(min-width: 1440px)">
      <source srcset="${tabletUrl}" media="(min-width: 768px)">
      <img src="${mobUrl}" alt="Work ${title}">
    </picture>
		<div class="blog__card-info">
		<h3>${title}</h3>
		<p class="blog__card-text">${desc}<p>
		<a href="text.html" class="blog__card-more" aria-label="Read full post">
		  Read full post
      <svg>
        <use href="img/sprite.svg#icon-right"></use>
      </svg>
    </a>
		</div>
		</li>`;
    }
  );
  blogContainer.innerHTML = cardsHtmlBlog.join("");
}
