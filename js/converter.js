document.addEventListener('DOMContentLoaded', function() {
    const decimalInput = document.querySelector('input[name="dec"]');
    const binaryInput = document.querySelector('input[name="bin"]');
    const octalInput = document.querySelector('input[name="oct"]');
    const hexInput = document.querySelector('input[name="hex"]');

    function updateValues(base, value) {
        let decimalValue = parseInt(value, base);

        if (isNaN(decimalValue)) {
            decimalValue = 0;
        }

        decimalInput.value = decimalValue;
        binaryInput.value = decimalValue.toString(2);
        octalInput.value = decimalValue.toString(8);
        hexInput.value = decimalValue.toString(16).toUpperCase();
    }

    decimalInput.addEventListener('input', function() {
        updateValues(10, decimalInput.value);
    });

    binaryInput.addEventListener('input', function() {
        updateValues(2, binaryInput.value);
    });

    octalInput.addEventListener('input', function() {
        updateValues(8, octalInput.value);
    });

    hexInput.addEventListener('input', function() {
        updateValues(16, hexInput.value);
    });
});
