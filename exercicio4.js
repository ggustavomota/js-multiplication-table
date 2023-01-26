function Table(){
    let num = document.querySelector("#inputnum")
    let mtable = document.querySelector("#selecttab")

    let convertnum = Number.parseInt(num.value)

    if(num.value.length == 0){
        window.alert("ERROR: Type a number.")
    }else{
        let c = 1 //Contador
        mtable.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option') //Option para o Selector
            item.text = `${convertnum} x ${c} = ${convertnum * c}`
            mtable.appendChild(item)
            c++
        }
    }
}