function Document_form(){
    event.preventDefault()
   
   Name = document.getElementById("name").value;
   Email = document.getElementById("email").value;
   Phone = document.getElementById("phone").value;


   console.log(Name,Email,Phone)

   Storage_session= sessionStorage.getItem("Welcome")

   alert(Storage_session)



}