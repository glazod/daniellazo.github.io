const container = document.getElementById("insightsContainer");
const sortSelect = document.getElementById("sortSelect");
const tagBar = document.getElementById("tagFilters");

let activeTag = "All";

// Extract unique tags
const allTags = [
    "All",
    ...new Set(insights.flatMap(insight => insight.tags))
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
  
      // Remove active class from all buttons
      document.querySelectorAll(".tag-btn").forEach(button =>
        button.classList.remove("active")
      );
  
      // Add active class to clicked one
      btn.classList.add("active");
  
      activeTag = tag;
      renderInsights();
    });
  
    tagBar.appendChild(btn);
  });

function calculateReadTime(words) {
  const wordsPerMinute = 200;
  return Math.ceil(words / wordsPerMinute);
}

function renderInsights() {

  let filtered = [...insights];

  if (activeTag !== "All") {
    filtered = filtered.filter(insight =>
      insight.tags.includes(activeTag)
    );
  }

  const sortCriteria = sortSelect.value;

  if (sortCriteria === "newest") {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  if (sortCriteria === "oldest") {
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  if (sortCriteria === "pillar") {
    filtered.sort((a, b) => a.pillar.localeCompare(b.pillar));
  }

  container.innerHTML = "";

  filtered.forEach(insight => {
    const card = document.createElement("div");
    card.classList.add("insight-card");

    card.innerHTML = `
      <a href="${insight.file}" class="insight-link"></a>
      <div class="insight-content">
        <h3>${insight.title}</h3>
        <span class="insight-tag">${insight.pillar}</span>
        <p>${insight.description}</p>
        <small>${calculateReadTime(insight.wordCount)} min read</small>
      </div>
    `;

    container.appendChild(card);
  });
}

renderInsights();

sortSelect.addEventListener("change", renderInsights);