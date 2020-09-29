// Select color input
// Select size input
let pickColor = document.getElementById('colorPicker');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let sizePicker = document.getElementById('sizePicker');
let canvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event){
    event.preventDefault();
    makeGrid(height.value, width.value);
});

// create makeGrid function
function makeGrid(height, width) {
canvas.innerHTML = "";
for (let i=0; i<height; i++) {
    let row = canvas.insertRow(i);
    for (j=0; j<width; j++) {
        let column = row.insertCell(j);
        column.style.backgroundColor = 'white';
        //sets the background to white to execute the following if statement
        column.addEventListener('click', function(colourEvent) {
        if (column.style.backgroundColor !== 'white') {
            column.style.backgroundColor = 'white';
           }
           else {
              column.style.backgroundColor = pickColor.value;
           }
        });
    }
}
}
