const rpaPosts = [
  {
    title: "Automation for the Business User",
    file: "rpa-content/rpa-post-1.html",
    image: "../assets/images/post1.jpg"
  },
  {
    title: "Extracting Power BI Data",
    file: "rpa-content/rpa-post-2.html",
    image: "../assets/images/post2.jpg"
  }
];

const tilesContainer = document.getElementById("rpa-tiles");

rpaPosts.forEach(post => {
  const tile = document.createElement("a");
  tile.href = post.file;
  tile.className = "tile";
  tile.innerHTML = `
    <img src="${post.image}" alt="${post.title}" class="tile-image">
    <h3>${post.title}</h3>
  `;
  tilesContainer.appendChild(tile);
});

function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("show");
}
