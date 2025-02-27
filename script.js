const container = document.querySelector('.container');

function createCanvas(dimension = 16) {
    for (i = 0; i < dimension; i++) {
        let rowContainer = document.createElement('div')
        container.appendChild(rowContainer);
        rowContainer.classList.add('rowContainer');
        for (j = 0; j < dimension; j++) {
            let box = document.createElement('div');
            box.classList.add('box')
            box.style.cssText =
                "border: 1px solid black; flex: 1 1 auto;";
            rowContainer.appendChild(box);
        }
    }
    let boxList = document.querySelectorAll('.box');
    boxList.forEach((box) => {
        box.addEventListener('mouseenter', function paint(e) {
            if (e.target.classList.contains('red') || e.target.classList.contains('green') || e.target.classList.contains('blue')) {

            }
            else {
                let color = Math.floor(Math.random() * 3) + 1;
                switch (color) {
                    case 1:
                        e.target.classList.add('red');
                        break;
                    case 2:
                        e.target.classList.add('green');
                        break;
                    default:
                        e.target.classList.add('blue');
                }
            }

        });
    })
}
createCanvas();

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    userEnteredDimension = +prompt('How many boxes do you want in a row/column?');
    if (userEnteredDimension > 0 && Number.isInteger(userEnteredDimension)) {
        if(userEnteredDimension > 100){
            alert('Please enter a number less than 100');
        }
        else{
        container.textContent = "";
        createCanvas(userEnteredDimension);}
    }
    else {
        alert('Please enter a valid dimension.');
    }
})

