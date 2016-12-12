function solve(inputArr) {
    let splitExp = /\?|&/;
    let regExExp = /%20|[+*-,._]/;

    let result = [];

    for (let input of inputArr) {
        let arr = input.split(splitExp);
        for (let element of arr) {
            let temp = element.split("=");
            console.log(temp);
            for (let i = 0; i < temp.length; i++) {
                if (temp[0] != "url") {
                    temp[i] = temp[i].replace(regExExp, "");
                }
            }
            for (let i = 0; i < temp.length; i++) {
                if (temp[0] && temp[1]) {
                    if (result[temp[0]]) {

                    }
                }
            }
        }
    }
}

solve([
    "foo=%20foo&value=+val&foo+=5+%20+203",
    "foo=poo%20&value=valley&dog=wow+",
    "url=https://softuni.bg/trainings/coursesinstances/details/1070",
    "https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php"
]);