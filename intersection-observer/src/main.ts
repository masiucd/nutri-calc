let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("in-viewport", entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target); // so we don't observe it again
      }
    });
  },
  {
    root: null,
    // rootMargin: "0px",
    rootMargin: "0px 0px -100px 0px",
    threshold: 1, // 0.0 ~ 1.0 (0% ~ 100%)
  }
);

let cards = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;

cards.forEach((card) => {
  observer.observe(card);
});
