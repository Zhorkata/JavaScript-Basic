function past(input){
    let money = Number(input[0]);
    let years = Number(input[1]);

    let age = 18;


    for(let i = 1800; i <= years;i++){
        if(i > 1800){
            age++;
        }
        if(i % 2 === 0){
            money -= 12000;//88000.15  
        }else{
            money -= 12000 + 50 * age ;//87050.15 
        }
    }
    if(money >= 0){ //-12399.85
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    }else{
        console.log(`He will need ${Math.abs(money.toFixed(2))} dollars to survive.`);
    }
}
past(['100000.15', '1808'])