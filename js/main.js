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
// Счетчик анимация

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

// // Form submission handlers
// document.addEventListener("DOMContentLoaded", function () {
//   // Homepage search form
//   const checkForm = document.querySelector(".check-form");
//   if (checkForm) {
//     checkForm.addEventListener("submit", function (e) {
//       e.preventDefault();
//       alert("Функция поиска будет реализована в следующей версии");
//     });
//   }

//   // Newsletter subscription
//   const newsletterForm = document.querySelector(".newsletter-form");
//   if (newsletterForm) {
//     newsletterForm.addEventListener("submit", function (e) {
//       e.preventDefault();
//       alert("Спасибо за подписку! Вы будете получать еженедельные обзоры.");
//       this.reset();
//     });
//   }

//   // Quick check button
//   const quickCheckBtn = document.querySelector(".quick-check button");
//   if (quickCheckBtn) {
//     quickCheckBtn.addEventListener("click", function () {
//       alert("Введите название компании в поле поиска выше");
//     });
//   }

//   // Order review button
//   const orderReviewBtn = document.querySelector(".order-review button");
//   if (orderReviewBtn) {
//     orderReviewBtn.addEventListener("click", function () {
//       alert("Скоро будет доступна форма для заказа индивидуального обзора");
//     });
//   }

//   // Quick action buttons
//   const quickActionBtns = document.querySelectorAll(".quick-actions .btn");
//   quickActionBtns.forEach((btn) => {
//     btn.addEventListener("click", function (e) {
//       e.preventDefault();
//       const btnText = this.textContent.trim();
//       if (btnText.includes("Сообщить о проблеме")) {
//         alert("Функция отправки жалобы будет доступна в ближайшее время");
//       } else if (btnText.includes("Получить консультацию")) {
//         alert(
//           "Свяжитесь с нами по email или телефону для получения консультации"
//         );
//       } else if (btnText.includes("Возврат средств")) {
//         alert(
//           "Наши юристы помогут вам в возврате средств. Свяжитесь с нами для консультации"
//         );
//       }
//     });
//   });
// });

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

//Initialize tooltips and other UI elements
document.addEventListener("DOMContentLoaded", function () {
  // Add loading state to buttons that perform actions
  const actionButtons = document.querySelectorAll(
    ".btn-primary, .btn-danger, .btn-success",
    ".submit-btn"
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

document.querySelectorAll(".stats-counter").forEach((counter) => {
  observers.observe(counter);
});

function toggleFAQ(button) {
  const faqItem = button.closest(".faq-item");
  faqItem.classList.toggle("active");
}
// Поиск популярных компаний
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

//Валидация и вспомогательные ф-ции для форм

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(itiInstance) {
  return itiInstance.isValidNumber();
}

function showMessage(container, message, isError = false) {
  container.innerHTML = message;
  container.className = isError ? "error-message" : "success-message";
  container.style.display = "block";
}

function clearMessage(container) {
  container.textContent = "";
  container.style.display = "none";
}

// Форма коммента
document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.getElementById("commentForm");
  const formMessage = document.getElementById("formMessage");
  const stars = document.querySelectorAll(".user-rating .star");
  let selectedRating = 0;

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

  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    clearMessage(formMessage);

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const comment = document.getElementById("comment").value.trim();

    if (!name) {
      showMessage(formMessage, "Пожалуйста, введите ваше имя", true);
      document.getElementById("name").focus();
      return;
    }
    if (!email) {
      showMessage(formMessage, "Пожалуйста, введите email", true);
      document.getElementById("email").focus();
      return;
    }
    if (!isValidEmail(email)) {
      showMessage(
        formMessage,
        "Пожалуйста, введите корректный email адрес",
        true
      );
      document.getElementById("email").focus();
      return;
    }
    if (!comment) {
      showMessage(formMessage, "Пожалуйста, напишите ваш отзыв", true);
      document.getElementById("comment").focus();
      return;
    }
    if (selectedRating === 0) {
      showMessage(formMessage, "Пожалуйста, поставьте оценку", true);
      return;
    }

    setTimeout(() => {
      showMessage(
        formMessage,
        "Спасибо за ваш отзыв! Он будет добавлен после одобрения модератором.",
        false
      );
      commentForm.reset();
      selectedRating = 0;
      updateStars();
    }, 2000);
  });
});
// Форма юр помощь

document.addEventListener("DOMContentLoaded", function () {
  const legalConsultationForm = document.getElementById(
    "legalConsultationForm"
  );
  const formResponse = document.getElementById("formResponse");
  const input = document.querySelector("#clientPhone");
  const iti = window.intlTelInput(input, {
    initialCountry: "ru",
    preferredCountries: ["ru", "ua", "kz", "us"],
    separateDialCode: true,
    nationalMode: true,
    autoHideDialCode: false,
    formatOnDisplay: true,
    dropdownContainer: input.closest(".iti-container"),
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.19/build/js/utils.js",
  });
  // Обработка отправки формы
  legalConsultationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    clearMessage(formResponse);

    const name = document.getElementById("clientName").value.trim();
    const phone = document.getElementById("clientPhone").value.trim();
    const email = document.getElementById("clientEmail").value.trim();
    const consent = document.getElementById("dataConsent").checked;

    // Валидация
    if (!name) {
      showMessage(formResponse, "Пожалуйста, укажите ваше имя", true);
      document.getElementById("clientName").focus();
      return;
    }

    if (!phone) {
      showMessage(formResponse, "Пожалуйста, укажите номер телефона", true);
      document.getElementById("clientPhone").focus();
      return;
    }

    if (!isValidPhone(iti)) {
      showMessage(formResponse, "Номер телефона недействителен", true);
      document.getElementById("clientPhone").focus();
      return;
    }

    if (!email) {
      showMessage(formResponse, "Пожалуйста, укажите email", true);
      document.getElementById("clientEmail").focus();
      return;
    }

    if (!isValidEmail(email)) {
      showMessage(formResponse, "Пожалуйста, введите корректный email", true);
      document.getElementById("clientEmail").focus();
      return;
    }

    if (!consent) {
      showMessage(
        formResponse,
        "Необходимо дать согласие на обработку персональных данных",
        true
      );
      return;
    }

    setTimeout(() => {
      showMessage(
        formResponse,
        "Спасибо! Наш юрист свяжется с вами в течение 30 минут.",
        false
      );
      legalConsultationForm.reset();
    }, 2000);
  });
});
