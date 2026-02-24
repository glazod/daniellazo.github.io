const homeProjectsContainer = document.getElementById("projectsContainer");

if (homeProjectsContainer) {

  const newestSix = [...projects]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  newestSix.forEach(project => {
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
          <div class="tool-row">
            ${project.tools.map(tool =>
              `<span class="tool-badge">${tool}</span>`
            ).join("")}
          </div>
        </div>
      </div>
    `;

    homeProjectsContainer.appendChild(card);
  });
}