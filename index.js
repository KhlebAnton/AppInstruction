
const info = document.querySelector('.info');
const instrs = document.querySelectorAll('.instr');

function goInstuction() {
    instrs.forEach(e => e.classList.add('hidden'));
    info.classList.add('hidden');
    document.querySelector('.screen').style.backgroundColor = "#9B9B9B"
    

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
                document.querySelector('.screen').style.backgroundColor = ""
            })
        }
       
})
}

