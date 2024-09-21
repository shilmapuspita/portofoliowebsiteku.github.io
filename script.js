window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function showDetails(serviceId) {
  // Debugging log untuk memastikan klik berfungsi
  console.log("Clicked on: " + serviceId);
  
  // Sembunyikan semua paragraf
  var details = document.querySelectorAll('.detail-text');
  details.forEach(function(detail) {
      detail.style.display = 'none';
  });

  // Tampilkan paragraf yang dipilih berdasarkan ID
  var selectedDetail = document.getElementById(serviceId);
  if (selectedDetail) {
      selectedDetail.style.display = 'block';
      console.log("Showing: " + serviceId);
  }
}

document.querySelectorAll('.project img').forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.transform = "scale(1.05)";
    img.style.transition = "transform 0.3s ease";
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = "scale(1)";
  });
});

