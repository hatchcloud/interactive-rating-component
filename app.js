
const rateBox   = document.querySelector('#rateBox');
const summitBtn = document.querySelector('#btnRate');

const firstStep   = document.querySelector('.first-step');
const confirmStep = document.querySelector('.confirm-step');
const messageConfirm = document.querySelector('.badge');

let ranking = [];
let selectedRate;

//create range for rating
const createRating = (minRate, maxRate) =>{
    for (let i = minRate; i <= maxRate; i++) {
        ranking .push(i)  
    }
}
createRating(1,5);

//click rate
const eventRate = (e)=>{
    e.onclick = ()=>{
        selectedRate = e.id;
        let reset = document.querySelectorAll('.selected');
        if(reset.length != 0){
            reset.forEach(i => {
                i.classList.remove('selected');
            });
        }
        e.classList.add('selected');
    }
}

//inset rating html 
const createbtnRate = (container, ranking) =>{
    ranking .forEach(e => {
        let rate = document.createElement('span');
        rate.id = e
        rate.innerText = e
        eventRate(rate);
        container.append(rate);
    });
}

createbtnRate(rateBox, ranking);

//summitRate
const summitRate = (e)=>{
    e.onclick = ()=>{
        if(selectedRate !== undefined){
            messageConfirm.innerText = `You selected ${selectedRate} out of 5`
            firstStep.classList.add('hidden');
            confirmStep.classList.add('show');
        }
    }
}

summitRate(summitBtn);