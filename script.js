let lastScrollTop = 0;
const header = document.querySelector("header");
const navbar = document.querySelector(".navbar");
const blurredLine = document.querySelector(".blurred-line");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down, hide navbar
    header.classList.add("hidden");
    navbar.classList.add("hide");
    blurredLine.classList.add("hide");
  } else {
    // Scrolling up, show navbar
    header.classList.remove("hidden");
    navbar.classList.remove("hide");
    blurredLine.classList.remove("hide");
  }

  lastScrollTop = scrollTop;
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enquiryForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://kodeo-backend.onrender.com/api/career", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert("Application submitted successfully!");
        form.reset(); // Clear the form
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("An error occurred while submitting the form.");
    }
  });

});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // 🔴 CRUCIAL: prevents page reload

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      contact: document.getElementById("contact").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await fetch("https://kodeo-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Failed to send: " + result.message);
      }
    } catch (error) {
      console.error("Send error:", error);
      alert("🚨 Error sending message");
    }
  });
});
