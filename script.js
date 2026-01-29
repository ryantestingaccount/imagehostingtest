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
    const img = document.createElement("img");
    img.src = data.secure_url;
    document.getElementById("gallery").appendChild(img);
  })
  .catch(err => console.error(err));
}
