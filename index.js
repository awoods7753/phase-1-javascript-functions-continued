function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun();

const mondayWork = function(activity2 = 'go to the office'){
    return `This Monday, I will ${activity2}.`;
}

mondayWork();


function wrapAdjective(flair) {
    return function (single = "special") {
        return `You are ${flair}${single}${flair}!`
    }
}

wrapAdjective("*")("a hard worker");
wrapAdjective("||")("a dedicated programmer");