export function observeForHeader() {
  const hero = document.querySelector(".hero");
  const header = document.querySelector(".fixed-header");

  if (hero) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        header?.classList.toggle("opacity-0", entry.isIntersecting);
      },
      {
        rootMargin: "-125px 0px 0px 0px",
      },
    );
    observer.observe(hero);
  }
}

