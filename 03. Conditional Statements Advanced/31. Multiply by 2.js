function mBy2(input) {
    let index = 0;
    let num = Number(input[index]);
    index++;
    let result = 0;
    while (index <= input.length) {
         if(num < 0){
          console.log('Negative number!');
          index++;
          continue;
         }
        result = num * 2;
        
        num = Number(input[index]);
        index++;
        console.log(`Result: ${result.toFixed(2)}`);   
    }
}
mBy2(['12', '43.2144', '12.3', '543.23', '-20'])