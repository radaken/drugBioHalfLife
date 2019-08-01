"use sctrict";




var metricPrefix = document.getElementById('metricPrefix').innerHTML;
var result = document.getElementById('result').innerHTML;
//var resultDate = document.getElementById('resultDate').innerHTML;

var submitButton = document.getElementById('submitButton');

var metricPrefixLower = Math.pow(10,3);
var metricPrefixHigher = Math.pow(10,-3);

function count() {
    var substance = document.getElementById('substance').value;
    var quantity = document.getElementById('quantity').value;
    var metabolism = document.getElementById('metabolism').value;    
    var halfLife = 0; //hours
    var percentage = 1;
    var concentrationInPee = quantity * metricPrefixLower;
    var hoursLeft = 0;
    var expressTestTriggerZone = 0; //nanograms
    var expressTestResult = true;  
    switch (substance) {
        case 'MDMA':
            halfLife = 7.5;
            expressTestTriggerZone = 500;
            break;
            
        case 'Амфетамин':        
            if (metabolism === 'Молодой') halfLife = 8;
            if (metabolism === 'Средний') halfLife = 19;
            if (metabolism === 'Стариковский') halfLife = 30;
            expressTestTriggerZone = 1000;
            break;
            
         case 'Мефедрон':        
            halfLife = 0.4;
            break;
            
//!!!!!!!!! Обратить внимание на среднее содержание КБД (t1/2 = 9ч) и ТГК (t1/2 = 2-3ч) в mj и гашише
            
         case 'Гашиш':        
            halfLife = 10;
            expressTestTriggerZone = 50;
            break;
            
        case 'Героин':        
            halfLife = 6;
            expressTestTriggerZone = 300;
            break;
            
        default: 
            alert("Выберите вещество!");
            break;
    }
    
    for (var i = 1 ; expressTestResult ; i++) {
        hoursLeft = i * halfLife;
        concentrationInPee *= 0.5;
        if (concentrationInPee < expressTestTriggerZone) expressTestResult = false;
        
    }
    
    
    /*
- для амфетамина - 1000 нг/мл;
- марихуаны - 50 нг/мл;
- морфина/героина - 300 нг/мл;
- кокаина - 300 нг/мл;
- метамфетамина - 500 нг/мл;
- барбитуратов - 300 нг/мл;
- бензодиазепина - 300 нг/мл;
- фенциклидина - 25 нг/мл;
- метадона - 300 нг/мл;
- экстази(мдма) - 500 нг/мл.
    */
    
    console.log('Чтобы экспресс-тест не реагировал нужно ждать ' + hoursLeft + ' часов после употребления');
    
}

submitButton.addEventListener("click", count);