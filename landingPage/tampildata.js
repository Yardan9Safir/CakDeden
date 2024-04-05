document.addEventListener("DOMContentLoaded", function() {
  // Data JSON yang diberikan
  var data = {
      "variant": [{
              "id": 1,
              "img": "assets/img/menu/terasi.png",
              "name": "Sambel Terasi",
              "price": 20000
          },
          {
              "id": 2,
              "img": "assets/img/menu/jengkol.png",
              "name": "Sambel Jengkol",
              "price": 20000
          },
          {
              "id": 3,
              "img": "assets/img/menu/Aym-suwir.png",
              "name": "Sambel Ayam Suwir",
              "price": 20000
          },
          {
              "id": 4,
              "img": "assets/img/menu/Tomat.png",
              "name": "Sambel Tomat",
              "price": 20000
          },
          {
              "id": 5,
              "img": "assets/img/menu/Teri.png",
              "name": "Sambel Teri",
              "price": 20000
          },
          {
              "id": 6,
              "img": "assets/img/menu/Pete.png",
              "name": "Sambel Pete",
              "price": 20000
          },
          {
              "id": 7,
              "img": "assets/img/menu/ikan-tongkol.png",
              "name": "Sambel Ikan Tongkol",
              "price": 20000
          },
          {
              "id": 8,
              "img": "assets/img/menu/Cumi.png",
              "name": "Sambel Cumi-cumi",
              "price": 20000
          }
      ]
  };

  // Ambil elemen div dengan kelas 'row' di dalam dokumen
  var menuContainer = document.querySelector(".row.gy-5");

  // Loop melalui setiap item dalam data dan buat elemen HTML sesuai dengan item
  data.variant.forEach(function(item) {
      // Buat elemen div untuk setiap item
      var menuItemDiv = document.createElement("div");
      menuItemDiv.classList.add("col-lg-4", "menu-item");

      // Buat elemen gambar
      var img = document.createElement("img");
      img.src = item.img;
      img.classList.add("menu-img", "img-fluid");
      img.alt = item.name;

      // Buat elemen h4 untuk nama
      var h4 = document.createElement("h4");
      h4.textContent = item.name;

      // Buat elemen paragraf untuk harga
      var priceParagraph = document.createElement("p");
      priceParagraph.classList.add("price");
      priceParagraph.textContent = "Rp " + item.price;

      // Tambahkan elemen-elemen ke dalam div menu-item
      menuItemDiv.appendChild(img);
      menuItemDiv.appendChild(h4);
      menuItemDiv.appendChild(priceParagraph);

      // Tambahkan div menu-item ke dalam container menu
      menuContainer.appendChild(menuItemDiv);
  });
});
