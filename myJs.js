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
                 document.getElementById('dstats').innerHTML=res;

            }
            //document.getElementById('heading').innerHtml=res;

data.addEventListener('submit',weeklyStats);
    function weeklyStats(){
        let units="  litres."
        let shedA= parseFloat(val1.value)*7;
             //display to html page
        document.getElementById('weeklyheading').innerHTML="WEEKLY STATS";        
        document.getElementById('description1').innerHTML="Shed A weekly collection";        
        document.getElementById('value1').innerHTML=shedA;
        document.getElementById('units1').innerHTML=units;
            //display to console
        console.log("WEEKLY STATS");
        console.log("Shed A weekly collection : "+ shedA+ " Litres.");
        console.log("  ");

        let shedB= parseFloat(val2.value)*7;
        document.getElementById('description2').innerHTML="Shed B weekly collection";        
        document.getElementById('value2').innerHTML=shedB;
        document.getElementById('units2').innerHTML=units;
        console.log("Shed B weekly collection : "+ shedB+ " Litres.");
        console.log("  ");


        let shedC= parseFloat(val3.value)*7;
        document.getElementById('description3').innerHTML="Shed C weekly collection";        
        document.getElementById('value3').innerHTML=shedC;
        document.getElementById('units3').innerHTML=units;
        console.log("Shed C weekly collection : "+ shedC+ " Litres.");
        console.log("  ");

        let shedD= parseFloat(val4.value)*7;
        document.getElementById('description4').innerHTML="Shed A weekly collection";        
        document.getElementById('value4').innerHTML=shedD;
        document.getElementById('units4').innerHTML=units;
        console.log("Shed D weekly collection : "+ shedD+ " Litres.");
        console.log("  ");


        console.log(" Totals from All Sheds");
        
        let totLitres = shedA+shedB+shedC+shedD;
        document.getElementById('wtotals').innerHTML=totLitres+" Litres."
        console.log(totLitres+" Ltr.");


    }

/*
    function dailycollection(){
        data.addEventListener('submit', function(event){
            event.preventDefault();
            
            let val1 = document.getElementById("shedA").value;
        let val2 = document.getElementById("shedB").value;
        let val3 = document.getElementById("shedC").value;
        let val4 = document.getElementById("shedD").value;
        
        let results =val1+val2+val3+val4
        console.log(results)
        });
        

    }
    */

