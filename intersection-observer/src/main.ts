let box = document.querySelector(".box") as HTMLDivElement;

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log("🚀 ~ entries.forEach ~ entry:", entry);
      if (entry.isIntersecting) {
        console.log("Elemento visible");
        entry.target.classList.add("visible");
        entry.target.innerHTML = "<h1>Elemento visible</h1>";
      }
    });
  },
  {
    threshold: 1, // 100% where the whole element is visible
  }
);

observer.observe(box);
