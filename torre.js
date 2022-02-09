const towers = document.getElementsByClassName("tower");
console.log(towers);

const discos = document.getElementsByClassName("disk");
console.log(discos);

for (let i = 0; i < discos.length; i++) {
    discos[i].addEventListener('click', event => {
        if (discos[i] === towers[0].lastElementChild ||
            discos[i] === towers[1].lastElementChild ||
            discos[i] === towers[2].lastElementChild) {
            const tDisk = event.currentTarget;
            const diskWidth = tDisk.clientWidth;
            console.log(diskWidth);
            console.log(tDisk);
            turnDisk(tDisk, diskWidth);
            event.stopPropagation();
        };
    });
};

function turnDisk(tDisk, diskWidth){
    for(let x = 0; x < towers.length; x++){
        towers[x].addEventListener('click', event => {
            const tower = event.currentTarget;
            const lastDisckTwo = tower.lastElementChild;
            const lastDisckTwoWidth = lastDisckTwo.clientWidth;
            console.log(lastDisckTwoWidth);
            console.log(lastDisckTwo);
            console.log(tower);
            if (diskWidth < lastDisckTwoWidth) {
                tower.appendChild(tDisk);
            };
            event.stopPropagation();
        });
    }
}