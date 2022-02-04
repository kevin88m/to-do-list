window.addEventListener('load',()=>{
    const form = document.getElementById("nouvelle_tache");
    const input = document.querySelector("#nouvelle_tache_bt");
    const list_el = document.getElementById("taches");

    console.log(form)
    
    form.addEventListener('submit',(e) =>{
        e.preventDefault();
     
        
        const tache = input.value;
       
        if(!tache){
            alert("Veuillez renseigner le champs vide.");
            return;
             }
            const tache_el = document.createElement("div");
            tache_el.classList.add("taches");

            
            const tache_contenu_el  = document.createElement("div");
            tache_contenu_el.classList.add("contenu");

            tache_el.appendChild(tache_contenu_el);

                const tache_input_el = document.createElement('input');
                tache_input_el.classList.add("text");
                tache_input_el.type = "text";
                tache_input_el.value = tache;
                console.log (tache)
                tache_input_el.setAttribute("readonly","readonly");

                tache_contenu_el.appendChild(tache_input_el);

            list_el.appendChild(tache_el);

            const tache_action_el = document.createElement('div');
            tache_action_el.classList.add("action");

            const tache_edit_el = document.createElement('button');
            tache_edit_el.classList.add("edit");
             tache_edit_el.innerHTML = "modifier";

            const tache_delete_el = document.createElement('button');
            tache_delete_el.classList.add("delete");
            tache_delete_el.innerHTML =" supprimer";

            tache_action_el.appendChild(tache_edit_el);
            tache_action_el.appendChild(tache_delete_el);

            tache_el.appendChild(tache_action_el);
            list_el.appendChild(tache_el);

            input.value ="";
            
            tache_edit_el.addEventListener('click',()=>{
                if(tache_edit_el.innerText.toLowerCase()=="edit"){
                tache_input_el.removeAttribute("readonly");
                tache_input_el.focus();
                tache_edit_el.innerText = "sauvegarde";
                }else{
                    console.log("sauvegarde");
                }
            })

    })
})