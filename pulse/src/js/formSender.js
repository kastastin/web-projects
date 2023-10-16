emailjs.init("SAEFrTH08WIEWu0l8");
window.onload = function () {
  const forms = document.querySelectorAll("form"),
    consultation = document.getElementById("consultation"),
    order = document.getElementById("order"),
    overlay = document.querySelector(".overlay"),
    thanks = document.getElementById("thanks");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const closeModal = function () {
        form.reset();
        consultation.style.display = "none";
        order.style.display = "none";
      };

      emailjs.sendForm("service_2byc7lj", "template_kwwy31f", this).then(
        function () {
          closeModal();
          overlay.style.display = "block";
          thanks.style.display = "block";
        },
        function () {
          closeModal();
          alert("Something went wrong(");
        }
      );
    });
  });
};
