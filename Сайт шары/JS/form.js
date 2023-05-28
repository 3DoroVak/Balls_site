function calcform(el) {
    var name = el.name.value;
    var tel = el.tel.value;
    var number = el.number.value;
    var radio = el.radio.value;
    var polet = document.getElementById('polet').value;
    var fail = '';

    if(name == '' || tel == '' || number == ''){
        fail = 'Заполните все поля';
    }else if(name.length <= 1 || name.length > 15){
        fail = 'Введите корректное имя';
    }

    if(fail != ''){
        document.getElementById('error').innerHTML = fail;
    }else{
        alert('Все данные успешно отправлены');
    }
    return false;
}