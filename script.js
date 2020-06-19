let popup = document.querySelector(".alert-popup");
let message = document.querySelector(".alert-message");
let close = document.querySelector(".close");
let submitButton = document.querySelectorAll(".submit");

submitButton.forEach(el => el.addEventListener("click", checkForm));

close.addEventListener("click", function(evt) {
  evt.preventDefault();
 
  if (!popup.classList.contains("popup-hide")) {
    popup.classList.add("popup-hide");
  }
})

function checkForm(evt) {
    evt.preventDefault();
    let target = evt.target;

    var name = target.parentNode.querySelector(".name");
    var phone = target.parentNode.querySelector(".phone");
    var mail = target.parentNode.querySelector(".mail");
    var checkBox = target.parentNode.querySelector(".checkbox");

    let nameRegExp = /^[а-яА-ЯёЁa-zA-Z0-9]{1,20}$/g;
    let mailRegExp = /.+?\@.+/g;
    let phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/g;

    if (!checkBox.checked) {
        if (popup.classList.contains("popup-hide")) {
            popup.classList.remove("popup-hide");
        }
        message.innerHTML = "Пожалуйста, установите флажок согласия с условиями обработки персональных данных";
    }

    else if (nameRegExp.test(name.value) === false) {
        if (popup.classList.contains("popup-hide")) {
            popup.classList.remove("popup-hide");
        }
        message.innerHTML = "Пожалуйста, введите корректное имя";
    }
      
    else if (phoneRegExp.test(phone.value) === false) {
        if (popup.classList.contains("popup-hide")) {
            popup.classList.remove("popup-hide");
        }
        message.innerHTML = "Пожалуйста, введите корректный номер телефона";
    }

    else if (mailRegExp.test(mail.value) === false) {
        if (popup.classList.contains("popup-hide")) {
            popup.classList.remove("popup-hide");
        }
        message.innerHTML = "Пожалуйста, введите корректный емейл";
    }

    else {
        popup.classList.remove("popup-hide");
        message.innerHTML = "Спасибо, ваши данные отправлены";
        name.value="";
        phone.value="";
        mail.value="";
    }
}