
var alarma1 = [];
var alarma2 = [];
var alarma3 = [];
var list_alarmas = [alarma1,alarma2,alarma3];

function actionButonCrear1(){

    
    if(validateInputs()){

        alert("Creando alarma");
        var alarma=getValuesTimer1();
        if(validateAlarmas(alarma,1)){
            alert("La alarma fue creada")
        }

       
    }else{
        alert("existen algunos campos vacios");
    } 

}//end of actionButonCrear1

function actionButonCrear2(){
    if(validateInputs()){

        alert("Creando alarma");
        var alarma=getValuesTimer2();
        if(validateAlarmas(alarma,2)){
            alert("La alarma fue creada")
        }
       
    }else{
        alert("existen algunos campos vacios");
    } 

}//end of actionButonCrear2

function actionButonCrear3(){
    if(validateInputs()){

        alert("Creando alarma");
        var alarma=getValuesTimer3();
        if(validateAlarmas(alarma,3)){
            alert("La alarma fue creada")
        }
       
    }else{
        alert("existen algunos campos vacios");
    } 

}//end of actionButonCrear2

function compareAlarmas(alarma_to_compare){

    var flag=false;

    for(var h =0; h < list_alarmas.length;h++){

        for(var i = 0; i<alarma_to_compare.length; i++){
                    

                    for(var j = 0; j< list_alarmas[0].length; j++){
                        
                        if(list_alarmas[0][j].day===alarma_to_compare[i].day){
                            
                            if (isFreeTime(alarma_to_compare[i].timeStart,list_alarmas[0][j].timeStart,list_alarmas[0][j].timeFinish) &&  isFreeTime(alarma_to_compare[i].timeFinish,list_alarmas[0][j].timeStart,list_alarmas[0][j].timeFinish) ) {
                                console.log("para: "+ alarma_to_compare[i].day + " no hay problema")
                            }else{
                                console.log("encontre una fecha que no entra que es "+alarma_to_compare[i].day);
                                flag=true;   
                            }//end of else 

                        }//end of if alarma1[j].day===alarma_to_compare[i].day
                    
                    }//end of for j 


                }//end of for i 

                if(flag){
                        console.log("tienes problemas con una fecha revisa");
                        return false;
                    }//end of if flag
                    else{
                        console.log("sin problemas");
                        return true;
                    }
    }//end of for h
}//end of compareAlarmas

function validateAlarmas(alarma_to_compare,index){

    var flag = false;
    
    switch (index){
        case 1:
        
            if (list_alarmas[0].length == 0){
                list_alarmas[0]=alarma_to_compare;
                flag=true;

            }else{

                if(compareAlarmas(alarma_to_compare)){
                    alert("alarma creada correctamente");
                    list_alarmas[0]=alarma_to_compare;
                    flag=true;
                }else{
                    alert("existe un problema con una alarma, no se pueden crear alarmas en el mismo intervalo de tiempo que otra alarma ");
                }
                
            }//end of else 
            
            break;
        case 2:
            if (list_alarmas[1].length == 0){
                list_alarmas[1]=alarma_to_compare;
                flag=true;
            }else{

                if(compareAlarmas(alarma_to_compare)){
                    //alert("alarma creada correctamente");
                    list_alarmas[1]=alarma_to_compare;
                    flag=true;
                }else{
                    alert("existe un problema con una alarma, no se pueden crear alarmas en el mismo intervalo de tiempo que otra alarma ");
                }
  
            }//end of else 
            break;
        case 3:
            if (list_alarmas[2].length == 0){
                list_alarmas[2]=alarma_to_compare;
                flag=true;
            }else{
                if(compareAlarmas(alarma_to_compare)){
                    //alert("alarma creada correctamente");
                    list_alarmas[2]=alarma_to_compare;
                    flag=true;
                }else{
                    alert("existe un problema con una alarma, no se pueden crear alarmas en el mismo intervalo de tiempo que otra alarma ");
                }
                
            }//end of else 
            break;
    }//end of switch

    return flag;

}//end of function

function isFreeTime(time_to_compare,time1,time2){

    var newtime=moment(time_to_compare,'h:mm');
    var beginningTime = moment(time1, 'h:mm');
    var endTime = moment(time2, 'h:mm');

    

    if (newtime.isAfter(beginningTime) && newtime.isBefore(endTime) ){
        return false; 
    }else{
        return true;
    }//end of else 

    //console.log(beginningTime.isAfter(endTime));

}//end of isFreeTime

function validateInputs(){
    var boole = false;
    
    if( document.getElementById("hora_inicio").value != ""
        && document.getElementById("hora_fin").value != ""
        && ( $('input:radio[name=monday]:checked').val() !=undefined
        || $('input:radio[name=tuesday]:checked').val() !=undefined
        || $('input:radio[name=wednesday]:checked').val() !=undefined
        || $('input:radio[name=thursday]:checked').val() !=undefined
        || $('input:radio[name=friday]:checked').val() !=undefined
        || $('input:radio[name=saturday]:checked').val() !=undefined
        || $('input:radio[name=sunday]:checked').val() !=undefined
            )){
        boole=true;
    }else{
        boole=false;
    }

    
    return boole;
}//end of validateInputs

function getValuesTimer1() {

    var alarma1 = [];
    var data = {};
    var days = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
    ];
    for (var i = 0; i < days.length; i++) {

        if ($('input:radio[name=' + days[i] + ']:checked').val() != undefined) {
            alarma1.push({
                day: $('input:radio[name=' + days[i] + ']:checked').val(),
                timeStart: document.getElementById("hora_inicio").value,
                timeFinish:document.getElementById("hora_fin").value
            });
        }//end of if 
    }//end of for

    console.log(alarma1);
    return alarma1;

} //end of function getValuesTimer1

function getValuesTimer2() {

    var alarma1 = [];
    var data = {};
    var days = [
        'monday_2',
        'tuesday_2',
        'wednesday_2',
        'thursday_2',
        'friday_2',
        'saturday_2',
        'sunday_2'
    ];
    for (var i = 0; i < days.length; i++) {

        if ($('input:radio[name=' + days[i] + ']:checked').val() != undefined) {
            alarma1.push({
                day: $('input:radio[name=' + days[i] + ']:checked').val(),
                timeStart: document.getElementById("hora_inicio_2").value,
                timeFinish:document.getElementById("hora_fin_2").value
            });
        }//end of if 
    }//end of for

    console.log(alarma1);
    return alarma1;

} //end of function getValuesTimer2

function getValuesTimer3() {

    var alarma1 = [];
    var data = {};
    var days = [
        'monday_3',
        'tuesday_3',
        'wednesday_3',
        'thursday_3',
        'friday_3',
        'saturday_3',
        'sunday_3'
    ];
    for (var i = 0; i < days.length; i++) {

        if ($('input:radio[name=' + days[i] + ']:checked').val() != undefined) {
            alarma1.push({
                day: $('input:radio[name=' + days[i] + ']:checked').val(),
                timeStart: document.getElementById("hora_inicio_3").value,
                timeFinish:document.getElementById("hora_fin_3").value
            });
        }//end of if 
    }//end of for

    console.log(alarma1);
    return alarma1;

} //end of function getValuesTimer3

