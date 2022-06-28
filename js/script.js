var hamburget = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeIt = document.querySelector('.menu__close'),
    item = document.querySelector('.menu__list');

hamburget.addEventListener ('click', () => {
    menu.classList.add('active');
});

closeIt.addEventListener ('click', () => {
    menu.classList.remove('active');
});

item.addEventListener ('click', () => {
  menu.classList.remove('active');
});

const counter = document.querySelectorAll('.iuse__progress-procent'),
        lines = document.querySelectorAll('.iuse__progress-line span');

counter.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

$('form').validate({
    rules: {
      name:"required",
      police:"required",
      email: {
        required: true,
        email: true,
      }
    },
    messages: {
      name: "Please specify your name",
      police: {
        required: "Мне нужно Ваше согласие",
        police: "Примите соглашение"
      },
      email: {
        required: "Мне нужна ваша почта для связи с вами",
        email: "Формат должен быть name@domain.com"
      }
    }
   
});
$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    $('form').trigger('reset');
  });
  return false;
});
