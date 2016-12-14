function solve(inputArr) {
    let splitExp = /\?|&/g;

    let result = new Map();

    for (let input of inputArr) {
        let arr = input.split(splitExp);
        for (let element of arr) {
            let temp = element.split("=");
            for (let i = 0; i < temp.length - 1 ; i++) {
                temp[i] = temp[i].replace(/%20|\+/g, " ").trim();
                temp[i+1] = temp[i+1].replace(/%20|\+/g, " ").trim();
                if (result.get(temp[i])) {
                    let m = result.get(temp[i]);
                    m.push(temp[i+1]);
                } else {
                    result.set(temp[i], [temp[i+1]]);
                }
            }
        }

        let string = "";

        for (let [key, elem] of result) {
            string += `${key}=[${elem.join(", ")}]`;
        }

        console.log(string);

        result = new Map();
    }
}

solve([
    "field=value1&field=value2&field=value3",
    "http://example.com/over/there?name=ferret",
    "url=https://softuni.bg/trainings/coursesinstances/details?https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php/1070?https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php",
    // "https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php?"
]);


