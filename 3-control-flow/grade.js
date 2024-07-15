let marks = 1

switch (true) {
    case marks >= 80:
        console.log(" grade is A", marks);
        break;
    case marks >= 60:
        console.log(" grade is B", marks);
        break;
    case marks >=50:
        console.log(" grade is C", marks);
        break;
    case marks >=35:
        console.log(" grade is D", marks);
        break;
    case marks <=34:
        console.log(" grade is f", marks);
        break;

    default:
        break;
}