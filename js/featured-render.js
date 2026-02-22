const featuredContainer = document.getElementById("featuredInsights");

if (featuredContainer) {

  const newestFive = insights
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  newestFive.forEach(insight => {
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

    featuredContainer.appendChild(card);
  });
}

function calculateReadTime(words) {
  const wordsPerMinute = 200;
  return Math.ceil(words / wordsPerMinute);
}