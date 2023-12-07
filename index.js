
const info = document.querySelector('.info');

let instuctionScreen = document.querySelector('.screen')
const instrs = instuctionScreen.querySelectorAll('.instr_container');

let instuctionScreenFirst = document.querySelector('.first.screen')
const instrsFirst = instuctionScreenFirst.querySelectorAll('.instr_container');
document.querySelector('.close').addEventListener('click', () => {
    info.classList.remove('hidden');
    instrs.forEach(e => e.classList.add('hidden'));
})
goFirst();
function goInstuction() {
    instrs.forEach(e => e.classList.add('hidden'));
    info.classList.add('hidden');


    instrs[0].classList.remove('hidden');
    instrs.forEach(instr => {
        if (instr != instrs[4]) {
            instr.addEventListener('click', () => {
                instr.classList.add('hidden');
                instr.nextElementSibling.classList.remove('hidden');
            })
        } 
        
        

    })
}

function goInfo() {
    instrs.forEach(e => e.classList.add('hidden'));
    info.classList.add('hidden');
    instrs[4].classList.remove('hidden');
}

function goFirst() {
    instrsFirst.forEach(e => e.classList.add('hidden'));
    info.classList.add('hidden');


    instrsFirst[0].classList.remove('hidden');
    instrsFirst.forEach(instr => {
        if (instr != instrs[4]) { 
            instr.addEventListener('click', () => {
                instr.classList.add('hidden');
                if(instr.nextElementSibling){
                instr.nextElementSibling.classList.remove('hidden');
            } else {
                instrs.forEach(e => e.classList.add('hidden'));
                console.log(instuctionScreenFirst);
                instuctionScreenFirst.classList.add('minus');
                info.classList.remove('hidden');
            }
            })
        }
    })
}

