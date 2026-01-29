const cloudName = "dqvntouzt";
const uploadPreset = "test images";

function uploadImage() {
  const file = document.getElementById("imageInput").files[0];
  if (!file) return alert("Please select an image");

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  fetch(url, {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
  const downloadUrl =
    `download.html?img=${encodeURIComponent(data.secure_url)}`;

  const link = document.createElement("a");
  link.href = downloadUrl;
  link.textContent = "Download image";
  link.target = "_blank";

  document.getElementById("gallery").appendChild(link);
});
  .catch(err => console.error(err));
}
