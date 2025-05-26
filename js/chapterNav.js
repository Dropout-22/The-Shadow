const chapterList = document.getElementById('chapterList');

const chapters = [
  { title: "Whispers Behind the Glass", file: "chapter1.html" },
  { title: "The Breach", file: "chapter2.html" },
  // Add more chapters below when you publish them:
  // { title: "Chapter 3: Shadows Multiply", file: "chapter3.html" },
];

chapters.forEach((chapter, index) => {
  const li = document.createElement('li');
  li.innerHTML = `<a href="chapters/${chapter.file}">Chapter ${index + 1}: ${chapter.title}</a>`;
  chapterList.appendChild(li);
});
