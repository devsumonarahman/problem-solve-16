// convert feet to mile 

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
};
var result = feetToMile(2000);
console.log(result);


// wood Calculator

function woodCalculator(chair , table , bed){
    var total = 1*chair + 5*table + 3*bed ;
    return total
   
}
var totalWood = woodCalculator(10,15,5);
console.log(totalWood);

// brick calculation
 function brickCalculator(n){
    var totalBrick = 0;

        if (n<=10){
             totalBrick = n*15*1000;

        }
        else if (n<=20){
             var firstPortion = 10*15*1000;
             var reminderPorton = (n-10)*12*1000;
             totalBrick = firstPortion + reminderPorton;
        }
        else{
            var secondPortion = 20*12*1000;
            var secondReminder = (n-20)*10*1000;
            totalBrick = secondPortion + secondReminder;
        }
        return totalBrick;
  
   
    };
    var result = brickCalculator(40);
    console.log(result);

    // tinyFriend

    var tinyFriend = ['shema' , 'bina' , 'tina' , 'dina', 'mim' ];

    var tiny = tinyFriend[0];
    for( var i = 0 ; i<tinyFriend.length; i++){
        var element = tinyFriend[i];
        if (element<tiny){
            tiny = element;
        }
    }
    console.log("Small name is:",tiny);

    
    // with function

    function findName(tinyFriend){
         var tiny = tinyFriend[0];
    for( var i = 0 ; i<tinyFriend.length; i++){
        var element = tinyFriend[i];
        if (element<tiny){
            tiny = element;
        }
    }
    return tiny;

    }

     var tinyarray = ['she' , 'bina' , 'tin' , 'dina', 'mim', ];
    var result = findName(tinyarray);
    console.log("small name:" , result);

 

