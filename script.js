const output = document.querySelector(".output");
const txt = document.querySelector("textarea");

    ["keyup", "keydown", "change"].forEach(function(e){
        txt.addEventListener(e, textCounter);
    })
    
const maxLength = 120;
const warnLength = maxLength - 7;
    
    function textCounter(e){
        let count = txt.value.length;
        if(count > maxLength){
            txt.value = txt.value.substring(0, maxLength);
        }
        if(count > warnLength){
            output.classList.add("red");
        }else {
            output.classList.remove("red");
        }
        output.innerHTML = `Pozostało ${maxLength - count} znaków`;
    }
