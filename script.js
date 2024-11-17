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
    name: "Khaki Sweater",
    image: "https://subfare.neocities.org/gave13.png",
    price: "233 KR",
    description: "Størrelse: L",
    link: "https://www.zalando.no/yourturn-unisex-topper-langermet-khaki-yo12101jf-n11.html"
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
    price: "1250000 KR",
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
    name: "PlayStation Plus - 1 Måned Abonnement",
    image: "https://subfare.neocities.org/gave14.png",
    price: "85 KR",
    description: "Dette lar meg spille diverse multiplayer spill, sånn som GTA Online!",
    link: "https://store.playstation.com/no-no/product/IP9102-PPSA06902_00-PLUS1T01M0000000?gad_source=1&gclid=CjwKCAiAxea5BhBeEiwAh4t5KxEkWcMdWAe4L_dwMnYWqsh_ztOEoHVvYrDCHA1sB4riAlS053KSURoCJQkQAvD_BwE&gclsrc=aw.ds"
  },
  {
    name: "PlayStation Plus - 12 Måneder Abonnement",
    image: "https://subfare.neocities.org/gave15.png",
    price: "680 KR",
    description: "Spar 340 KR i året!",
    link: "https://store.playstation.com/no-no/product/IP9102-PPSA06902_00-PLUS1T12M0000000?gad_source=1&gclid=CjwKCAiAxea5BhBeEiwAh4t5K7pNBzY0Z-VxFBmN3wyC3-zS_ZndevuqJK3qU0G4jqFBCSBBqB0dmhoCZ48QAvD_BwE&gclsrc=aw.ds"
  },
  {
    name: "Kommer Snart",
    image: "https://subfare.neocities.org/soon.png",
    price: "?",
    description: "Om jeg kommer på mer ting så blir det ligget til her!",
    link: "https://subfare.neocities.org/"
  },
  {
    name: "Kommer Snart",
    image: "https://subfare.neocities.org/soon.png",
    price: "?",
    description: "Om jeg kommer på mer ting så blir det ligget til her!",
    link: "https://subfare.neocities.org/"
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
