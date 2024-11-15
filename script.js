const wishlistItems = [
  {
    name: "After-Eight Skjokolade",
    image: "https://subfare.neocities.org/gave1.png",
    price: "40 KR",
    description: "Prisen kan variere og du kan få den over alt.",
    link: "https://meny.no/varer/snacks-godteri/konfekt/after-eight-5000189363069"
  },
  {
    name: "One Million Parfyme",
    image: "https://subfare.neocities.org/gave2.png",
    price: "900 KR",
    description: "Dette er 100ML men ønsker meg også 50ML.",
    link: "https://www.prisjakt.no/product.php?p=418134"
  },
  {
    name: "Mentos Tyggis",
    image: "https://subfare.neocities.org/gave3.png",
    price: "23 KR",
    description: "Denne finner du bare på Normal.",
    link: "https://www.normal.no/kategorier/snacks-og-drikkevarer/"
  },
  {
    name: "Headset",
    image: "https://i.postimg.cc/bwKkt21j/LOOKIN-OLD.png",
    price: "9999999 KR",
    description: "skal fikse denne senere.",
    link: "https://example.com/book"
  },
  {
    name: "Track Sneakers",
    image: "https://subfare.neocities.org/gave4.png",
    price: "1000 KR",
    description: "Her må kanskje Amanda eller Ruben hjelpe deg/dere å kjøpe siden det er fra Tise 😂",
    link: "https://tise.com/t/kbcqnfKpn"
  },
  {
    name: "Weezer - Pinkerton (Vinyl)",
    image: "https://subfare.neocities.org/gave5.png",
    price: "449 KR",
    description: "Favoritt albumet mitt av favoritt bandet mitt.",
    link: "https://www.platekompaniet.no/musikk/vinyl/rock/weezer-pinkerton-uk-import-vinyl"
  },
  {
    name: "Weezer & Jeff Buckley Vinyler",
    image: "https://subfare.neocities.org/gave6.png",
    price: "550 KR",
    description: "Det er 2 for 550 KR på begge disse.",
    link: "https://www.platekompaniet.no/salg/vinyl-2-for-550?refinementList%5Bartists%5D%5B0%5D=Jeff%20Buckley&refinementList%5Bartists%5D%5B1%5D=Weezer&range%5Bactive_price%5D%5Bmin%5D=306"
  },
  {
    name: "Reworked Bukse",
    image: "https://subfare.neocities.org/gave7.png",
    price: "1200 KR",
    description: "Buksene er laget selv av han som selger det.",
    link: "https://tise.com/t/5PO39Yvx4"
  },
  {
    name: "Post Malone Tee",
    image: "https://subfare.neocities.org/gave8.png",
    price: "100 KR",
    description: "Baksiden er kul og liker at den er litt fadet",
    link: "https://tise.com/t/XOgxdoKB"
  },
  {
    name: "Zip Up Jeans",
    image: "https://subfare.neocities.org/gave9.png",
    price: "950 KR",
    description: "Dette er også bukser som er laget av selgeren.",
    link: "https://tise.com/t/6Pgzmga6V"
  },
  {
    name: "Nissan Skyline R34 GT-R",
    image: "https://subfare.neocities.org/gave10.png",
    price: "1.250000 KR",
    description: "Dette er verdt det",
    link: "https://www.finn.no/mobility/item/371565286"
  },
  {
    name: "Bokser 5-Pack",
    image: "https://subfare.neocities.org/gave11.png",
    price: "299 KR",
    description: "Størrelse M/L",
    link: "https://www2.hm.com/no_no/productpage.1070271001.html"
  },
  {
    name: "Blue Dragon Katana",
    image: "https://subfare.neocities.org/gave12.png",
    price: "530 KR",
    description: "Veldig kult sverd",
    link: "https://minikatana.com/products/blue-dragon-katana-metal-dull"
  },
  {
    name: "Adventure Book",
    image: "https://i.postimg.cc/bwKkt21j/LOOKIN-OLD.png",
    price: "20 KR",
    description: "An exciting book filled with adventures.",
    link: "https://example.com/book"
  },
  {
    name: "Adventure Book",
    image: "https://i.postimg.cc/bwKkt21j/LOOKIN-OLD.png",
    price: "20 KR",
    description: "An exciting book filled with adventures.",
    link: "https://example.com/book"
  },
  {
    name: "Adventure Book",
    image: "https://i.postimg.cc/bwKkt21j/LOOKIN-OLD.png",
    price: "20 KR",
    description: "An exciting book filled with adventures.",
    link: "https://example.com/book"
  },
  {
    name: "Adventure Book",
    image: "https://i.postimg.cc/bwKkt21j/LOOKIN-OLD.png",
    price: "20 KR",
    description: "An exciting book filled with adventures.",
    link: "https://example.com/book"
  },
];

function displayWishlist() {
  const wishlistContainer = document.getElementById('wishlist');
  wishlistContainer.innerHTML = '';

  wishlistItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('wishlist-item');

    itemDiv.innerHTML = `
      <div class="image-container">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <h3>${item.name}</h3>
      <p class="price">${item.price}</p>
      <p>${item.description}</p>
      <div class="button-container">
        <a href="${item.link}" target="_blank" class="buy-button">Kjøp Her</a>
      </div>
    `;

    wishlistContainer.appendChild(itemDiv);
  });
}

// Sort by price (low to high or high to low)
function sortWishlist(direction) {
  if (direction === 'low') {
    wishlistItems.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
  } else if (direction === 'high') {
    wishlistItems.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
  }

  displayWishlist(); // Re-render after sorting
}

// Add event listeners for sort buttons
document.getElementById('low-to-high').addEventListener('click', () => sortWishlist('low'));
document.getElementById('high-to-low').addEventListener('click', () => sortWishlist('high'));

// Initial display of wishlist
displayWishlist();
