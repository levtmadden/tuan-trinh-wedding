// Get elements
const trinhQr = document.getElementById("tring-qr");
const tuanQr = document.getElementById("tuan-qr");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

trinhQr.addEventListener("click", function () {
  modalImage.src = "files/IMG_4918.JPG";
  imageModal.style.display = "block";
});

tuanQr.addEventListener("click", function () {
  modalImage.src = "files/IMG_8113.jpg";
  imageModal.style.display = "block";
});

// Event listener to close the modal
closeModal.addEventListener("click", function () {
  imageModal.style.display = "none";
});
