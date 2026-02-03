function groundhogDayPrediction(appearance) {
    return typeof appearance !== "boolean" ? "No prediction this year." : appearance === true ? "Looks like we'll have six more weeks of winter." : "It's going to be an early spring.";
}

const x = groundhogDayPrediction(false);
x;


