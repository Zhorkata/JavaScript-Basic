function password(input){
    let index = 2;
    let name = input[0];
    let pass = input[1];

    let tempPass = input[index];
    index++;
    while(pass !== tempPass){
        let tempPass = input[index];
        index++;
        break;
    }
    console.log(`Welcome ${name}!`)
}
password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
