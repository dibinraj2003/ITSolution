const btn_1 = document.querySelectorAll(".toggle-btn");
const monthlyPlans = document.getElementById("monthly-plans");
const yearlyPlans = document.getElementById("yearly-plans");
let navBarOpen = document.querySelector(".fa-bars");
let navBarClose = document.querySelector(".fa-xmark");
let navList = document.getElementsByTagName("nav")[0];

navBarOpen.addEventListener("click", () => {
  navList.classList.add("active");
});
navBarClose.addEventListener("click", () => {
  navList.classList.remove("active");
});

function setActive(id) {
  btn_1.forEach((btn) => {
    btn.classList.remove("active");
    document.getElementById(id).classList.add("active");
  });
}

function showPlans(cycle) {
  if (cycle === "yearly") {
    yearlyPlans.style.display = "flex";
    monthlyPlans.style.display = "none";
  } else {
    monthlyPlans.style.display = "flex";
    yearlyPlans.style.display = "none";
  }
}

btn_1.forEach((btn) => {
  btn.addEventListener("click", function () {
    setActive(btn.id);
    showPlans(btn.id);
  });
});

// All reviews stored in a simple list

var reviews = [
  {
    name: "Aarav Mehta",
    avatar: "AM",
    rating: "★★★★★",
    text: "Their team stabilized our network, moved critical files to the cloud, and gave us clear support whenever something came up. We spend less time fixing IT and more time serving clients.",
    date: "2026-04-18",
  },
  {
    name: "Priya Nair",
    avatar: "PN",
    rating: "★★★★★",
    text: "We needed better cybersecurity without slowing down the team. IT Solutions gave us practical protection, faster response, and simple guidance everyone could follow.",
    date: "2026-04-10",
  },
  {
    name: "Rohan Shah",
    avatar: "RS",
    rating: "★★★★★",
    text: "The Professional plan gave our growing office exactly what we needed: monitoring, backups, and quick support. Issues are handled before they become business problems.",
    date: "2026-03-28",
  },
  {
    name: "Neha Kapoor",
    avatar: "NK",
    rating: "★★★★★",
    text: "They helped us choose the right cloud setup and cleaned up years of messy systems. Our team can now access work securely from anywhere.",
    date: "2026-03-12",
  },
  {
    name: "Meera Iyer",
    avatar: "MI",
    rating: "★★★★★",
    text: "The consulting session turned our technology wish list into a clear roadmap. We knew what to fix first, what to automate, and where to invest next.",
    date: "2026-02-24",
  },
  {
    name: "Karan Verma",
    avatar: "KV",
    rating: "★★★★☆",
    text: "Premium support gave us a dedicated partner for security, recovery planning, and day-to-day IT decisions. It feels like having an internal IT department.",
    date: "2026-02-08",
  },
];

function createCard(review) {
  return `<div class="card">
  <div class="card-header">
  <div class="avatar">${review.avatar}</div>
  <div class="card-meta">
  <div class="reviewer-name">${review.name}</div>
  <div class="stars">${review.rating}</div>
  </div>
  </div>
  <p class="review-text">${review.text}</p>
  <div class="review-date">${review.date}</div>
  </div>`;
}
let allCards = "";
for (var i = 0; i < reviews.length; i++) {
  allCards += createCard(reviews[i]);
}
let mob = allCards;

for (var i = 0; i < reviews.length; i++) {
  allCards += createCard(reviews[i]);
}

document.getElementById("scrollTrack").innerHTML = allCards;
document.getElementById("mob-review").innerHTML = mob;

var brandlogo = [
  {
    img: "image/695fd03d1652ba2206ce3c20_loop-logo-02.svg",
  },
  {
    img: "image/695fd03d1e0dd8318117594c_loop-logo-01.svg",
  },
  {
    img: "image/695fd03d6e14cd0db27a835f_loop-logo-04.svg",
  },
  {
    img: "image/695fd03d93907f736cf56306_loop-logo-05.svg",
  },
  {
    img: "image/695fd03d9bbdc14a507ae47d_loop-logo-06.svg",
  },
];
function createImg(brand) {
  return `<div class="brand-logo">
  <img src="${brand.img}" alt="Company logo">
  </div>`;
}
var logoSet = "";
for (var i = 0; i < brandlogo.length; i++) {
  logoSet += createImg(brandlogo[i]);
}

document.getElementById("brand").innerHTML = logoSet + logoSet;
