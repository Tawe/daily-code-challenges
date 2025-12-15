function titleCase(title) {
    return title.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());  
}

const x = titleCase("AvOcAdO tOAst fOr brEAkfAst")
x;