const homeProjectsContainer = document.getElementById("projectsContainer");

if (homeProjectsContainer) {

  const newestSix = projects
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  newestSix.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <a href="${project.file}" target="_blank" class="card-link"></a>
      <div class="project-info">
        <div class="project-bio">
          <h3>${project.title}</h3>
          <p>${project.tools.join(", ")}</p>
        </div>
      </div>
    `;

    homeProjectsContainer.appendChild(card);
  });
}