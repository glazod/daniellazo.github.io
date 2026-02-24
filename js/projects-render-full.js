const container = document.getElementById("allProjectsContainer");
const sortSelect = document.getElementById("sortSelect");
const tagBar = document.getElementById("tagFilters");

let activeTag = "All";

// Extract unique tags
const allTags = [
  "All",
  ...new Set(projects.flatMap(project => project.tags))
];

// Render tag buttons
allTags.forEach(tag => {
  const btn = document.createElement("button");
  btn.textContent = tag;
  btn.classList.add("tag-btn");

  if (tag === "All") {
    btn.classList.add("active");
  }

  btn.addEventListener("click", () => {
    document.querySelectorAll(".tag-btn").forEach(button =>
      button.classList.remove("active")
    );

    btn.classList.add("active");
    activeTag = tag;
    renderProjects();
  });

  tagBar.appendChild(btn);
});

function renderProjects() {
  let filtered = [...projects];

  if (activeTag !== "All") {
    filtered = filtered.filter(project =>
      project.tags.includes(activeTag)
    );
  }

  const sortCriteria = sortSelect.value;

  if (sortCriteria === "newest") {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  if (sortCriteria === "oldest") {
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  if (sortCriteria === "category") {
    filtered.sort((a, b) => a.category.localeCompare(b.category));
  }

  container.innerHTML = "";

  filtered.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.style.backgroundImage = `url(${project.image})`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";

    card.innerHTML = `
      <a href="${project.file}" class="card-link"></a>
      <div class="project-info">
        <div class="project-bio">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <small>${project.category}</small>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

renderProjects();
sortSelect.addEventListener("change", renderProjects);