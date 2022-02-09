const body = document.querySelector("body");

const hanoi = document.createElement("div");
hanoi.classList.add("hanoi");

const stck = document.createElement("div");
stck.classList.add("stock");

const tit = document.createElement("article");
tit.innerHTML = "<h2>Torres de Hanoi</h2><p>Seu desafio é atravessar todos os discos até a última torre, mas sem mover mais que um disco, ou por um maior sobre um menor. Boa sorte!</p>"

const disk1 = document.createElement("div");
disk1.classList.add("disk");
disk1.classList.add("d1");

const disk2 = document.createElement("div");
disk2.classList.add("disk");
disk2.classList.add("d2");

const disk3 = document.createElement("div");
disk3.classList.add("disk");
disk3.classList.add("d3");

const disk4 = document.createElement("div");
disk4.classList.add("disk");
disk4.classList.add("d4");

const disk5 = document.createElement("div");
disk5.classList.add("disk");
disk5.classList.add("d5");

const tower1 = document.createElement("div");
tower1.classList.add("tower");

const tower2 = document.createElement("div");
tower2.classList.add("tower");

const tower3 = document.createElement("div");
tower3.classList.add("tower");

tower1.appendChild(disk5);
tower1.appendChild(disk4);
tower1.appendChild(disk3);
tower1.appendChild(disk2);
tower1.appendChild(disk1);

hanoi.appendChild(tower1);
hanoi.appendChild(tower2);
hanoi.appendChild(tower3);

body.appendChild(tit);
body.appendChild(stck);
body.appendChild(hanoi);

const towers = document.querySelectorAll(".tower");
console.log(towers);

towers.forEach(element => {
    element.addEventListener('click', event => {
        const towerOne = event.currentTarget;
        const lastDisk = towerOne.lastElementChild;
        console.log("primeiro clique");
        stock(lastDisk, towerOne);
    })
});

function stock(lastDisk, towerOne){
    const countStck = stck.childElementCount;
    if(countStck === 0){
        stck.appendChild(lastDisk);
    }else{
        stock2(towerOne);
    }
}

function stock2(towerOne){
    const b = towerOne.lastElementChild;
    const lastChildStck = stck.lastElementChild;
    const countTower = towerOne.childElementCount;
    if(countTower === 0){
        towerOne.appendChild(lastChildStck);
    }
    else if(lastChildStck.clientWidth < b.clientWidth){
        towerOne.appendChild(lastChildStck);
    }
}
