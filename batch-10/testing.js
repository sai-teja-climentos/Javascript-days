function form_submit(){

event.preventDefault()    

Name = document.getElementById("name").value; 

Email = document.getElementById("email").value; 

Mobile = document.getElementById("mobile").value; 


// console.log(Name,Email,Mobile)


localStorage.setItem("Name",Name)
localStorage.setItem("Email",Email)
localStorage.setItem("Mobile",Mobile)


}


function button_form(){
    event.preventDefault()

l1= localStorage.getItem("Name")
l2= localStorage.getItem("Email")
l3= localStorage.getItem("Mobile")


document.getElementById("showName").textContent =l1
document.getElementById("showEmail").textContent =l2
document.getElementById("showMobile").textContent =l3


console.log(l1,l2,l3)
}