function Num(val){
    document.getElementById('result').value += val;
    
}

function equal(){
    let Input = document.getElementById('result').value;
    let Output = eval(Input);
    document.getElementById('result').value = Output;
}

function clr(){
    document.getElementById('result').value = '';
}

// Klavye olayları için dinleyici ekle
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = /[0-9\+\-\*\/\=,C,]/;

    if (validKeys.test(key)) {
        event.preventDefault(); // Tuşun varsayılan davranışını engelle
        if (key === 'C') {
            clr();
        } else if (key === '=') {
            equal();
        } else {
            Num(key);
        }
    }
});

// Enter tuşunu kontrol et
document.getElementById('result').addEventListener('keydown', function(event) {
    // if (event.key === 'Enter') {
    //     event.preventDefault(); // Enter'ın varsayılan davranışını engelle
    //     equal();
    // }
});