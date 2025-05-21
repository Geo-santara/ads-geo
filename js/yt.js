function playVideo(event) {
  event.preventDefault(); // Menghentikan perilaku default link

  const container = event.currentTarget.closest(".col-md-6");
  const thumbnail = container.querySelector("#thumbnail");
  const videoContainer = container.querySelector("#videoContainer");
  const videoPlayer = container.querySelector("#videoPlayer");

  thumbnail.style.display = "none"; // Sembunyikan thumbnail
  event.currentTarget.style.display = "none"; // Sembunyikan tombol play
  videoContainer.style.display = "block"; // Tampilkan video container

  // Ganti dengan link video YouTube yang diinginkan
  videoPlayer.src = "https://www.youtube.com/embed/a3R2GO-9wTc?autoplay=1";
}
