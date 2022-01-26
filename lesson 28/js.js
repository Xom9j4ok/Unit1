function if12(){
        let a = +prompt("Введите первое число:");
        let b = +prompt("Введите второе число:");
        let c = +prompt("Введите третье число:");
        if ((a<b)&&(a<c)){
            alert("найменшее" + a )
        }
        if ((b<a)&&(b<c)){
            alert("найменшее" + b )
        }
        if ((c<a)&&(c<b)){
            alert("найменшее" + c )
        }
}
function if13(){
        let a = +prompt("Введите первое число:");
        let b = +prompt("Введите второе число:");
        let c = +prompt("Введите третье число:");
        if ((a<b)&&(a<c)){
            alert("средне" + b )
        }
        if ((b<a)&&(b<c)){
            alert("средне" + a )
        }
        if ((c<a)&&(c<b)){
            alert("средне" + c )
        }
}
function if14(){
    let a = +prompt("Введите первое число:");
        let b = +prompt("Введите второе число:");
        let c = +prompt("Введите третье число:");
        if ((a<b)&&(a<c)){
            alert("найменшее" + a )
        }
        if ((b<a)&&(b<c)){
            alert("найменшее" + b )
        }
        if ((c<a)&&(c<b)){
            alert("найменшее" + c )
        }
        else{
            if ((a>b)&&(a>c)){
                alert("найбольшее" + a )
            }
            if ((b>a)&&(b>c)){
                alert("найбольшее" + b )
            }
            if ((c>a)&&(c>b)){
                alert("найбольшее" + c )
            }
        }
}

function if15(){
    let a = +prompt("Введите первое число:");
    let b = +prompt("Введите второе число:");
    let c = +prompt("Введите третье число:");
    if ((a<b)&&(a<c)){
        alert("средне" + b )
    }
    if ((b<a)&&(b<c)){
        alert("средне" + a )
    }
    if ((c<a)&&(c<b)){
        alert("средне" + c )
    }
    else{
        if ((a>b)&&(a>c)){
            alert("найбольшее" + a )
        }
        if ((b>a)&&(b>c)){
            alert("найбольшее" + b )
        }
        if ((c>a)&&(c>b)){
            alert("найбольшее" + c )
        }
    }
    alert(a + b. b + c)
    }

    function if16(){
        let a = +prompt("Введите первое число:");
        let b = +prompt("Введите второе число:");
        let c = +prompt("Введите третье число:");
        if ((a <= b) & (b <= c)) {
            a = a * 2;
            b = b * 2;
            c = c * 2;
            alert(a)
            alert(b)
            alert(c)
        }
        else {
            a = a * (-1);
            b = b * (-1);
            c = c * (-1);
            alert(a)
            alert(b)
            alert(c)
        }
        }
function if17(){
        let a = +prompt("Введите первое число:");
        let b = +prompt("Введите второе число:");
        let c = +prompt("Введите третье число:");
        if  ((a <= b) & (b <= c) || (a >= b) & (b >= c)) {
            a = a * 2;
            b = b * 2;
            c = c * 2;
            alert(a)
            alert(b)
            alert(c)
        }
        else {
                a = a * (-1);
                b = b * (-1);
                c = c * (-1);
            alert(a)
            alert(b)
            alert(c)
        }
        }
function if18(){
            let a = +prompt("Введите первое число:");
            let b = +prompt("Введите второе число:");
            let c = +prompt("Введите третье число:");
        if (a == b){
        alert(3)
        }
        else{ 
            if (a == c){
        alert(2)
            }
        }
        
        alert(1)
         
              
        
}

function case1(){
    let a = +prompt("Введите цыфру недели")
    switch(a) {
    case (1):  
        alert("Понеділок")
    break
    case (2):  
        alert("Вівторок")
    break
    case (3):  
        alert("Середа")
    break
    case (4):  
        alert("Четверг")
    break
    case (5):  
        alert("П'ятниця")
    break
    case (6):  
        alert("Суббота")
    break
    case (7):  
        alert("Неділя")
    break
    }
}

function case2(){
    let a = +prompt("Введите цыфру недели")
    switch(a) {
    case (1):  
        alert("Плохо")
    break
    case (2):  
        alert("неудовотворительно")
    break
    case (3):  
        alert("удовотворительно")
    break
    case (4):  
        alert("Хорошо")
    break
    case (5):  
        alert("Отлично")
    break
    case (5<a):  
        alert("Ошибка")
    break
    
}
}
function case3(){
    let a = +prompt("Введите цыфру недели")
    switch(a) {
    case (12, 1, 2):  
        alert("Зима")
    break
    case (3, 4, 5):  
        alert("Весна")
    break
    case (6, 7, 8):  
        alert("Лето")
    break
    case (9, 10, 11):  
        alert("Осень")
    break
    default:
        alert("Ошибка")
    }
    switch(a){
        case (1):  
        alert("Январь")
    break
    case (2):  
        alert("Февраль")
    break
    case (3):  
        alert("Март")
    break
    case (4):  
        alert("Апрель")
    break
    case (5):  
        alert("Май")
    break
    case (6):  
        alert("Июнь")
    break
    case (7):  
        alert("Июль")
    break
    case (8):  
        alert("Август")
    break
    case (9):  
        alert("Сентябрь")
    break
    case (10):  
        alert("Середа")
    break
    case (11):  
        alert("Четверг")
    break
    case (12):  
        alert("П'ятниця")
    break;
    default:
        alert("Ошибка")
    }
}
function case4(){
    let a = +prompt("Введите цыфру недели")
    switch(a) {
    case (1):  
        
    case (3):  
        
    case (5):  
        
    case (7):  
        
    case (8):  
        
    case (10):  
        
    case (12):  
    break
    alert("В месяце 31 дней")
    }
    switch(a) {
        case (4):  
            
        case (6):  
            
        case (9):  
            
        case (11):  
         
        break
        alert("В месяце 30 дней")
        }
        switch(a) {
            case (2):  
                
            break
            alert("В месяце 28 дней")
            }
}
function case5(){
    let a = +prompt("Введите цыфру")
    let b = +prompt("Введите цыфру")
    let z = +prompt("Введите способ")
    switch(z) {
    case (1):  
        alert(a+b)
        break;  
    case (2):  
        alert(a-b)
        break;
    case (3):  
        alert(a*b)
        break
    case (4):  
        alert(a/b)
    break
    default:
        alert("Error")
        break
    }
}
function case6(){
    let a = +prompt("Единицу длинны")
    let b = +prompt("Введите цыфру")
    
    switch(a) {
    case (1):  
        alert(b/10 + "m")
        break;  
    case (2):  
        alert(b*1000 + "m")
        break;
    case (3):  
        alert(b + "m")
        break
    case (4):  
        alert(b/1000 + "m")
    break
    case (5):  
        alert(b/100 + "m")
    break
    default:
        alert("Error")
        break
    }
}
function case7(){
    let a = +prompt("Единицу массы")
    let b = +prompt("Введите цыфру")
    
    switch(a) {
    case (1):  
        alert(b + "kg")
        break;  
    case (2):  
        alert(b*1000000 + "kg")
        break;
    case (3):  
        alert(b/1000 + "kg")
        break
    case (4):  
        alert(b*1000 + "kg")
    break
    case (5):  
        alert(b*100 + "kg")
    break
    default:
        alert("Error")
        break
    }
}