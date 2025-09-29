const testimonialsArr = [
  {
    svg: "/img/home/avatar-1.svg",
    comment:
      "“In fact, whenever you must learn a new skill or alter your career path later in life, you reconnect with that youthful, adventurous part of yourself.”",
    name: "Domingo Menenses",
    job: "Cobrand - CEO",
  },
  {
    svg: "/img/home/avatar-2.svg",
    comment:
      "“In fact, whenever you must learn a new skill or alter your career path later in life, you reconnect with that youthful, adventurous part of yourself.”",
    name: "Karla Benivez",
    job: "Tinnie - CO-Founder",
  },
  {
    svg: "/img/home/avatar-3.svg",
    comment:
      "“In fact, whenever you must learn a new skill or alter your career path later in life, you reconnect with that youthful, adventurous part of yourself.”",
    name: "Mark Clark",
    job: "Airbnb - Lead Designer",
  },
];

const testimonialsContainer = document.querySelector(".testimonials__cards");

if (testimonialsContainer) {
  const testimonialsHtml = testimonialsArr.map(
    ({ svg, comment, name, job }) => {
      return `
		<div class="testimonials__card">
		  <div class="testimonials__card-svg">
			<svg>
        <use href="${svg}"></use>
      </svg></div>
			<div class="testimonials__card-text">
			  <p class="testimonials__card-text-com">${comment}</p>
				<div class="testimonials__card-text-info">
				  <h3>${name}</h3>
					<p>${job}</p>
				</div>
			</div>
		</div>
		`;
    }
  );
  testimonialsContainer.innerHTML = testimonialsHtml.join("");
}
