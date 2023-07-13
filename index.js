function sendEmail(){
    var params ={
        name: document.getElementById("name").value ,
        email : document.getElementById("email").value ,
        message : document.getElementById("message").value
    };

const serviseID ="service_ogn0ie6";
const templateId ="template_tlw7yqy";
emailjs.send(serviseID,templateId,params)
.then(
    res =>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
   
        console.log(res);
        alert("your message sent successfully ")

    }
).catch(err=>console.log(err));}