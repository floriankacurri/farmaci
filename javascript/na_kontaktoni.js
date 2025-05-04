document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Faleminderit! Mesazhi juaj eshte marre, dhe stafi jone do t'ju pergjigjet shume shpejt.");
    this.reset();
  });
  
  // 6. Phone format check
  const phoneRegex = /^\+355 \d{2} \d{2} \d{3}$/;;
  if (!phoneRegex.test(phone)) {
    errors.push("Phone format must be XXX-XXXXXXX.");
  }

    // 7. Email format check
    const emailRegex = /^[^@]+@[^@]+\.[^@]{2,}$/;
    if (!emailRegex.test(email)) {
    errors.push("Email duhet te jete i shkruajtur sakte (ne formatin p.sh. adrese@domain.com).");
    }