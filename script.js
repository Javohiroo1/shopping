let users= document.getElementById('users');
let user=[];




function addUser() {
    let matn= document.getElementById("element");
    user.push(matn.value);
    if(matn.value!="") users.innerHTML+="<li><p>${matn.value}</p></li>";
    matn.value="";
}

function deleteUser() {
    users.innerText='';
    let matn= document.getElementById("element");
    for(let e=0; e<user.length; e++){
        if(user[e].toLowerCase()==matn.value.toLowerCase()){ user[e]=""; console.log(user[e]);}
    }
    for(let e of user){
        console.log(e);
        if(e!="") users.innerHTML+="<li><p>${e}</p></li>";
    }
    matn.value="";
}
