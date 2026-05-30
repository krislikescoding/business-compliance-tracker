function calculateScore(){
    let resultBox = document.getElementById("result")
    let risklvlBox = document.getElementById("risk-level")
    const weights = {
        "privacy-policy": 20,
        "submit-data-complaint": 20,
        "data-complaints30": 15,
        "data-processing": 15,
        "storing-data-securely": 10,
        "cookie-notice": 10,
        "data-usage": 5,
        "child-protection": 5,
    }
    let score = 0;
    for (let id in weights) {
        if(document.getElementById(id).checked) {
            score += weights[id];
        }
    }
    resultBox.innerHTML = "Your business is " + score + "% compliant with current UK data laws"
    if (score == 100) {
        risklvlBox.innerHTML = "Perfect"
    }
    else if (score >= 80) {
        risklvlBox.innerHTML = "Low Risk"
    }
    else if (score >= 60) {
        risklvlBox.innerHTML = "Medium Risk"
    }
    else if (score >= 40) {
        risklvlBox.innerHTML = "High Risk"
    }
    else if (score >= 20) {
        risklvlBox.innerHTML = "Critical"
    }
    else if (score >= 1) {
        risklvlBox.innerHTML = "Severe"
    }
    else {
        risklvlBox.innerHTML = "No compliance measures in place"
    }

}