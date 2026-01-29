const cloudName = "dqvntouzt";
const apiKey = "497127618157259";

const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?max_results=30`;

fetch(url, {
  headers: {
    Authorization: "Basic " + btoa(apiKey + ":")
  }
})
  .then(res => res.json())
  .then(data => {
    const gallery = document.getElementById("gallery");

    data.resources.forEach(img => {
      const card = document.createElement("div");
      card.className = "card";

      const image = document.createElement("img");
      image.src = img.secure_url;

      const downloadLink = document.createElement("a");
      downloadLink.href =
        `download.html?img=${encodeURIComponent(img.secure_url)}`;
      downloadLink.textContent = "Download";
      downloadLink.target = "_blank";

      card.appendChild(image);
      card.appendChild(downloadLink);
      gallery.appendChild(card);
    });
  })
  .catch(err => console.error(err));
