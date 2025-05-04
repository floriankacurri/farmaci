
        function toggleConsultationMethod() {
          var reason = document.getElementById("reason").value;
          var consultationDiv = document.getElementById("consultation-method");
          
          if (reason === "consultation") {
            consultationDiv.style.display = "block";
          } else {
            consultationDiv.style.display = "none";
          }
        };

        function resetForm() {
          document.querySelector("form").reset();
        }

        document.addEventListener("DOMContentLoaded", function () {
          const dateInput = document.getElementById("date");
          const today = new Date().toISOString().split("T")[0];
          dateInput.setAttribute("min", today);
        });

    
        document.addEventListener("DOMContentLoaded", function () {
          const form = document.getElementById("appointment-form");
          form.addEventListener("submit", function (e) {
            e.preventDefault(); // Ndalo dërgimin default të formës
            alert("Takimi u rezervua me sukses! Do të kontaktoheni së shpejti për konfirmim.");
            form.reset(); // Opsional: fshin fushat pasi jepet mesazhi
          });
        });
