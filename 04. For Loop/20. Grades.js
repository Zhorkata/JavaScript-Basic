function grades(input) {
    let gradesCount = Number(input[0]);
    
    let grades1 = 0;
    let grades2 = 0;
    let grades3 = 0;
    let grades4 = 0;

    let grades = 0;

    for (let i = 1; i < input.length; i++) {

        let curGrade = Number(input[i]);
        if(curGrade <= 2.99 && curGrade >= 2){
            grades1++;
            grades += curGrade;//35.62
        }else if(curGrade <= 3.99 && curGrade >= 3){
            grades2++;
            grades += curGrade;//22.68

        } else if(curGrade <= 4.99 && curGrade >= 4){
            grades3++;
            grades += curGrade;//40.62


        }else if(curGrade >= 5){
            grades4++;
            grades += curGrade;//28.68

        }
    }
        let avgGrades = grades/gradesCount;
        console.log(`Top students: ${(grades4/gradesCount * 100).toFixed(2)}%`);
        console.log(`Between 4.00 and 4.99: ${(grades3/gradesCount * 100).toFixed(2)}%`);
        console.log(`Between 3.00 and 3.99: ${(grades2/gradesCount * 100).toFixed(2)}%`);
        console.log(`Fail: ${(grades1/gradesCount * 100).toFixed(2)}%`);
        console.log(`Average: ${avgGrades.toFixed(2)}`);
}
grades([6,
    2,
    3,
    4,
    5,
    6,
    2.2
    
    
])