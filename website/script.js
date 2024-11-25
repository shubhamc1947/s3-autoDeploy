const addlist=document.getElementById("addlist");
const btn=document.getElementById("btn");

const listcont=document.getElementById("listcont");


addlist.focus();
//add list event


// Store data and show data

function storingdata(){
    console.log(addlist.value);

    addlist.value=addlist.value.trim();
    if(addlist.value==""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Input Box is Empty",
          });
    }else{
        const ele=`<div class="items" ><div class="itemsleft" >
            ${addlist.value}</div><div class="itemsright">
            <div class="edit"><i class="fa-regular fa-pen-to-square"></i></div><div class="del"><i class="fa-solid fa-trash"></i></div></div></div>`;
            listcont.innerHTML+=ele;

            storedata();
            Swal.fire({
                title: "Good job!",
                text: "Your Data Inserted!",
                icon: "success"
            });
    }       
    addlist.value="";
    // addlist.focus();

    //storing in local data
    
}


btn.addEventListener("click",function(){
    storingdata();
})


//Tring to add the list on clicking the enter as well but enter 
// document.addEventListener("keypress",function(eve){    
//     if(eve.key=="Enter"){
//         storingdata();
//     }
// })




//checking or deleing element
listcont.addEventListener("click",function(ele){

    if(ele.target.classList.contains("itemsleft")){

        ele.target.classList.toggle("checked");

    }else if(ele.target.classList.contains("del")){

        ele.target.parentElement.parentElement.remove();
        
    }else if(ele.target.classList.contains("edit")){
        const id=ele.target.parentElement.parentElement.children[0];
        const value=prompt("Enter the Edited Thing at the place of "+id.innerText);
        if(value===null){
        }
        else if(value!==""){
            id.innerText=value;

        }


    }
    storedata();
})


// storing data in local storage


function storedata(){
    localStorage.setItem("data",listcont.innerHTML);
}

// show data 

function showdata(){
    if(localStorage.getItem("data")){
        listcont.innerHTML=localStorage.getItem("data");
    }
}

showdata();