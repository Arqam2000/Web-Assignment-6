function input(num) {
    let input = document.getElementById("result")
    input.value += num
}

function calc(){
    let result = document.getElementById("result")
    let inp = document.getElementById("inp")
    inp.value = result.value
    result.value = eval(result.value)
}

function cls(){
    let input = document.getElementById("inp")
    let input2 = document.getElementById("result")
    input.value = ''
    input2.value = ''
}


