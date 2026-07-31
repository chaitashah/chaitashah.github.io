fetch("photos.json")
  .then(response => response.json())
  .then(photos => {
    const grid = document.getElementById("blog-grid");

    photos.forEach(photo => {
      const item = document.createElement("div");
      item.className = "blog-item";

      item.innerHTML = `
        <img src="images/blog/${photo.image}">
        <p>${photo.caption}</p>
      `;

      grid.appendChild(item);
    });
  });

fetch("stories.json")
  .then(response => response.json())
  .then(stories => {
    const story = stories[0];
    const storyCircle = document.getElementById("story-circle");

    storyCircle.innerHTML = `
      <img src="${story.image}" alt="Story">
    `;
  });
