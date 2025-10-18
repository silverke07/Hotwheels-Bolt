// === Hot Wheels 2025 Collector Shop Script ===

// Array of 100 cars
const cars = [
  // Chevrolet (10 cars)
  { name: "2025 Chevrolet Camaro SS", brand: "Chevrolet", price: 2790, img: "https://i.imgur.com/lYfKfO9.png" },
  { name: "2025 Chevrolet Corvette Z06", brand: "Chevrolet", price: 2990, img: "https://i.imgur.com/lbJ1yug.png" },
  { name: "2025 Chevrolet Impala Retro", brand: "Chevrolet", price: 2490, img: "https://i.imgur.com/ZFmsQ1K.png" },
  { name: "2025 Chevrolet Bel Air Classic", brand: "Chevrolet", price: 2890, img: "https://i.imgur.com/4lOiOqY.png" },
  { name: "2025 Chevrolet Nova SS", brand: "Chevrolet", price: 2590, img: "https://i.imgur.com/HbRZL1l.png" },
  { name: "2025 Chevrolet Camaro ZL1", brand: "Chevrolet", price: 3190, img: "https://i.imgur.com/Y5SLD4Q.png" },
  { name: "2025 Chevrolet C10 Pickup", brand: "Chevrolet", price: 2690, img: "https://i.imgur.com/6k6nWZb.png" },
  { name: "2025 Chevrolet Chevelle SS", brand: "Chevrolet", price: 2890, img: "https://i.imgur.com/WC42I3X.png" },
  { name: "2025 Chevrolet Trailblazer RS", brand: "Chevrolet", price: 2590, img: "https://i.imgur.com/0gthUwl.png" },
  { name: "2025 Chevrolet Corvette Stingray", brand: "Chevrolet", price: 3290, img: "https://i.imgur.com/3Vayw1Y.png" },

  // Ford (10 cars)
  { name: "2025 Ford Mustang GT", brand: "Ford", price: 2790, img: "https://i.imgur.com/64a7OLu.png" },
  { name: "2025 Ford F-150 Raptor", brand: "Ford", price: 2690, img: "https://i.imgur.com/kfCVpQm.png" },
  { name: "2025 Ford GT Supercar", brand: "Ford", price: 2990, img: "https://i.imgur.com/X4v3Nwn.png" },
  { name: "2025 Ford Escort RS2000", brand: "Ford", price: 2490, img: "https://i.imgur.com/SeP3G44.png" },
  { name: "2025 Ford Bronco Heritage", brand: "Ford", price: 2690, img: "https://i.imgur.com/JnUeGxO.png" },
  { name: "2025 Ford Torino GT", brand: "Ford", price: 2590, img: "https://i.imgur.com/3u0o3xV.png" },
  { name: "2025 Ford Maverick Pickup", brand: "Ford", price: 2490, img: "https://i.imgur.com/d70QJ6H.png" },
  { name: "2025 Ford Thunderbird Retro", brand: "Ford", price: 2890, img: "https://i.imgur.com/nVxDLrC.png" },
  { name: "2025 Ford Fiesta ST", brand: "Ford", price: 2390, img: "https://i.imgur.com/0q2YZB6.png" },
  { name: "2025 Ford Explorer ST", brand: "Ford", price: 2690, img: "https://i.imgur.com/3A5j3OB.png" },

  // Nissan (10 cars)
  { name: "2025 Nissan Skyline GT-R R34", brand: "Nissan", price: 3090, img: "https://i.imgur.com/cpOkKSo.png" },
  { name: "2025 Nissan Silvia S15", brand: "Nissan", price: 2890, img: "https://i.imgur.com/mCH0z9x.png" },
  { name: "2025 Nissan 370Z Nismo", brand: "Nissan", price: 2790, img: "https://i.imgur.com/MhXq2lC.png" },
  { name: "2025 Nissan GT-R R35", brand: "Nissan", price: 3290, img: "https://i.imgur.com/N6k0R9H.png" },
  { name: "2025 Nissan Patrol Supercharged", brand: "Nissan", price: 2690, img: "https://i.imgur.com/EjczZLk.png" },
  { name: "2025 Nissan Fairlady Z", brand: "Nissan", price: 2590, img: "https://i.imgur.com/eq56SmZ.png" },
  { name: "2025 Nissan Juke Nismo RS", brand: "Nissan", price: 2490, img: "https://i.imgur.com/jCV3sAq.png" },
  { name: "2025 Nissan 300ZX Twin Turbo", brand: "Nissan", price: 2990, img: "https://i.imgur.com/TJ3mgdx.png" },
  { name: "2025 Nissan Leaf Nismo", brand: "Nissan", price: 2390, img: "https://i.imgur.com/LXQhQq1.png" },
  { name: "2025 Nissan Patrol Safari", brand: "Nissan", price: 2890, img: "https://i.imgur.com/O0kZhQh.png" },

  // Lamborghini (10 cars)
  { name: "2025 Lamborghini Aventador SVJ", brand: "Lamborghini", price: 3590, img: "https://i.imgur.com/FUygw7O.png" },
  { name: "2025 Lamborghini Huracán EVO", brand: "Lamborghini", price: 3490, img: "https://i.imgur.com/0JcMcnx.png" },
  { name: "2025 Lamborghini Urus", brand: "Lamborghini", price: 3290, img: "https://i.imgur.com/yFsMFyb.png" },
  { name: "2025 Lamborghini Sián FKP 37", brand: "Lamborghini", price: 3990, img: "https://i.imgur.com/pxjDXYO.png" },
  { name: "2025 Lamborghini Countach LPI 800-4", brand: "Lamborghini", price: 3890, img: "https://i.imgur.com/c0L9Q8Y.png" },
  { name: "2025 Lamborghini Gallardo LP570", brand: "Lamborghini", price: 3390, img: "https://i.imgur.com/1CmfI3h.png" },
  { name: "2025 Lamborghini Veneno", brand: "Lamborghini", price: 4190, img: "https://i.imgur.com/3Tk4W9D.png" },
  { name: "2025 Lamborghini Reventón", brand: "Lamborghini", price: 3990, img: "https://i.imgur.com/BrP0w1Q.png" },
  { name: "2025 Lamborghini Diablo SV", brand: "Lamborghini", price: 3890, img: "https://i.imgur.com/LXGzC9k.png" },
  { name: "2025 Lamborghini Murciélago LP640", brand: "Lamborghini", price: 3790, img: "https://i.imgur.com/Jcd64Hq.png" },

  // Ferrari (10 cars)
  { name: "2025 Ferrari SF90 Stradale", brand: "Ferrari", price: 3890, img: "https://i.imgur.com/NOuGJFx.png" },
  { name: "2025 Ferrari F8 Tributo", brand: "Ferrari", price: 3690, img: "https://i.imgur.com/DAgW5cY.png" },
  { name: "2025 Ferrari 812 Superfast", brand: "Ferrari", price: 3790, img: "https://i.imgur.com/e4a1cU7.png" },
  { name: "2025 Ferrari Monza SP2", brand: "Ferrari", price: 3990, img: "https://i.imgur.com/HmWwVQ8.png" },
  { name: "2025 Ferrari Roma", brand: "Ferrari", price: 3590, img: "https://i.imgur.com/lXzdxrF.png" },
  { name: "2025 Ferrari Portofino M", brand: "Ferrari", price: 3490, img: "https://i.imgur.com/m4f3nFj.png" },
  { name: "2025 Ferrari LaFerrari", brand: "Ferrari", price: 4190, img: "https://i.imgur.com/oP2sQXa.png" },
  { name: "2025 Ferrari Enzo", brand: "Ferrari", price: 4090, img: "https://i.imgur.com/nMzfG1i.png" },
  { name: "2025 Ferrari California T", brand: "Ferrari", price: 3490, img: "https://i.imgur.com/qTgLljn.png" },
  { name: "2025 Ferrari Testarossa", brand: "Ferrari", price: 3390, img: "https://i.imgur.com/EYfpXGZ.png" },

  // McLaren (10 cars)
  { name: "2025 McLaren P1 GTR", brand: "McLaren", price: 3990, img: "https://i.imgur.com/yJ2tQj3.png" },
  { name: "2025 McLaren 720S", brand: "McLaren", price: 3790, img: "https://i.imgur.com/3QyLQpX.png" },
  { name: "2025 McLaren GT", brand: "McLaren", price: 3590, img: "https://i.imgur.com/E4XCRYf.png" },
  { name: "2025 McLaren 765LT", brand: "McLaren", price: 3890, img: "https://i.imgur.com/iwlfY98.png" },
  { name: "2025 McLaren Speedtail", brand: "McLaren", price: 4190, img: "https://i.imgur.com/XmZ37kX.png" },
  { name: "2025 McLaren Elva", brand: "McLaren", price: 3990, img: "https://i.imgur.com/dj0jP3Z.png" },
  { name: "2025 McLaren F1", brand: "McLaren", price: 4290, img: "https://i.imgur.com/ZkX3VJn.png" },
  { name: "2025 McLaren MP4-12C", brand: "McLaren", price: 3690, img: "https://i.imgur.com/vtK9xq1.png" },
  { name: "2025 McLaren 600LT", brand: "McLaren", price: 3590, img: "https://i.imgur.com/HX6kYcF.png" },
  { name: "2025 McLaren 570S", brand: "McLaren", price: 3490, img: "https://i.imgur.com/0Z1Eo6k.png" },

  // Porsche (10 cars)
  { name: "2025 Porsche 911 Turbo S", brand: "Porsche", price: 3690, img: "https://i.imgur.com/mzGVku7.png" },
  { name: "2025 Porsche 911 GT3 RS", brand: "Porsche", price: 3890, img: "https://i.imgur.com/B0CLb8i.png" },
  { name: "2025 Porsche 718 Cayman GT4", brand: "Porsche", price: 3590, img: "https://i.imgur.com/0j6vP4R.png" },
  { name: "2025 Porsche Taycan Turbo", brand: "Porsche", price: 3990, img: "https://i.imgur.com/KFgKg7c.png" },
  { name: "2025 Porsche 918 Spyder", brand: "Porsche", price: 4290, img: "https://i.imgur.com/ZBnhUHp.png" },
  { name: "2025 Porsche Macan Turbo", brand: "Porsche", price: 3390, img: "https://i.imgur.com/1LZ3RCH.png" },
  { name: "2025 Porsche Panamera GTS", brand: "Porsche", price: 3690, img: "https://i.imgur.com/qvK5NHh.png" },
  { name: "2025 Porsche 911 Carrera S", brand: "Porsche", price: 3590, img: "https://i.imgur.com/ZQF0lUY.png" },
  { name: "2025 Porsche 911 Targa 4S", brand: "Porsche", price: 3790, img: "https://i.imgur.com/UZg5k9u.png" },
  { name: "2025 Porsche 911 Speedster", brand: "Porsche", price: 3990, img: "https://i.imgur.com/6qgZ7Wh.png" },

  // Toyota (10 cars)
  { name: "2025 Toyota Supra GR", brand: "Toyota", price: 2890, img: "https://i.imgur.com/4TbSjUX.png" },
  { name: "2025 Toyota AE86 Trueno", brand: "Toyota", price: 2690, img: "https://i.imgur.com/0j9G6dQ.png" },
  { name: "2025 Toyota 2000GT", brand: "Toyota", price: 3190, img: "https://i.imgur.com/3vKq1T9.png" },
  { name: "2025 Toyota Celica GT-Four", brand: "Toyota", price: 2790, img: "https://i.imgur.com/xwLxHLf.png" },
  { name: "2025 Toyota Land Cruiser", brand: "Toyota", price: 2590, img: "https://i.imgur.com/ixs3hKg.png" },
  { name: "2025 Toyota MR2", brand: "Toyota", price: 2490, img: "https://i.imgur.com/6zZk1Io.png" },
  { name: "2025 Toyota Camry TRD", brand: "Toyota", price: 2390, img: "https://i.imgur.com/07jWk2M.png" },
  { name: "2025 Toyota Hilux GR Sport", brand: "Toyota", price: 2690, img: "https://i.imgur.com/lf5r2Y7.png" },
  { name: "2025 Toyota Prius Prime", brand: "Toyota", price: 2290, img: "https://i.imgur.com/yb28PZ2.png" },
  { name: "2025 Toyota Supra A90", brand: "Toyota", price: 2990, img: "https://i.imgur.com/YyhMBI4.png" },
];

// --- Pagination settings
let currentPage = 1;
const ITEMS_PER_PAGE = 15;

// --- Render the products
function renderCars() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageCars = cars.slice(start, end);

  pageCars.forEach(car => {
    const card = document.createElement("div");
    card.className = "car-card";
    card.innerHTML = `
      <img src="${car.img}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>Brand: ${car.brand}</p>
      <p>Price: ${car.price.toLocaleString("hu-HU")} HUF</p>
      <button onclick="addToCart('${car.name}')">Add to Cart</button>
    `;
    content.appendChild(card);
  });

  renderPagination();
}

// --- Render pagination
function renderPagination() {
  const content = document.getElementById("content");
  let pagination = document.createElement("div");
  pagination.className = "pagination";

  const totalPages = Math.ceil(cars.length / ITEMS_PER_PAGE);
  for (let i = 1; i <= totalPages; i++) {
    let pageBtn = document.createElement("button");
    pageBtn.innerText = i;
    if (i === currentPage) pageBtn.disabled = true;
    pageBtn.onclick = () => {
      currentPage = i;
      renderCars();
    };
    pagination.appendChild(pageBtn);
  }

  content.appendChild(pagination);
}

// --- Cart (placeholder)
function addToCart(carName) {
  alert(carName + " added to cart!");
}

// --- Initial render
renderCars();
