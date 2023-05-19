function animals(input) {
    let type = input[0];

    switch (type) {
        case "dog":
            console.log("mammal"); break;
        case "crocodile"://there is no need break here
        case "tortoise":
        case "snake":
            console.log("reptile"); break;
        default: console.log("unknown"); break;
    }
}
animals(["cat"])