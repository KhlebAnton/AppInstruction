
const info = document.querySelector('.info');
const instrs = document.querySelectorAll('.instr_container');
goInstuction();
function goInstuction() {
    instrs.forEach(e => e.classList.add('hidden'));
    info.classList.add('hidden');
       

    instrs[0].classList.remove('hidden');
    instrs.forEach( instr => {
        if(instr != instrs[4]) {
            instr.addEventListener('click', () => {
                instr.classList.add('hidden');
                instr.nextElementSibling.classList.remove('hidden');
            })
        } else {
            
            document.querySelector('.close').addEventListener('click', ()=> {
                info.classList.remove('hidden');
                instrs.forEach(e => e.classList.add('hidden'));
            })
        }
       
})
}

function goInfo() {
    instrs.forEach(e => e.classList.add('hidden'));
    info.classList.add('hidden');
    instrs[4].classList.remove('hidden');
}

