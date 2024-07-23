document.querySelectorAll('input[type="radio"]').forEach
    (inputNumber => {
        inputNumber.onpoint = () => {
            if (inputNumber.value.length > inputNumber.maxlegth)
                inputNumber.value = inputNumber.value.slice(0, inputNumber.maxlegth);
        };
    });

let loanAmount = document.getElementById('amount');
console.log(loanAmount);

let loanInterest = document.getElementById('interest');
let loanTenure = document.getElementById('loantenure');
let calculate = document.getElementById('calculate');

calculate.onclick = (e) => {
    let isYear = document.getElementById('year').checked;
    let isMonth = document.getElementById('month').checked;
    let noOfMonths = 0;

    if (isYear == "" && isMonth == "") {
        alert('Please select loan tenure type-> Month or year');
    }else{
        if(isYear== true){
            noOfMonths = loanTenure.value * 12;

        }else{
            noOfMonths = loanTenure.value;
        }
        let r = parseFloat(loanInterest.value)/12/100;
        let p = loanAmount.value;
        let n = noOfMonths;

        //formula EMI = (P*r*(1+r)^n)/((1+r)^n-1)
        let emi = (p * r * Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
        let totalInterest = (emi * n) -p;
        let totalPayment = totalInterest + parseFloat(p);
        
        document.getElementById('emi').innerHTML = '$' + Math.round(emi);
        document.getElementById('totalInterest').innerHTML = '$' + Math.round(totalInterest);
        document.getElementById('totalPayment').innerHTML = '$' + Math.round(totalPayment);


    }

}