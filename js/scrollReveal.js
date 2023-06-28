$(".hero-title").delay(1000).animate({ opacity: 1 }, 1500);
$(".div-whatsapp-button").delay(1000).animate({ opacity: 1 }, 1500);
$(".div-instagram-button").delay(1000).animate({ opacity: 1 }, 1500);
$(".saibaMais-div").delay(1000).animate({ opacity: 0.5 }, 1500);

ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 2500,
  delay: 0,
});

ScrollReveal().reveal(".hero-title", { delay: 500, origin: "top" });
ScrollReveal().reveal(".div-whatsapp-button-link", {
  delay: 500,
  origin: "right",
  distance: "200px",
});
ScrollReveal().reveal(".div-instagram-button-link", {
  delay: 500,
  origin: "left",
  distance: "200px",
});
ScrollReveal().reveal(".titles", { origin: "top" });
ScrollReveal().reveal(".div-about-text");
ScrollReveal().reveal(".card_dir", { origin: "left" });
// ScrollReveal().reveal(".card_dir", { origin: "right" });
ScrollReveal().reveal(".card_esq", { origin: "left" });
ScrollReveal().reveal(".card_vantagem_container", { rotate: { x: -1000, z: 0 } });
ScrollReveal().reveal(".img_focus_antes", { rotate: { x: -1000, z: 0 } });
ScrollReveal().reveal(".img_focus_depois", { rotate: { x: -1000, z: 0 } });
ScrollReveal().reveal(".about-text-span", { rotate: { x: -1000, z: 0 } });
ScrollReveal().reveal(".about-text-li-1", { origin: "left" });
ScrollReveal().reveal(".about-text-li-2", { origin: "left" });
ScrollReveal().reveal(".about-text-li-3", { origin: "left" });
ScrollReveal().reveal(".about-text-li-4", { origin: "left" });
ScrollReveal().reveal(".about-img", { origin: "left" });
ScrollReveal().reveal(".instagram-post", { rotate: { x: -1000, z: 0 } });
