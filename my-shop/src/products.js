import bottle from "./assets/bottle.png";
import pen from "./assets/pen.png";
import notebook from "./assets/notebook.png";

export const products = [
  {
    id: 1,
    title: "Пляшка",
    price: 100,
    img: bottle,
  },
  { id: 2, title: "Ручка", price: 50, img: pen },
  { id: 3, title: "Зошит", price: 30, img: notebook },
];
