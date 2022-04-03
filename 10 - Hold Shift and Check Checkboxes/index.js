const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked ;
function handleCheck(e){
    let inBetween = false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox =>{
            console.log(checkbox)
            if(checkbox===this || checkbox === lastChecked){
                inBetween = !inBetween;
                console.log("one",checkbox)
                console.log("two",this)
            }
            if(inBetween){
                console.log("true")
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this ;
}
checkboxes.forEach(checkbox =>checkbox.addEventListener('click',handleCheck))