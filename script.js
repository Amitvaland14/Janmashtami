const flipBook = (elBook) => {
  elBook.style.setProperty("--c", 0);
  elBook.querySelectorAll(".page").forEach((page, idx) => {
    page.style.setProperty("--i", idx);
    page.addEventListener("click", (evt) => {
      if (evt.target.closest("a")) return;
      const curr = evt.target.closest(".back") ? idx : idx + 1;
      elBook.style.setProperty("--c", curr);
    });
  });
};

document.addEventListener('contextmenu', e => e.preventDefault());

// Disable dragging
document.addEventListener('dragstart', e => e.preventDefault());

// Disable text/image selection
document.addEventListener('selectstart', e => e.preventDefault());

document.querySelectorAll(".book").forEach(flipBook);