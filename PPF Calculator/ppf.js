function calculatePPF() {
    let p = parseFloat(document.getElementById('principal').value);
    let r = parseFloat(document.getElementById('rate').value);
    let y = parseFloat(document.getElementById('years').value);

    let maturityAmount = p * (((Math.pow((1+r),y)-1)/r)*(1 + r));

    let totalAmount = p * y ;

    let totalInterest = maturityAmount - totalAmount;



    
    


    document.getElementById ('totalAmount').textContent = `₹${totalAmount.toFixed(2)}`
    document.getElementById ('totalInterest').textContent = `₹${totalInterest.toFixed(2)}`
    document.getElementById ('maturityAmount').textContent =` ₹${maturityAmount.toFixed(2)}`

}

