let countValue = 0

let bDec = document.querySelector('.bDec')
let bInc = document.querySelector('.bInc')
let bReset = document.querySelector('.reset')

bDec.onclick = count
bInc.onclick = count
bReset.onclick = count

function count(element){
    if(element.target.className == 'bDec'){
        countValue--
    } else if(element.target.className == 'bInc'){
        countValue++
    } else {
        countValue = 0
    }

    document.querySelector('#count').innerHTML = countValue
}

