function canDonate(donor, recipient) {
    const regex = /^(A|B|AB|O)([+-])$/;

    const [, donorLetter, donorRh] = donor.match(regex);
    const [, recipientLetter, recipientRh] = recipient.match(regex);

    let letterCompatible = false;
    if (donorLetter === "O") {
        letterCompatible = true;
    } else if (donorLetter === "A") {
        letterCompatible = recipientLetter === "A" || recipientLetter === "AB";
    } else if (donorLetter === "B") {
        letterCompatible = recipientLetter === "B" || recipientLetter === "AB";
    } else if (donorLetter === "AB") {
        letterCompatible = recipientLetter === "AB";
    }

    const rhCompatible =
        donorRh === "-" || (donorRh === "+" && recipientRh === "+");

    return letterCompatible && rhCompatible;
}

const x = canDonate("A+", "A+");
x;