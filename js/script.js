// Sambutan nama di Home
const namePlaceholder = document.getElementById("name-placeholder");
let userName = prompt("Masukkan nama Anda:");
if (userName && userName.trim() !== "") {
  namePlaceholder.textContent = userName;
}

// Toggle Navbar (mobile)
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Form Validation & Output
const form = document.getElementById("contact-form");
const outputBox = document.getElementById("form-output");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector("input[name='gender']:checked")?.value;
  const message = document.getElementById("message").value;

  if (!name || !dob || !gender || !message) {
    alert("Harap isi semua field!");
    return;
  }

  outputBox.innerHTML = `
    <h3>Hasil Input:</h3>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${dob}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;
});
