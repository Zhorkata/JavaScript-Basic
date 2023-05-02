function housePainting(input) {
    //green paint 1 liter = 3.4m2
    //red paint 1 liter = 4.3m2
    //wall1 = x * 4
    //front door w = 1.2m * 2; h = 2m * 2
    //wall2 = x and y
    //side wall window1 = 1.5m * 4
    //side wall window2 = 1.5m * 4
    //roof = 2rectangles x and y  AND equilateral triangles = x and h
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);
    //walls
    let sideWall = x * y;
    let window = 1.5 * 1.5;//2.25
    let bothSides = 2 * sideWall - 2 * window;//115.5
    let backWall = x * x;//36
    let entry = 1.2 * 2;//2.4
    let frontBack = 2 * backWall - entry;//69.6
    let totalArea1 = bothSides + frontBack;//185.1m2
    let greenPaint = totalArea1 / 3.4;//54.44117647058823
    //roof
    let rectangles = 2 * (x * y);//120
    let triangles = 2 * (x * h / 2);//31.200000000000003
    let totalArea2 = rectangles + triangles;//151.2
    let redPaint = totalArea2 / 4.3;//35.16279069767442
    console.log(greenPaint.toFixed(2))
    console.log(redPaint.toFixed(2))
}
housePainting(["10.25", "15.45", "8.88"])