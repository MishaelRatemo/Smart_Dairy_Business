let data = document.getElementById('data');

const val1 = document.getElementById("shedA");
const val2 = document.getElementById("shedB");
const val3 = document.getElementById("shedC");
const val4 = document.getElementById("shedD");


data.addEventListener('submit',dailystats);

    function dailystats(e){
        e.preventDefault();  
            let res=parseFloat(val1.value)+parseFloat(val2.value)+parseFloat(val3.value)+parseFloat(val4.value);

                 console.log(res);
                 console.log("      ");
                 document.getElementById('heading').innerHTML="Todays Collection";
                 document.getElementById('thleft').innerHTML=" Shed ";
                 document.getElementById('thright').innerHTML="NO. of Lt";                 
                 document.getElementById('shed1').innerHTML=" A ";
                 document.getElementById('shed1val').innerHTML=val1.value;
                 document.getElementById('shed2').innerHTML=" B ";
                 document.getElementById('shed2val').innerHTML=val2.value;
                 document.getElementById('shed3').innerHTML=" C ";
                 document.getElementById('shed3val').innerHTML=val3.value;
                 document.getElementById('shed4').innerHTML=" D ";
                 document.getElementById('shed4val').innerHTML=val4.value;
                 document.getElementById('allsheds').innerHTML=" Totals ";
                 document.getElementById('totalsheds').innerHTML=res;

            }

data.addEventListener('submit',weeklyStats);

    function weeklyStats(){
        let units="  litres."
        let shedA= parseFloat(val1.value)*7;
             //display to html page
        document.getElementById('weeklyheading').innerHTML="WEEKLY STATS";        
        document.getElementById('description1').innerHTML="Shed A weekly ";        
        document.getElementById('value1').innerHTML=shedA;
        document.getElementById('units1').innerHTML=units;
            //display to console
        console.log("WEEKLY STATS");
        console.log("Shed A weekly collection : "+ shedA+ " Litres.");
        console.log("  ");

        let shedB= parseFloat(val2.value)*7;
        document.getElementById('description2').innerHTML="Shed B weekly ";        
        document.getElementById('value2').innerHTML=shedB;
        document.getElementById('units2').innerHTML=units;
        console.log("Shed B weekly collection : "+ shedB+ " Litres.");
        console.log("  ");

        let shedC= parseFloat(val3.value)*7;
        document.getElementById('description3').innerHTML="Shed C weekly ";        
        document.getElementById('value3').innerHTML=shedC;
        document.getElementById('units3').innerHTML=units;
        console.log("Shed C weekly collection : "+ shedC+ " Litres.");
        console.log("  ");

        let shedD= parseFloat(val4.value)*7;
        document.getElementById('description4').innerHTML="Shed A weekly ";        
        document.getElementById('value4').innerHTML=shedD;
        document.getElementById('units4').innerHTML=units;
        console.log("Shed D weekly collection : "+ shedD+ " Litres.");
        console.log("  ");


        console.log(" Totals from All Sheds");
        
        let totLitres = shedA+shedB+shedC+shedD;
        document.getElementById('wtotals').innerHTML=totLitres+" Litres."
        console.log(totLitres+" Ltr.");
    }

function getStats(){
    let rate = prompt("Enter rate in Ksh ",'30.0');
    let rates=parseFloat(rate);
    let totalProductionDaily= parseFloat(val1.value)+parseFloat(val2.value)+parseFloat(val3.value)+parseFloat(val4.value);
    let weeklyIncome= rates*totalProductionDaily*7;
    console.log(weeklyIncome);
    //jan summary
    let janProduction= totalProductionDaily*31;
    let janIncome= janProduction*rates;
    document.getElementById('janP').innerHTML=janProduction;
    document.getElementById('janI').innerHTML="Ksh. "+janIncome;
    //feb summary
    let febProduction=totalProductionDaily*29;
    let febIncome=febProduction*rates;
    document.getElementById('febP').innerHTML=febProduction;
    document.getElementById('febI').innerHTML="Ksh. "+febIncome;
    //March summary
    let marchProduction=totalProductionDaily*31;
    let marchIncome=marchProduction*rates;
    document.getElementById('marP').innerHTML=marchProduction;
    document.getElementById('marI').innerHTML="Ksh. "+marchIncome;
    // April summary
    let aprProd =totalProductionDaily*30;
    let aprIncome =aprProd*rates;
    document.getElementById('aprP').innerHTML=aprProd;
    document.getElementById('aprI').innerHTML="Ksh. "+aprIncome;
    //May summary
    let mayProd =totalProductionDaily*31;
    let mayIncome =mayProd*rates;
    document.getElementById('mayP').innerHTML=mayProd;
    document.getElementById('mayI').innerHTML="Ksh. "+mayIncome;
    //June summary 
    let junProd= totalProductionDaily*30;
    let junIncome= junProd*rates;
    document.getElementById('junP').innerHTML=junProd;
    document.getElementById('junI').innerHTML="Ksh. "+junIncome;
    //july summary
    let julyprod=totalProductionDaily*31;
    let julyIncome=julyprod*rates;
    document.getElementById('julP').innerHTML=julyprod;
    document.getElementById('julI').innerHTML="Ksh. "+julyIncome;
    //August summary
    let augProd=totalProductionDaily*31;
    let augIncome=augProd*rates;
    document.getElementById('augP').innerHTML=augProd;
    document.getElementById('augI').innerHTML="Ksh. "+augIncome;
    //September summary
    let sepProd= totalProductionDaily*30;
    let sepIncome=sepProd*rates;
    document.getElementById('sepP').innerHTML=sepProd;
    document.getElementById('sepI').innerHTML="Ksh. "+sepIncome;
    //Oct summary 
    let octProd = totalProductionDaily*31;
    let octIncome= octProd*rates;
    document.getElementById('octP').innerHTML=octProd;
    document.getElementById('octI').innerHTML="Ksh. "+octIncome;
    //November summary
    let novProd=totalProductionDaily*30;
    let novIncome=novProd*rates;
    document.getElementById('novP').innerHTML=novProd;
    document.getElementById('novI').innerHTML="Ksh. "+novIncome;
    // Dec summary
    let decProd= totalProductionDaily*31;
    let decIncome=decProd*rates;
    document.getElementById('decP').innerHTML=decProd;
    document.getElementById('decI').innerHTML="Ksh. "+decIncome;

    // Yearly income
    let incomeOverYear=janIncome+febIncome+marchIncome+aprIncome+mayIncome+junIncome+julyIncome+augIncome+sepIncome+octIncome+novIncome+decIncome;
    document.getElementById('yearlyincome').innerHTML="Ksh "+incomeOverYear;
    
}


