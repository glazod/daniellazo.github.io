const allProjectsContainer = document.getElementById("allProjectsContainer");

if (allProjectsContainer) {

  let sorted = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));

  sorted.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <a href="${project.file}" target="_blank" class="card-link"></a>
      <div class="project-info">
        <div class="project-bio">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <small>${project.category}</small>
        </div>
      </div>
    `;

    allProjectsContainer.appendChild(card);
  });
}