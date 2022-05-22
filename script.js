function palindrome_check() {
    var myVar = document.getElementById('input').value;
    var reg = /[\W_]/g;
    var smallstring = myVar.toLowerCase().replace(reg, '');

    var reversed = smallstring.split('').reverse().join('');
    if (reversed === smallstring) {
        document.getElementById('prog').innerHTML = ' It is palindrome.';
    } else {
        document.getElementById('prog').innerHTML =
            'It is not palindrome. ';
    }

}