function generateSignature(name, title, company) {
    const first = name[0].toUpperCase();
    let prefix = "";
    
    if (first >= "A" && first <= "I") prefix = ">>";
    else if (first >= "J" && first <= "R") prefix = "--";
    else prefix = "::"; // S-Z
    
    return `${prefix}${name}, ${title} at ${company}`;
}

const x = generateSignature("Quinn Waverly", "Founder and CEO", "TechCo")