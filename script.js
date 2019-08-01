"use sctrict";




var metricPrefix = document.getElementById('metricPrefix').innerHTML;
var result = document.getElementById('result');
//var resultDate = document.getElementById('resultDate').innerHTML;

var submitButton = document.getElementById('submitButton');

var metricPrefixLower = Math.pow(10,3);
var metricPrefixHigher = Math.pow(10,-3);

function count() {
    var substance = document.getElementById('substance')[0].value;
    var quantity = document.getElementById('quantity').value;
    var metabolism = document.getElementById('metabolism')[0].value;    
    var halfLife = 0; //hours
    var percentage = 1;
    var concentrationInPee = quantity * metricPrefixLower;
    var hoursLeft = 0;
    var expressTestTriggerZone = 0; //nanograms
    var expressTestResult = true;  
    switch (substance) {
        case 'MDMA':
            halfLife = 7.5;
            if (metabolism === 'Молодой') halfLife = 6;
            if (metabolism === 'Средний') halfLife = 7.5;
            if (metabolism === 'Стариковский') halfLife = 8;
            expressTestTriggerZone = 500;
            break;
            
        case 'Амфетамин':
            halfLife = 19;
            if (metabolism === 'Молодой') halfLife = 8;
            if (metabolism === 'Стариковский') halfLife = 30;
            expressTestTriggerZone = 1000;
            break;
            
         case 'Мефедрон':        
            halfLife = 0.4;
            expressTestTriggerZone = 300;
            break;
            
//!!!!!!!!! Обратить внимание на среднее содержание КБД (t1/2 = 9ч) и ТГК (t1/2 = 2-3ч) в mj и гашише
            
         case 'Гашиш':        
            halfLife = 10;
            expressTestTriggerZone = 50;
            break;
            
        case 'Героин':        
            halfLife = 0.5;
            expressTestTriggerZone = 300;
            break;
            
        case 'Морфин':        
            halfLife = 6;
            expressTestTriggerZone = 300;
            break;
    
        case 'Кокаин':        
            halfLife = 1.1;
            if (metabolism === 'Молодой') halfLife = 0.7;
            if (metabolism === 'Стариковский') halfLife = 1.5;
            expressTestTriggerZone = 300;
            break;
            
        case 'Барбитураты' :        
            halfLife = 82;
            if (metabolism === 'Молодой') halfLife = 24;
            if (metabolism === 'Стариковский') halfLife = 140;
            expressTestTriggerZone = 500;
            break;
            
        case 'Метамфетамин':        
            halfLife = 17.5;
            if (metabolism === 'Молодой') halfLife = 5;
            if (metabolism === 'Стариковский') halfLife = 30;
            expressTestTriggerZone = 300;
            break;
        
        case 'Xanax (бензодиазепин)':        
            halfLife = 11;
            if (metabolism === 'Молодой') halfLife = 6;
            if (metabolism === 'Стариковский') halfLife = 27;
            expressTestTriggerZone = 300;
            break;
            
        case 'ЛСД':        
            halfLife = 4;
            if (metabolism === 'Молодой') halfLife = 3;
            if (metabolism === 'Стариковский') halfLife = 5;
            expressTestTriggerZone = 300;
            break;
            
        case 'Лирика (прегабалин)':        
            halfLife = 5.75;
            if (metabolism === 'Молодой') halfLife = 5;
            if (metabolism === 'Стариковский') halfLife = 6.5;
            expressTestTriggerZone = 300;
            break;
            
        case 'GHB (оксибутират, масла)':        
            halfLife = 0.75;
            if (metabolism === 'Молодой') halfLife = 0.5;
            if (metabolism === 'Стариковский') halfLife = 1;
            expressTestTriggerZone = 300;
            break;
            
        case 'Габапентин (Конвалис, Катэна)':        
            halfLife = 6;
            if (metabolism === 'Молодой') halfLife = 5;
            if (metabolism === 'Стариковский') halfLife = 7;
            expressTestTriggerZone = 300;
            break;
            
        case 'Фенциклидин (PCP, ангельская пыль)':        
            halfLife = 11;
            if (metabolism === 'Молодой') halfLife = 7;
            if (metabolism === 'Стариковский') halfLife = 48;
            expressTestTriggerZone = 25;
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
- для амфетамина - 1000 нг/мл; +++++++++++++++
- марихуаны - 50 нг/мл; ??????????????????????
- морфина/героина - 300 нг/мл; +++++++++++++++++
- кокаина - 300 нг/мл; +++++++++++++++++++
- метамфетамина - 500 нг/мл; +++++++++++++++
- барбитуратов - 300 нг/мл; ++++++++++++++++
- бензодиазепина - 300 нг/мл; +++++++++++++
- фенциклидина - 25 нг/мл; ++++++++++++
- метадона - 300 нг/мл;
- экстази(мдма) - 500 нг/мл.
    */
    
    result.innerHTML = ' Чтобы экспресс-тест не реагировал нужно ждать ' + hoursLeft + ' часов после употребления (' + hoursLeft / 24 + ' дней)';
    
}

submitButton.addEventListener("click", count);