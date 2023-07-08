const blogs = [
  {
    id: 1,
    imageLink: "assets/img/blogs/blog1.jpg",
    title: "Pakistan's power predicament",
    date: "2021-01-01",
    category: "Category 1",
    description:
      "A nationwide blackout during a sovereign debt crisis encapsulated the profound challenges facing Pakistan. Deep reforms are needed to tip the economic scales away from reliance on volatile fossil fuel imports and towards clean domestic energy sources.",
  },
  {
    id: 2,
    imageLink: "assets/img/blogs/blog1.jpg",
    title: "Pakistan's power predicament",
    date: "2021-01-01",
    category: "Category 1",
    description:
      "A nationwide blackout during a sovereign debt crisis encapsulated the profound challenges facing Pakistan. Deep reforms are needed to tip the economic scales away from reliance on volatile fossil fuel imports and towards clean domestic energy sources.",
  },
  {
    id: 3,
    imageLink: "assets/img/blogs/blog1.jpg",
    title: "Pakistan's power predicament",
    date: "2021-01-01",
    category: "Category 1",
    description:
      "A nationwide blackout during a sovereign debt crisis encapsulated the profound challenges facing Pakistan. Deep reforms are needed to tip the economic scales away from reliance on volatile fossil fuel imports and towards clean domestic energy sources.",
  },
  {
    id: 4,
    imageLink: "assets/img/blogs/blog1.jpg",
    title: "Pakistan's power predicament",
    date: "2021-01-01",
    category: "Category 1",
    description:
      "A nationwide blackout during a sovereign debt crisis encapsulated the profound challenges facing Pakistan. Deep reforms are needed to tip the economic scales away from reliance on volatile fossil fuel imports and towards clean domestic energy sources.",
  },
  {
    id: 5,
    imageLink: "assets/img/blogs/blog1.jpg",
    title: "Pakistan's power predicament",
    date: "2021-01-01",
    category: "Category 1",
    description:
      "A nationwide blackout during a sovereign debt crisis encapsulated the profound challenges facing Pakistan. Deep reforms are needed to tip the economic scales away from reliance on volatile fossil fuel imports and towards clean domestic energy sources.",
  },
  {
    id: 6,
    imageLink: "assets/img/blogs/blog1.jpg",
    title: "Pakistan's power predicament",
    date: "2021-01-01",
    category: "Category 1",
    description:
      "A nationwide blackout during a sovereign debt crisis encapsulated the profound challenges facing Pakistan. Deep reforms are needed to tip the economic scales away from reliance on volatile fossil fuel imports and towards clean domestic energy sources.",
  },
];

document.getElementById("blog-container").innerHTML = blogs
  .map((blog) => {
    return `
  <div class="col-lg-4 col-sm-6 mt-3 mb-3 pr-2">
    <div class="blog-item">
      <div class="blog-img">
        <img src="${blog.imageLink}" style="width:100% ;object-fit: cover; height:250px; margin-bottom:20px" alt="blog-img" />
      </div>
      <div class="blog-content">
        <div class="blog-title">
          <h3>${blog.title}</h3>
        </div>
        <div class="blog-meta">
          <span>${blog.date}</span>
          <span>${blog.category}</span>
        </div>
        <div class="blog-text">
          <p>
            ${blog.description}
          </p>
        </div>
      </div>
    </div>
  </div>
  `;
  })
  .join("");
