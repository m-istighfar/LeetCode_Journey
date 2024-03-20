/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) return 'Zero';

    const belowTwenty = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 
                         'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const thousands = ['', 'Thousand', 'Million', 'Billion'];

    function toWords(n) {
        if (n === 0) return '';
        else if (n < 20) return belowTwenty[n] + ' ';
        else if (n < 100) return tens[Math.floor(n / 10)] + ' ' + toWords(n % 10);
        else return belowTwenty[Math.floor(n / 100)] + ' Hundred ' + toWords(n % 100);
    }

    let output = '', i = 0;
    while (num > 0) {
        if (num % 1000 !== 0){
            output = toWords(num % 1000) + thousands[i] + ' ' + output;}
        num = Math.floor(num / 1000);
        i++;
    }

    return output.trim();
};
