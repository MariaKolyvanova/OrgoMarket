//Проверка страницы
const absUrl = window.location.href;
const nowUrl = absUrl.substring(absUrl.lastIndexOf("/") + 1);

let originalSrc = {};

// Функция для изменения изображения при наведении мыши
function changeSrc(image) {
  // Получаем текущий исходный код изображения
  let currentSrc = image.getAttribute("src");

  // Сохраняем оригинальный src, если он ещё не сохранён
  if (!originalSrc[image.id]) {
    originalSrc[image.id] = currentSrc;
  }

  // Добавляем или убираем суффикс "_a" к имени файла
  let newSrc;
  if (currentSrc === originalSrc[image.id]) {
    newSrc =
      currentSrc.substring(0, currentSrc.lastIndexOf(".")) +
      "_a" +
      currentSrc.substring(currentSrc.lastIndexOf("."));
  } else {
    newSrc = originalSrc[image.id];
  }

  // Устанавливаем новый src изображения
  image.setAttribute("src", newSrc);
}

// Инициализация карусели на главной странице
if (nowUrl == "index.html") {
  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".why_content");
    const prevBtn = document.querySelector(".right");
    const nextBtn = document.querySelector(".left");
    const pixelsToScroll = 350;

    // Прокрутка карусели назад
    prevBtn.addEventListener("click", function () {
      if (carousel.scrollLeft === 0) {
        carousel.scrollLeft = carousel.scrollWidth;
      } else {
        carousel.scrollLeft -= pixelsToScroll;
      }
    });

    // Прокрутка карусели вперёд
    nextBtn.addEventListener("click", function () {
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += pixelsToScroll;
      }
    });
  });
}

// Инициализация секции "Вопросы и ответы"
document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");
  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";
      this.classList.toggle("active");
    });
  });
});

// Инициализация каталога на странице catalog.html
if (nowUrl == "catalog.html") {
  document.addEventListener("DOMContentLoaded", function () {
    const catButtons = document.querySelectorAll(".cat");
    const subcategories = document.querySelectorAll(".subcategory");
    const catalogContainers = document.querySelectorAll("div.catalog");
    const productButtons = document.querySelectorAll(".product");

    catButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const catId = button.id.replace("cat", "");
        const selectedCatalog = document.querySelector(
          `#cards_catalog${catId}`
        );
        const selectedSubcategory = document.querySelector(
          `#subcategory${catId}`
        );

        catButtons.forEach(function (btn) {
          btn.classList.remove("active");
        });

        button.classList.add("active");

        catalogContainers.forEach(function (container) {
          container.style.display = "none";
        });

        selectedCatalog.style.display = "flex";

        subcategories.forEach(function (subcategory) {
          subcategory.style.display = "none";
        });

        selectedSubcategory.style.display = "block";

        productButtons.forEach(function (product) {
          product.classList.remove("active");
        });
      });
    });

    // Обработка нажатия на кнопки продуктов
    productButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const productId = button.id.replace("product", "");
        const selectedCatalog = document.querySelector(`#catalog${productId}`);

        if (button.classList.contains("active")) {
          button.classList.remove("active");
          selectedCatalog.style.display = "none";
          const catId = button.parentNode.id.replace("subcategory", "");
          const cardsCatalog = document.querySelector(`#cards_catalog${catId}`);
          cardsCatalog.style.display = "flex";
        } else {
          productButtons.forEach(function (btn) {
            btn.classList.remove("active");
          });

          button.classList.add("active");

          catalogContainers.forEach(function (container) {
            container.style.display = "none";
          });

          selectedCatalog.style.display = "flex";
        }
      });
    });
  });
}

// Функция для переключения отображения каталога
function toggleCatalog() {
  var catalog = document.getElementById("cards_catalog");
  if (catalog.style.display === "none") {
    catalog.style.display = "flex";
  } else {
    catalog.style.display = "none";
  }
}

// Инициализация корзины на странице basket.html
if (nowUrl == "basket.html") {
  renderBasket();
}

// Карточки товаров
const products = [
  {
    id: 1,
    category: 5,
    img: "images/product1.png",
    name: "Куриное филе, 1кг.",
    priceOld: "700",
    priceNew: "600 ₽",
  },
  {
    id: 2,
    category: 3,
    img: "images/product2.png",
    name: "Укроп, 50г.",
    priceOld: "110",
    priceNew: "98 ₽",
  },
  {
    id: 3,
    category: 6,
    img: "images/product3.png",
    name: "Масло сливочное 200г.",
    priceOld: "300",
    priceNew: "279 ₽",
  },
  {
    id: 4,
    category: 6,
    img: "images/product4.png",
    name: "Молоко 1л.",
    priceOld: "150",
    priceNew: "120 ₽",
  },
  {
    id: 5,
    category: 6,
    img: "images/product5.png",
    name: "Сыр 300г.",
    price: "500 ₽",
  },
  {
    id: 6,
    category: 6,
    img: "images/product6.png",
    name: "Творог 300г.",
    priceOld: "700",
    priceNew: "600 ₽",
  },
  {
    id: 7,
    category: 4,
    img: "images/product7.png",
    name: "Вырезка говяжья 500г.",
    price: "600 ₽",
  },
  {
    id: 8,
    category: 4,
    img: "images/product8.png",
    name: "Стейк 300г.",
    price: "480 ₽",
  },
  {
    id: 9,
    category: 1,
    img: "images/product9.png",
    name: "Баклажаны 500г.",
    price: "200 ₽",
  },
  {
    id: 10,
    category: 1,
    img: "images/product10.png",
    name: "Брокколи 300г.",
    price: "200 ₽",
  },
  {
    id: 11,
    category: 1,
    img: "images/product11.png",
    name: "Кабачки 500г.",
    price: "200 ₽",
  },
  {
    id: 12,
    category: 1,
    img: "images/product12.png",
    name: "Капуста белокачанная 1,5кг.",
    price: "103 ₽",
  },
  {
    id: 13,
    category: 1,
    img: "images/product13.png",
    name: "Капуста цветная, 500г.",
    price: "200 ₽",
  },
  {
    id: 14,
    category: 1,
    img: "images/product14.png",
    name: "Картофель, 1кг.",
    price: "96 ₽",
  },
  {
    id: 15,
    category: 1,
    img: "images/product15.png",
    name: "Лук репчатый, 300г.",
    price: "42 ₽",
  },
  {
    id: 16,
    category: 1,
    img: "images/product16.png",
    name: "Морковь, 300г.",
    price: "110 ₽",
  },
  {
    id: 17,
    category: 1,
    img: "images/product17.png",
    name: "Огурцы, 700г.",
    price: "600 ₽",
  },
  {
    id: 18,
    category: 1,
    img: "images/product18.png",
    name: "Перец болгарский, 300г.",
    price: "634 ₽",
  },
  {
    id: 19,
    category: 1,
    img: "images/product19.png",
    name: "Сельдерей, 300г.",
    priceOld: "240",
    priceNew: "210 ₽",
  },
  {
    id: 20,
    category: 2,
    img: "images/product20.png",
    name: "Авокадо 300г.",
    price: "387 ₽",
  },
  {
    id: 21,
    category: 2,
    img: "images/product21.png",
    name: "Апельсины, 1кг.",
    price: "176 ₽",
  },
  {
    id: 22,
    category: 2,
    img: "images/product22.png",
    name: "Бананы, 1кг.",
    price: "254 ₽",
  },
  {
    id: 23,
    category: 2,
    img: "images/product23.png",
    name: "Груши, 500г.",
    price: "537 ₽",
  },
  {
    id: 24,
    category: 2,
    img: "images/product24.png",
    name: "Лимоны 300г.",
    price: "363 ₽",
  },
  {
    id: 25,
    category: 2,
    img: "images/product25.png",
    name: "Персики, 500г.",
    price: "362 ₽",
  },
  {
    id: 26,
    category: 2,
    img: "images/product26.png",
    name: "Яблоки, 1кг.",
    priceOld: "298",
    priceNew: "267 ₽",
  },
  {
    id: 27,
    category: 8,
    img: "images/product27.png",
    name: "Спагетти 400г.",
    priceOld: "193",
    priceNew: "170 ₽",
  },
  {
    id: 28,
    category: 2,
    img: "images/product28.png",
    name: "Оливки 300г.",
    price: "534 ₽",
  },
  {
    id: 29,
    category: 1,
    img: "images/product29.png",
    name: "Чеснок 200г.",
    price: "304 ₽",
  },
  {
    id: 30,
    category: 8,
    img: "images/product30.png",
    name: "Томатная паста 500г.",
    price: "430 ₽",
  },
  {
    id: 31,
    category: 8,
    img: "images/product31.png",
    name: "Каперсы 200г.",
    price: "426 ₽",
  },
  {
    id: 32,
    category: 6,
    img: "images/product32.png",
    name: "Пармезан 200г.",
    price: "378 ₽",
  },
  {
    id: 33,
    category: 1,
    img: "images/product33.png",
    name: "Перец чили 50г.",
    price: "219 ₽",
  },
  {
    id: 34,
    category: 3,
    img: "images/product34.png",
    name: "Петрушка 50г.",
    price: "73 ₽",
  },
  {
    id: 35,
    category: 8,
    img: "images/product35.png",
    name: "Оливковое масло 500мл.",
    price: "1142 ₽",
  },
  {
    id: 36,
    category: 4,
    img: "images/product36.png",
    name: "Лопатка говяжья 500г.",
    price: "538 ₽",
  },
  {
    id: 37,
    category: 4,
    img: "images/product37.png",
    name: "Окорок молодого барашка 400г.",
    price: "703 ₽",
  },
  {
    id: 38,
    category: 4,
    img: "images/product38.png",
    name: "Тушка кролика 1кг.",
    price: "852 ₽",
  },
  {
    id: 39,
    category: 4,
    img: "images/product39.png",
    name: "Эскалоп свиной 400г.",
    price: "364 ₽",
  },
  {
    id: 40,
    category: 4,
    img: "images/product40.png",
    name: "Фарш говяжий 400г.",
    price: "530 ₽",
  },
  {
    id: 41,
    category: 5,
    img: "images/product41.png",
    name: "Тушка цыплёнка 1кг.",
    price: "267 ₽",
  },
  {
    id: 42,
    category: 5,
    img: "images/product42.png",
    name: "Крылья куриные 1кг.",
    price: "284 ₽",
  },
  {
    id: 43,
    category: 5,
    img: "images/product43.png",
    name: "Голень куриная 1кг.",
    price: "348 ₽",
  },
  {
    id: 44,
    category: 5,
    img: "images/product44.png",
    name: "Филе берда цыплёнка-бройлера 1кг.",
    price: "598 ₽",
  },
  {
    id: 45,
    category: 5,
    img: "images/product45.png",
    name: "Филе грудки индейки 1кг.",
    price: "743 ₽",
  },
  {
    id: 46,
    category: 5,
    img: "images/product46.png",
    name: "Тушка перепелов 1кг.",
    price: "612 ₽",
  },
  {
    id: 47,
    category: 3,
    img: "images/product47.png",
    name: "Мята 40г.",
    price: "110 ₽",
  },
  {
    id: 48,
    category: 3,
    img: "images/product48.png",
    name: "Кинза 100г.",
    price: "176 ₽",
  },
  {
    id: 49,
    category: 3,
    img: "images/product49.png",
    name: "Базилик 100г.",
    price: "245 ₽",
  },
  {
    id: 50,
    category: 3,
    img: "images/product50.png",
    name: "Шпинат 150г.",
    price: "230 ₽",
  },
  {
    id: 51,
    category: 3,
    img: "images/product51.png",
    name: "Лук зелёный 100г",
    price: "140р ₽",
  },
  {
    id: 52,
    category: 7,
    img: "images/product52.png",
    name: "Яйцо куриное СО 10шт.",
    price: "153 ₽",
  },

  {
    id: 53,
    category: 7,
    img: "images/product52.png",
    name: "Яйцо куриное С1 10шт.",
    price: "125 ₽",
  },
  {
    id: 54,
    category: 7,
    img: "images/product52.png",
    name: "Яйцо куриное С2 10шт.",
    price: "109 ₽",
  },
  {
    id: 55,
    category: 7,
    img: "images/product55.png",
    name: "Яйцо перепелиное 20шт.",
    price: "201 ₽",
  },
];

// Функция для создания карточки продукта на product.html и других страницах.
function createCard(product) {
  if (nowUrl.startsWith("product.html")) {
    return `
    <div class="information_contentc item" data-id="${product.id}">
      <div class="information_img">
        <img src="${product.img}" alt="${
      product.name
    }" class="information_img card">
        <a href="about.html#cert">
          <img src="images/why1.svg" alt="" class="information_cert" id="cert" onmouseover="changeSrc(this)" onmouseout="changeSrc(this)" title="Товар сертифицирован">
        </a>
      </div>
      <div class="information">
        <p class="information_h card">${product.name}</p>
        <p class="information"><b>Изготовитель:</b> ООО "Агро-Экология" (г. Москва)</p>
        <table class="information">
          <tr class="information">
            <td><b>Ккал</b> <br> 47</td>
            <td><b>Б</b> <br> 0,4 г.</td>
            <td><b>Ж</b> <br> 0,4 г.</td>
            <td><b>У</b> <br> 9,8 г.</td>
          </tr>
        </table>
        <p class="information">Хранить при температуре от +2 до +8 C.</p>
        <p class="information">Срок хранения 30 суток.</p>
                <div class="price_product">
            ${
              product.priceOld
                ? `<p class="price_old">${product.priceOld}</p>`
                : ""
            }
            ${
              product.priceNew
                ? `<p class="price_new"><span class="price">${product.priceNew}</span></p>`
                : ""
            }
            ${
              product.price ? `<span class="price">${product.price}</span>` : ""
            }
        </div>
        <div id="product_rel">
            <div class="information_quantity" id="quant_product">
                <p class="minus">–</p>
                <p class="quantity" id="quantity">1</p>
                <p class="plus" id="plus">+</p>
            </div>
            <div class="information_basket product">
              <img src="images/basket.svg" class="product_buy buy" onmouseover="changeSrc(this)" id="toBuy" onmouseout="changeSrc(this)" data-id="${
                product.id
              }"> Добавить в корзину
            </div>
        </div
    </div>`;
  }
  return `<div class="card item" data-id="${product.id}">
        <a href="product.html?id=${product.id}">
            <div class="card_img">
                <img src="${product.img}" alt="${product.name}" class="card" />
            </div>
        </a>
        <p class="card">${product.name}</p>
        <div class="price">
            ${
              product.priceOld
                ? `<p class="price_old">${product.priceOld}</p>`
                : ""
            }
            ${
              product.priceNew
                ? `<p class="price_new"><span class="price">${product.priceNew}</span></p>`
                : ""
            }
            ${
              product.price ? `<span class="price">${product.price}</span>` : ""
            }
        </div>
        <div class="information_quantity">
            <p class="minus">–</p>
            <p class="quantity" id="quantity">1</p>
            <p class="plus" id="plus">+</p>
        </div>
        <div class="information_basket">
            <img src="images/basket.svg" class="buy" onmouseover="changeSrc(this)" id="toBuy" onmouseout="changeSrc(this)" data-id="${
              product.id
            }">
        </div>
    </div>`;
}

// Функция для отрисовки карточек продуктов
function renderCards(page, products, start = 0, end = products.length) {
  const container = document.getElementById(page);
  container.innerHTML = "";
  for (let i = start; i < end; i++) {
    container.innerHTML += createCard(products[i]);
  }
}

// Функция для отрисовки карточки одного продукта
function renderCard(id) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";
  container.innerHTML += createCard(products[id]);
}

// Отрисовка карточки продукта на странице product.html
if (nowUrl.startsWith("product.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));
  renderCard(productId - 1);
}

// Фунция ддля отрисовка карточкек указанной категории
function rendercategory(page, n, m, p) {
  const container = document.getElementById(page);
  container.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    if (
      products[i].category == n ||
      products[i].category == m ||
      products[i].category == p
    ) {
      container.innerHTML += createCard(products[i]);
    }
  }
}

// Отрисовка карточек
if (nowUrl === "catalog.html") {
  rendercategory("cards_catalog1", 1, 2, 3);
  rendercategory("cards_catalog2", 4, 5);
  rendercategory("cards_catalog3", 6, 7);
  rendercategory("cards_catalog4", 8);
  renderCards("cards_catalog0", products);
  rendercategory("catalog1", 1);
  rendercategory("catalog2", 2);
  rendercategory("catalog3", 3);
  rendercategory("catalog4", 4);
  rendercategory("catalog5", 5);
  rendercategory("catalog6", 6);
  rendercategory("catalog7", 7);
  rendercategory("catalog8", 8);
  renderCards("catalog9", products, 0, 4);
  renderCards("catalog10", products, 4, 8);
  renderCards("catalog11", products, 8, 12);
} else if (nowUrl === "index.html") {
  renderCards("stocks", products, 0, 4);
  renderCards("new", products, 4, 8);
  renderCards("popular", products, 8, 12);
} else if (nowUrl === "recipe.html") {
  renderCards("catalog", products, 26, 35);
}

// Функции для работы с корзиной
function getBasket() {
  return JSON.parse(localStorage.getItem("basket")) || [];
}

// Функции для сохранения корзины
function saveBasket(basket) {
  localStorage.setItem("basket", JSON.stringify(basket));
}

// Функция для добавления товара в корзину
function addToBasket(product) {
  let basket = getBasket();
  const existingProductIndex = basket.findIndex((p) => p.id === product.id);

  if (existingProductIndex !== -1) {
    basket[existingProductIndex].quantity += product.quantity;
  } else {
    basket.push(product);
  }

  saveBasket(basket);
}

// Функция для обновления корзины
function updateBasketQuantity(productId, quantity) {
  let basket = getBasket();
  const product = basket.find((p) => p.id === productId);

  if (product) {
    product.quantity = quantity;
  }

  saveBasket(basket);
}

// Функция для удаления товара из корзины
function removeFromBasket(productId) {
  let basket = getBasket();
  basket = basket.filter((p) => p.id !== productId);
  saveBasket(basket);
  renderBasket();
}

// Обработчик события, который выполняется после загрузки всей страницы для обработки карточек
document.addEventListener("DOMContentLoaded", function () {
  if (
    ["catalog.html", "basket.html", "index.html", "recipe.html"].includes(
      nowUrl
    ) ||
    nowUrl.startsWith("product.html")
  ) {
    const items = document.querySelectorAll("div.item");
    items.forEach((item) => {
      const priceElem = item.querySelector("span.price");
      const unitPrice = parseInt(priceElem.textContent.replace(" ₽", ""));
      const quantityElem = item.querySelector("p.quantity");
      const informationQuantity = item.querySelector(
        "div.information_quantity"
      );
      const informationBasket = item.querySelector("div.information_basket");

      const productId = item.getAttribute("data-id");
      const basket = getBasket();
      const productInBasket = basket.find((p) => p.id === productId);
      if (nowUrl !== "basket.html") {
        if (productInBasket) {
          quantityElem.textContent = productInBasket.quantity;
          informationQuantity.style.display = "inline-flex";
          informationBasket.style.display = "none";
          updatePrice(productInBasket.quantity);
        }

        informationBasket.addEventListener("click", function () {
          const productName = item.querySelector("p.card").textContent;
          const productImg = item.querySelector("img.card").src;

          const product = {
            id: productId,
            img: productImg,
            name: productName,
            price: unitPrice,
            quantity: parseInt(quantityElem.textContent),
          };

          addToBasket(product);
          informationBasket.style.display = "none";
          informationQuantity.style.display = "inline-flex";
        });
      }
      // Обработчик событий для кнопок добавления в корзину
      item.querySelector(".plus").addEventListener("click", function () {
        let quantity = parseInt(quantityElem.textContent);
        quantity += 1;
        quantityElem.textContent = quantity;
        updatePrice(quantity);
        updateBasketQuantity(item.getAttribute("data-id"), quantity);
      });

      // Обработчик событий для кнопок изменения количества
      item.querySelector(".minus").addEventListener("click", function () {
        let quantity = parseInt(quantityElem.textContent);
        if (quantity > 1) {
          quantity -= 1;
          quantityElem.textContent = quantity;
          updatePrice(quantity);
          updateBasketQuantity(item.getAttribute("data-id"), quantity);
        } else if (nowUrl !== "basket.html") {
          informationQuantity.style.display = "none";
          informationBasket.style.display = "inline-flex";
          quantityElem.textContent = 1;
          updatePrice(1);
          removeFromBasket(item.getAttribute("data-id"));
        }
      });

      // Функция для обновления цены
      function updatePrice(quantity) {
        priceElem.textContent = unitPrice * quantity + " ₽";
        if (nowUrl === "basket.html") {
          renderBasket();
        }
      }
    });
  }
});

// Функция для отрисовки корзины
function renderBasket() {
  if (nowUrl === "basket.html") {
    const basket = getBasket();
    const container = document.getElementById("basket_items");
    container.innerHTML = "";
    checkBasketStatus();
    basket.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product", "item");
      productCard.dataset.id = product.id;

      productCard.innerHTML = `
       <a href="product.html?id=${product.id}">
      <div class="product_img">
      <img src="${product.img}" alt="" class="product">
      </div>
      </a>
      <p class="product">${product.name}</p>
      <p class="product_price"><span class="price">${
        product.price * product.quantity
      } ₽</span></p>
      <img src="images/cross.svg" alt="" class="cross" id="cross" onmouseover="changeSrc(this)" onmouseout="changeSrc(this)" onclick="removeFromBasket('${
        product.id
      }')">
      <div class="basket_quantity information_quantity">
        <p class="minus" onclick="decrementQuantity('${product.id}')">–</p>
        <p class="quantity">${product.quantity}</p>
               <p class="plus" onclick="incrementQuantity('${
                 product.id
               }')">+</p>
      </div>
    `;

      container.appendChild(productCard);
    });
    updateTotalPrice();
  }
}

// Функция для обновления общей суммы, доставки и суммы к оплате
function updateTotalPrice() {
  let totalSum = 0;
  const basket = getBasket();
  let delivery = 300;

  basket.forEach((product) => {
    totalSum += product.price * product.quantity;
  });

  document.querySelector("#total_sum").textContent = totalSum + " ₽";

  if (totalSum > 3000) {
    delivery = 0;
  }

  let total = totalSum + delivery;
  document.querySelector("#total").textContent = total + " ₽";
  document.getElementById("delivery").textContent = delivery + " ₽";
}

// Функция для увеличения количества товаров в корзине
function incrementQuantity(productId) {
  let basket = getBasket();
  const product = basket.find((p) => p.id === productId);

  if (product) {
    product.quantity += 1;
  }

  saveBasket(basket);
  renderBasket();
}

// Функция для уменьшения количества товаров в корзине
function decrementQuantity(productId) {
  let basket = getBasket();
  const product = basket.find((p) => p.id === productId);

  if (product && product.quantity > 1) {
    product.quantity -= 1;
  } else if (product && product.quantity === 1) {
    basket = basket.filter((p) => p.id !== productId);
  }

  saveBasket(basket);
  renderBasket();
}

if (nowUrl === "basket.html") {
  renderBasket();
}

// Очистка корзины
if (nowUrl == "basket.html") {
  document.addEventListener("DOMContentLoaded", function () {
    const clearBasketButton = document.getElementById("clearBasket");

    clearBasketButton.addEventListener("click", function () {
      clearBasket();
    });
  });
}

// Функция для своевременного отображения кнопки очистки корзины
function checkBasketStatus() {
  if (getBasket().length === 0) {
    document.getElementById("clearBasket").style.display = "none";
    document.querySelector("p.buy").style.display = "none";
  }
}

// Функция для очистки корзины
function clearBasket() {
  localStorage.removeItem("basket");
  renderBasket();
}

if (nowUrl == "recipe.html") {
  let buyAll = document.getElementById("buyAll");
  let elements = document.querySelectorAll('[id="toBuy"]');
  let basket = getBasket();
  let allInBasket = true;

  elements.forEach(function (element) {
    let productId = element.getAttribute("data-id");
    if (!basket.some((item) => item.id === productId)) {
      allInBasket = false;
      return;
    }
  });

  if (allInBasket) {
    buyAll.classList.toggle("active");
  } else {
    buyAll.addEventListener("click", function () {
      elements.forEach(function (element) {
        element.click();
      });
      buyAll.classList.toggle("active");
    });
  }
}

// Функции для перехода на выбранную категорию товаров
function cat1() {
  localStorage.setItem("clickButtonId", "cat1");
}
function cat2() {
  localStorage.setItem("clickButtonId", "cat2");
}
function cat3() {
  localStorage.setItem("clickButtonId", "cat3");
}
function cat4() {
  localStorage.setItem("clickButtonId", "cat4");
}

function product9() {
  localStorage.setItem("clickButtonId", "product9");
}
function product10() {
  localStorage.setItem("clickButtonId", "product10");
}
function product11() {
  localStorage.setItem("clickButtonId", "product11");
}
window.onload = function () {
  let buttonToClick = localStorage.getItem("clickButtonId");
  if (buttonToClick) {
    let cat = document.getElementById(buttonToClick);
    if (cat) {
      cat.click();
    }
    localStorage.removeItem("clickButtonId");
  }
};
