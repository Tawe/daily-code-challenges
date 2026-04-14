function getInitials(name) {
    let initials = "";
    let names = name.split(" ");
    for(let i = 0; i < names.length; i++) {
        initials += names[i][0].toUpperCase() + ".";
    }
    return initials;
}

console.log(getInitials("Tommy Millwood"));
console.log(getInitials("John Doe"));
console.log(getInitials("Jane Smith"));
console.log(getInitials("Jim Beam"));
console.log(getInitials("John Doe"));
console.log(getInitials("Jane Smith"));
console.log(getInitials("Jim Beam"));