document.addEventListener("DOMContentLoaded", function () {
  // Загружаем компоненты header и footer
  fetch("components/header.html")
    .then((response) => response.text())
    .then((data) => {
      const headerElement = document.getElementById("header");
      if (headerElement) {
        headerElement.innerHTML = data;
      }
    })
    .catch((error) => console.error("Ошибка загрузки header:", error));

  fetch("components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        footerElement.innerHTML = data;
      }
    })
    .catch((error) => console.error("Ошибка загрузки footer:", error));
});

// Scroll Progress Bar
window.addEventListener("scroll", function () {
  const progressBar = document.getElementById("progressBar");
  if (progressBar) {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercentage + "%";
  }
});

// Form submission handlers
document.addEventListener("DOMContentLoaded", function () {
  // Homepage search form
  const checkForm = document.querySelector(".check-form");
  if (checkForm) {
    checkForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Функция поиска будет реализована в следующей версии");
    });
  }

  // Newsletter subscription
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Спасибо за подписку! Вы будете получать еженедельные обзоры.");
      this.reset();
    });
  }

  // Quick check button
  const quickCheckBtn = document.querySelector(".quick-check button");
  if (quickCheckBtn) {
    quickCheckBtn.addEventListener("click", function () {
      alert("Введите название компании в поле поиска выше");
    });
  }

  // Order review button
  const orderReviewBtn = document.querySelector(".order-review button");
  if (orderReviewBtn) {
    orderReviewBtn.addEventListener("click", function () {
      alert("Скоро будет доступна форма для заказа индивидуального обзора");
    });
  }

 

  // Quick action buttons
  const quickActionBtns = document.querySelectorAll(".quick-actions .btn");
  quickActionBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const btnText = this.textContent.trim();
      if (btnText.includes("Сообщить о проблеме")) {
        alert("Функция отправки жалобы будет доступна в ближайшее время");
      } else if (btnText.includes("Получить консультацию")) {
        alert(
          "Свяжитесь с нами по email или телефону для получения консультации"
        );
      } else if (btnText.includes("Возврат средств")) {
        alert(
          "Наши юристы помогут вам в возврате средств. Свяжитесь с нами для консультации"
        );
      }
    });
  });
});

// Smooth scrolling for anchor links
document.addEventListener("click", function (e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
});

// Add hover effects for cards
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(
    ".category-card, .company-card, .content-card"
  );
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});

// // Social share functionality
// document.addEventListener("click", function (e) {
//   if (e.target.closest(".social-btn")) {
//     const btn = e.target.closest(".social-btn");
//     const platform = Array.from(btn.classList)
//       .find((cls) => cls.startsWith("social-"))
//       .replace("social-", "");
//     const url = encodeURIComponent(window.location.href);
//     const title = encodeURIComponent(document.title);

//     let shareUrl = "";
//     switch (platform) {
//       case "facebook":
//         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
//         break;
//       case "twitter":
//         shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
//         break;
//       case "linkedin":
//         shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
//         break;
//       case "whatsapp":
//         shareUrl = `https://wa.me/?text=${title} ${url}`;
//         break;
//     }

//     if (shareUrl) {
//       window.open(shareUrl, "_blank", "width=600,height=400");
//     }
//   }
// });

// // Floating action button
// document.addEventListener("click", function (e) {
//   if (e.target.closest(".floating-btn")) {
//     alert("Экстренная помощь: +7 (XXX) XXX-XX-XX\nМы работаем 24/7");
//   }
// });

//Initialize tooltips and other UI elements
document.addEventListener("DOMContentLoaded", function () {
  // Add loading state to buttons that perform actions
  const actionButtons = document.querySelectorAll(
    ".btn-primary, .btn-danger, .btn-success"
  );
  actionButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const originalText = this.innerHTML;
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Загрузка...';

      setTimeout(() => {
        this.innerHTML = originalText;
      }, 2000);
    });
  });
});

function animateCounter(element, target) {
  let count = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    count += increment;
    if (count >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(count).toLocaleString();
    }
  }, 20);
}

const observers = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.target);
      animateCounter(entry.target, target);
      observers.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".stats-counter").forEach((counter) => {
  observers.observe(counter);
});

function toggleFAQ(button) {
  const faqItem = button.closest(".faq-item");
  faqItem.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".popular-btn");
  const input = document.getElementById("companyInput");
  const form = document.getElementById("checkForm");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const companyName = this.textContent;
      input.value = companyName;
      form.requestSubmit();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("commentForm");
  const formMessage = document.getElementById("formMessage");
  const stars = document.querySelectorAll(".user-rating .star");
  let selectedRating = 0;
  const submitBtn = form.querySelector("button[type=submit]");

  stars.forEach((star, index) => {
    star.addEventListener("click", function () {
      selectedRating = index + 1;
      updateStars();
    });
    star.addEventListener("mouseover", function () {
      highlightStars(index + 1);
    });
  });

  document
    .querySelector(".user-rating")
    .addEventListener("mouseleave", function () {
      updateStars();
    });

  function updateStars() {
    stars.forEach((star, index) => {
      star.classList.toggle("inactive", index >= selectedRating);
    });
  }
  function highlightStars(rating) {
    stars.forEach((star, index) => {
      star.classList.toggle("inactive", index >= rating);
    });
  }
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function showMessage(message, isError = false) {
    formMessage.innerHTML = message;
    formMessage.className = isError ? "error-message" : "success-message";
    formMessage.style.display = "block";
  }
  function clearMessage() {
    formMessage.innerHTML = "";
    formMessage.style.display = "none";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearMessage();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const comment = document.getElementById("comment").value.trim();

    if (!name) {
      showMessage("Пожалуйста, введите ваше имя", true);
      document.getElementById("name").focus();
      return;
    }
    if (!email) {
      showMessage("Пожалуйста, введите email", true);
      document.getElementById("email").focus();
      return;
    }
    if (!isValidEmail(email)) {
      showMessage("Пожалуйста, введите корректный email адрес", true);
      document.getElementById("email").focus();
      return;
    }
    if (!comment) {
      showMessage("Пожалуйста, напишите ваш отзыв", true);
      document.getElementById("comment").focus();
      return;
    }
    if (selectedRating === 0) {
      showMessage("Пожалуйста, поставьте оценку", true);
      return;
    }

    // Показываем загрузку на кнопке и блокируем её
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
    submitBtn.disabled = true;

    setTimeout(() => {
      showMessage(
        "Спасибо за ваш отзыв! Он будет добавлен после одобрения модератором.",
        false
      );
      form.reset();
      selectedRating = 0;
      updateStars();

      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}); 
