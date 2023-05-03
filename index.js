document.addEventListener("DOMContentLoaded",function (){


    const button = document.querySelectorAll("button")
    console.log(button[3])
    

      
    button[3].addEventListener("click",function (){

        alert ("i clicked button")


        const title =  document.querySelector("h2")
        
        title.classList.remove("javascript" ) 

        
    }

    )



//     const arrayButton = (document.querySelectorAll("button")) 
//     const lastButton = arrayButton[0] 



// function renderTitle(){

//     const Div = document.querySelector("div")
    
//     const createdTitle =  document.createElement('p');
//     createdTitle.innerText ='Stories Instagram';
//     console.log(createdTitle)
//     Div.appendChild(createdTitle)   

// }


//     lastButton.addEventListener('click',renderTitle )
  
//     console.log (lastButton)


    //  const firstButton = (document.querySelectorAll("button.header_button"))
     











} )



