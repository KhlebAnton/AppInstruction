
const info = document.querySelector('.info');
const instrs = document.querySelectorAll('.instr_container');

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
            info.classList.remove('hidden');
            document.querySelector('.close').addEventListener('click', ()=> {
                instrs.forEach(e => e.classList.add('hidden'));
            })
        }
       
})
}

