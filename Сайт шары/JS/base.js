var select1 = document.getElementById('select_conteiner_1');
select1.onchange = function() {
    var item = select1.value;
    if(item == '3'){
        document.getElementById('span_cost_1').innerHTML = '30 000 р'
    }else if(item == '2'){
        document.getElementById('span_cost_1').innerHTML = '26 000 р'
    }else if(item == '4'){
        document.getElementById('span_cost_1').innerHTML = '34 000 р'
    }else if(item == '5'){
        document.getElementById('span_cost_1').innerHTML = '38 000 р'
    }
}

var select2 = document.getElementById('select_conteiner_2');
select2.onchange = function() {
    var item2 = select2.value;
    if(item2 == '3'){
        document.getElementById('span_cost_2').innerHTML = '35 000 р'
    }else if(item2 == '2'){
        document.getElementById('span_cost_2').innerHTML = '30 000 р'
    }
}

var select3 = document.getElementById('select_conteiner_3');
select3.onchange = function() {
    var item3 = select3.value;
    if(item3 == '3'){
        document.getElementById('span_cost_3').innerHTML = '30 000 р'
    }else if(item3 == '2'){
        document.getElementById('span_cost_3').innerHTML = '20 000 р'
    }else if(item3 == '1'){
        document.getElementById('span_cost_3').innerHTML = '10 000 р'
    }else if(item3 == '4'){
        document.getElementById('span_cost_3').innerHTML = '40 000 р'
    }else if(item3 == '5'){
        document.getElementById('span_cost_3').innerHTML = '50 000 р'
    }
}

var select4 = document.getElementById('select_conteiner_4');
select4.onchange = function() {
    var item4 = select4.value;
    if(item4 == '3'){
        document.getElementById('span_cost_4').innerHTML = '45 000 р'
    }else if(item4 == '2'){
        document.getElementById('span_cost_4').innerHTML = '30 000 р'
    }else if(item4 == '4'){
        document.getElementById('span_cost_4').innerHTML = '60 000 р'
    }else if(item4 == '5'){
        document.getElementById('span_cost_4').innerHTML = '75 000 р'
    }
}

let button1 = document.getElementById("button_header");
button1.onclick = function() {
    const el1 = document.getElementById('form_h3');
    el1.scrollIntoView({behavior: "smooth"});
};

let button2 = document.getElementById("button_conteiner_1");
button2.onclick = function() {
    const el2 = document.getElementById('form_h3');
    el2.scrollIntoView({behavior: "smooth"});
};
    
let button3 = document.getElementById("button_conteiner_2");
button3.onclick = function() {
    const el3 = document.getElementById('form_h3');
    el3.scrollIntoView({behavior: "smooth"});
};

let button4 = document.getElementById("button_conteiner_4");
button4.onclick = function() {
    const el4 = document.getElementById('form_h3');
    el4.scrollIntoView({behavior: "smooth"});
};

let button5 = document.getElementById("button_section_polet");
button5.onclick = function() {
    const el5 = document.getElementById('form_h3');
    el5.scrollIntoView({behavior: "smooth"});
};

let button6 = document.getElementById("button_kakPolet");
button6.onclick = function() {
    const el6 = document.getElementById('form_h3');
    el6.scrollIntoView({behavior: "smooth"});
};

let button7 = document.getElementById("button_section_security");
button7.onclick = function() {
    const el7 = document.getElementById('form_h3');
    el7.scrollIntoView({behavior: "smooth"});
};

let button8 = document.getElementById("button_section_presents");
button8.onclick = function() {
    const el8 = document.getElementById('form_h3');
    el8.scrollIntoView({behavior: "smooth"});
};

let button9 = document.getElementById("button_conteiner_3");
button9.onclick = function() {
    const el9 = document.getElementById('form_h3');
    el9.scrollIntoView({behavior: "smooth"});
};