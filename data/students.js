let students = [
                {name: "Justin Obi", phone: "1146476453", email: "cjusebi@gmail.com"},
                {name: "Emeka Obi", phone: "534276453", email: "cjustiti@gmail.com"},
                {name: "Jude Mary", phone: "53443476453", email: "sjustinobi@gmail.com"},
                {name: "Jane Phill", phone: "7646476453", email: "tinobi@gmail.com"}
            ];
  
let text = '<ul>'
for(let i=0; i < students.length; i++){

text +=`<li>
    <b>Name:</b> ${students[i].name}
    <b>Phone:</b> ${students[i].phone} 
    <b>Phone:</b> ${students[i].email}
</li>`

}
text += '</ul>'

// students.forEach((student, i) => {
   console.log(text)
//})



document.getElementById('students').innerHTML = text;
