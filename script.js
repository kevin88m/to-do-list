window.addEventListener('load',()=>{
    const form = document.getElementById("nouvelle_tache");
    const input = document.querySelector("#nouvelle_tache_bt");
    const list_el = document.getElementById("taches");

    console.log(form)
    
    form.addEventListener('submit',(e) =>{
        e.preventDefault();
     
        
        const tache = input.value;
        console.log(tache)
        if(!tache){
            alert("Veuillez renseigner le champs vide.");
        }else{
            console.log("succès");
           
        }
    })
})