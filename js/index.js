 const elForm = document.querySelector (".form");
 const elInputForm= document.querySelector (".form__input");
 const elResult = document.querySelector (".result");

 elForm.addEventListener  ('submit', function (evt) {
  evt.preventDefault()

  const inputValue = elInputForm.value ;

  switch (inputValue) {
    case "1":
    elResult.textContent= "Dushanba"
    break;
    case "2":
    elResult.textContent ="Seshanba"
    break;
    case "3" :
    elResult.textContent = "Chorshanba"
    break;
    case "4" :
    elResult.textContent = "Payshanba"
    break;
    case "5" :
    elResult.textContent = "Juma"
    break;
    case "6" :
    elResult.textContent = "Shanba"
    break;
    case "7" :
    elResult.textContent = "Yakshanba"
    break;
    default :
    elResult.textContent = "Iltimos 1 dan 7 gacha raqam kiriting"
  }
})