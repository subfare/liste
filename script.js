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
