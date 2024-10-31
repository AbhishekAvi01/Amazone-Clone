// const qrinput= document.querySelector('#qr-inuput');
// const qrbBtn= document.querySelector('#qr-button');
// const qrImage= document.querySelector('#qr-img');

// qrbBtn.addEventListener("click",()=>{
// const inputValue =qrinput.value;
// console.log(inputValue);
// if(!inputValue){
//     alert('Pleae Enter valid URL');
//     return;
// }else{
//     qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
   
//     qrImage.alt=`QR Code For ${inputValue}`;
// }
// })



// revice
const qrinput= document.querySelector("#qr-inuput");
const qrbutton= document.querySelector("#qr-button");
const qrimage= document.querySelector("#qr-img");

qrbutton.addEventListener("click", ()=>{
     const qrinputvalue = qrinput.value;
     console.log(qrinputvalue);
     if(!qrinputvalue){
        alert("please enter valid url");
        return ;
     }
     else{
    qrimage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrinputvalue}`;
    
     }
})