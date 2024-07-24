const container = document.querySelector('.container');
let dimension = 16;

for (i = 0; i < dimension; i++) {
    let rowContainer = document.createElement('div')
    container.appendChild(rowContainer);
    rowContainer.classList.add('rowContainer');
    for (j = 0; j < dimension; j++) {
        let box = document.createElement('div');
        box.style.cssText =
            "border: 1px solid black; flex: 1 1 auto;";
        rowContainer.appendChild(box);
    }
}