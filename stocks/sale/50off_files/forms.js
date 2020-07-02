jQuery(document).ready(function($){
  $('.jbbtn_get-price').jbform({ 
    key: "681726ab234b518e4c952f4635c2bb19",
    title: "Узнай цену, отправь эскиз",
    copyright: false,
    postfix: "get-price",
    fields: {
        name: {
            type: "text",
            required: true,
            placeholder: "Ваше имя"
        },
        tel: {
            type: "text",
            required: true,
            placeholder: "Номер телефона"
        },
        email: {
            type: "text",
            placeholder: "E-mail"
        },
        message: {
            type: "textarea",
            placeholder: "Сообщение"
        },
        photo: {
            type: "file",
            label: "Прикрепите ваш эскиз",
            placeholder: "Выберите файл"
        },
        agreement: {
            type: "checkbox",
            label: 'Нажимая на кнопку "Узнать цену", Вы автоматически соглашаетесь с <a href="/politika-konfidencialnosti.pdf" target="blank">политикой конфиденциальности</a> и даете согласие на обработку персональных данных.',
            value: "Да",
            checked: true,
            required: true
        },
        submit: {
            type: "submit",
            value: "Узнать цену"
        }
    },
    onSendSuccess:function(){
        yaCounter33043318.reachGoal('price');
        return true;
    } 
  });
  $('.jbbtn_ask').jbform({
    key: "f3269d023f5dcd031ed596e08d31fae1",
    title: "Задать вопрос мастеру",
    copyright: false,
    postfix: "ask",
    fields: {
        name: {
            type: "text",
            required: true,
            placeholder: "Ваше имя"
        },
        tel: {
            type: "text",
            required: true,
            placeholder: "Номер телефона"
        },
        email: {
            type: "text",
            placeholder: "E-mail"
        },
        message: {
            type: "textarea",
            placeholder: "Сообщение"
        },
        agreement: {
            type: "checkbox",
            label: 'Нажимая на кнопку "Отправить", Вы автоматически соглашаетесь с <a href="/politika-konfidencialnosti.pdf" target="blank">политикой конфиденциальности</a> и даете согласие на обработку персональных данных.',
            value: "Да",
            checked: true,
            required: true
        },
        submit: {
            type: "submit",
            value: "Отправить"
        }
    },
    onSendSuccess:function(){
        yaCounter33043318.reachGoal('quest');
        return true;
    } 
  });
  $('.jbbtn_callme').jbform({
    key: "ca716343bc4afa8b3094d930e2aeb69f",
    title: "Обратный звонок",
    copyright: false,
    postfix: "callme",
    fields: {
        name: {
            type: "text",
            required: true,
            placeholder: "Ваше имя"
        },
        tel: {
            type: "text",
            required: true,
            placeholder: "Номер телефона"
        },
        agreement: {
            type: "checkbox",
            label: 'Нажимая на кнопку "Отправить", Вы автоматически соглашаетесь с <a href="/politika-konfidencialnosti.pdf" target="blank">политикой конфиденциальности</a> и даете согласие на обработку персональных данных.',
            value: "Да",
            checked: true,
            required: true
        },
        submit: {
            type: "submit",
            value: "Отправить"
        }
    },
    onSendSuccess:function(){
        yaCounter33043318.reachGoal('call');
        return true;
    } 
  });
  
  $('.jbbtn_order').jbform({
    key: "c1ff348b4fbb0adc1ded0cdc03c45983",
    title: "Записаться",
    copyright: false,
    postfix: "order",
    fields: {
        name: {
            type: "text",
            required: true,
            placeholder: "Ваше имя"
        },
        tel: {
            type: "text",
            required: true,
            placeholder: "Номер телефона"
        },
        email: {
            type: "text",
            placeholder: "E-mail"
        },
        message: {
            type: "textarea",
            placeholder: "Сообщение"
        },
        photo: {
            type: "file",
            label: "Прикрепите ваш эскиз",
            placeholder: "Выберите файл"
        },
        agreement: {
            type: "checkbox",
            label: 'Нажимая на кнопку "Записаться", Вы автоматически соглашаетесь с <a href="/politika-konfidencialnosti.pdf" target="blank">политикой конфиденциальности</a> и даете согласие на обработку персональных данных.',
            value: "Да",
            checked: true,
            required: true
        },
        submit: {
            type: "submit",
            value: "Записаться"
        }
    },
    onSendSuccess:function(){
        yaCounter33043318.reachGoal('order');
        return true;
    } 
  });
  $('.jbbtn_consult').jbform({
    key: "3bdf57fdc2bc51e35186c2ca32698847",
    title: "Записаться на консультацию",
    copyright: false,
    postfix: "consult",
    fields: {
        name: {
            type: "text",
            required: true,
            placeholder: "Ваше имя",
            wrapper_class: "w-50"
        },
        tel: {
            type: "text",
            required: true,
            placeholder: "Номер телефона",
            wrapper_class: "w-50"
        },
        agreement: {
            type: "checkbox",
            label: 'Нажимая на кнопку "Записаться", Вы автоматически соглашаетесь с <a href="/politika-konfidencialnosti.pdf" target="blank">политикой конфиденциальности</a> и даете согласие на обработку персональных данных.',
            value: "Да",
            checked: true,
            required: true
        },
        submit: {
            type: "submit",
            value: "Записаться"
        }
    },
    onSendSuccess:function(){
        yaCounter33043318.reachGoal('order');
        return true;
    } 
  });  
  setTimeout(function(){
      $('.xbtn_consult').off("click").on("click", function(e){
          e.preventDefault();
          $(".jbbtn_consult").click();
          $.fancybox.close();
          return false;
      });
  }, 1000);
  
  
  $('.form-contact').jbform({
    key: "3bdf57fdc2bc51e35186c2ca32698847",
    title: "Записаться на консультацию",
    modal: false,
    copyright: false,
    postfix: "contact-form",
    fields: {
        name: {
            type: "text",
            required: true,
            placeholder: "Ваше имя",
            wrapper_class: "w-50"
        },
        tel: {
            type: "text",
            required: true,
            placeholder: "Номер телефона",
            wrapper_class: "w-50"
        },
        agreement: {
            type: "checkbox",
            label: 'Нажимая на кнопку "Отправить", Вы автоматически соглашаетесь с <a href="/politika-konfidencialnosti.pdf" target="blank">политикой конфиденциальности</a> и даете согласие на обработку персональных данных.',
            value: "Да",
            checked: true,
            required: true
        },
        submit: {
            type: "submit",
            value: "Отправить"
        }
    },
    onSendSuccess:function(){
        yaCounter33043318.reachGoal('contact');
        return true;
    } 
  });
});   