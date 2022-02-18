
const getDOM = function(selector) {
    return document.querySelector(selector);
}

const getDOMs = function(selector) {
    return document.querySelectorAll(selector);
}

let fullName = getDOM('#fullName');
let email = getDOM('#email');
let phone = getDOM('#phone');
let birthDate = getDOM('#birthDate');
let password = getDOM('#password');
let confirmPass = getDOM('#confirmPass');
let btnAdd = getDOM('.btnAdd');
let btnReset = getDOM('.btnReset');
let inputs = getDOMs('.row > input');
let myForm = getDOM('#myForm');
let textInfos = getDOMs('.text_info');
let fileInput = getDOM('#upload_img');
let imgReview = getDOM('#img_avatar--upload');
let imgInfo = getDOM('.info_avatar > img');
let iconEyes = getDOMs('.eye_pass');
let iconNoEyes = getDOMs('.eye_noPass');


const addUser = function (){
    if(checkValidate()){
        alert("Bạn đã add thành công");
        renderInfos();


    }else console.log("no");
}

const resetInput = function (){
    myForm.reset();
}

//các hàm xử lý sự kiện

btnAdd.onclick = addUser;
btnReset.onclick = resetInput;
window.addEventListener("keydown",(e)=>{
    //nhấn enter
    if(e.keyCode == 13){
        addUser();
    }

    //nhấn delete
    if(e.keyCode == 46){
        resetInput();
    }
    
})
//-------------------


// const checkValidate = function() {
//    let countError = 0;
//     inputs.forEach( input => {
//         let valueInput = input.value;
//         if(checkEmpty(valueInput,input)) countError++;   
//         else{

//             if(input.id == "email") {
//                 if(!checkEmail(input)) countError++;
//             }



//         } 
       

        
//     });  
                
//     if (countError == 0) return true;
//     else return false;
    
// }

const checkValidate = function() {
    let countError = 0;
    
    if(!checkFullName()) countError++;
    if(!checkEmail()) countError++;
    if(!checkPhone()) countError++;
    if(!checkBirthDay()) countError++;
    if(!checkPass()) countError++;
    if(!checkConfirm()) countError++;
                 
     if (countError == 0) return true;
     else return false;
     
 }


const checkEmpty = function(value, domInput) {

    //dom phần tử kế tiếp phần tử hiện tại 
    //trường hợp hiện tại là thẻ input và muốn DOM đến thẻ kê stieeps là thẻ span
    let errorEntry = domInput.nextElementSibling;

    //lấy thẻ label để lấy text
    let parentEle = domInput.parentElement;
    let lablelInput = parentEle.querySelector("label");
    
   
    //nếu trống trả về false
    //ko trống trả về true
    if(value == "") {
        errorEntry.innerText = lablelInput.innerText +  " không được để trống";
        return false;
    }

    return true;
    
}

const checkFullName = function(){
    let fullNameText = fullName.value;
    let errorName = getDOM('.error_name');

    //kiêm tra tất cả là chữ
    const re = /^[A-Za-z ]+$/;
    let checkRegex = re.test(fullNameText);

    if(checkEmpty(fullNameText,fullName)) {
        if (checkRegex) {
            errorName.innerText = "";
        } else {
            errorName.innerText = "Tên chỉ được dùng chữ và không dấu";      
        }

        return checkRegex;
    } 
    
    return false;
}


const checkEmail = function(){
    let emailText = email.value;
    let errorEmail = getDOM('.error_email');

    //kiểm tra định dạng email
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let checkRegex = re.test(emailText.toLowerCase());

    if(checkEmpty(emailText,email)) {
        if (checkRegex) {
            errorEmail.innerText = "";
        } else {
            errorEmail.innerText = "Email không hợp lệ";      
        }

        return checkRegex;
    } 
    
    return false;
}

const checkPhone = function(){
    let phoneText = phone.value;
    let errorPhone = getDOM('.error_phone');

    //kiểm tra định dạng phone
    const re = /^0/;
    let checkRegex = re.test(phoneText);

    if(checkEmpty(phoneText,phone)) {
        if (checkRegex) {
            errorPhone.innerText = "";
        } else {
            errorPhone.innerText = "Nhập số 0 đầu tiên trong số điện thoại của bạn";      
        }

        return checkRegex;
    } 
    
    return false;
}

//sự kiện nhập vào ô phone   
phone.addEventListener('input',()=>{
    let phoneValue = phone.value;
    if(phoneValue.length == 3 || phoneValue.length == 7){
        phone.value += "-"; 
    }
})

const checkBirthDay = function(){
    let birthText = birthDate.value;
    let errorBirth = getDOM('.error_birth');

    const re =/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    let checkRegex = re.test(birthText);

    if(checkEmpty(birthText,birthDate)) {
        if (checkRegex) {
            errorBirth.innerText = "";
        } else {
            errorBirth.innerText = "Định dạng birthday dd/mm/YYYY";      
        }

        return checkRegex;
    } 
    
    return false;
}

const checkPass = function(){
    let passText = password.value;
    let errorPass = getDOM('.error_pass');

  
    const re =/^[A-Z|a-z](?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/;
    let checkRegex = re.test(passText);

    if(checkEmpty(passText,password)) {
        if (checkRegex) {
            errorPass.innerText = "";
        } else {

            errorPass.innerText = "Password 8-30 ký tự, bắt đầu bằng chữ cái, có chứa kí tự đặc biệt, số, chữ viết hoa";
            errorPass.style.bottom = "-36px";

        }

        return checkRegex;
    } 
    
    return false;
}

const checkConfirm = function(){
    let passConfirmText = confirmPass.value;
    let passText = password.value;
    let errorCofirmPass = getDOM('.error_confirm');


    let checkCofirm = passConfirmText === passText;
    
    if(checkEmpty(passConfirmText,confirmPass)) {
        if (checkCofirm) {
            errorCofirmPass.innerText = "";
        } else {
            errorCofirmPass.innerText = "Phải giống password đã đặt";
                  
        }

        return checkCofirm;
    } 
    
    return false;
}



//hiển thị ảnh upload
const uploadImg = function(){
    let fileSelect = fileInput.files;
    console.log(fileSelect);

    let filePath =  fileInput.value;
    console.log(filePath);

    let fileToLoad  = fileSelect[0];

    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;//các tập tin cho phép
    
    if(!allowedExtensions.exec(filePath)){
        alert('Vui lòng upload các file có định dạng: .jpeg/.jpg/.png/.gif only.');
        fileInput.value = '';
        return false;
    }else if(fileSelect && fileToLoad){
        
        let fileReader = new FileReader();
        fileReader.onload = function(fileLoadEvent) {
            console.log(fileLoadEvent);
            let srcData = fileLoadEvent.target.result;
            imgReview.src = srcData;
        }
        fileReader.readAsDataURL(fileToLoad);
    }

    
}

fileInput.onchange = uploadImg;


//lấy thông tin từ ô input
const getInfos =  function(){
   
    let values = [];

    for(i = 0; i < inputs.length; i++) {
        values.push(inputs[i].value);
    }

    return values;
}


//hiển thị các giá trị từ ô input ra giao diện
const renderInfos = function(){
    let infos = getInfos();
    
    for(let i = 0;i<infos.length;i++){
        for(let j=0;j<textInfos.length;j++){
            if(i==j){
                textInfos[j].innerText = infos[i];
                break;
            }
            
        }
    }

    //render avatar
    imgInfo.src = imgReview.src;

}


//ẩn và hiện mật khẩu

const seePass = function(iconSeePass,iconNoSeePass,domPass){
    domPass.type = "text";
    iconSeePass.style.display = 'none';
    iconNoSeePass.style.display = 'block';
}

const seeNoPass = function(iconSeePass,iconNoSeePass,domPass){
    domPass.type = "password";
    iconSeePass.style.display = 'block';
    iconNoSeePass.style.display = 'none';
}

//ẩn hiện trong input password
let eyePass = iconEyes[0];
let eyeNoPass = iconNoEyes[0];
eyePass.onclick = ()=>{ seePass(eyePass,eyeNoPass,password);}
eyeNoPass.onclick = ()=>{ seeNoPass(eyePass,eyeNoPass,password);}
//ẩn hiện trong input confirm passwword
let eyeConfirmPass = iconEyes[1];
let eyeNoConfirmPass = iconNoEyes[1];
eyeConfirmPass.onclick = ()=>{ seePass(eyeConfirmPass,eyeNoConfirmPass,confirmPass);}
eyeNoConfirmPass.onclick = ()=>{ seeNoPass(eyeConfirmPass,eyeNoConfirmPass,confirmPass);}

//  các note học được
// chuỗi regex định dạng số phone 
// 012-345-6789
// let testRe = /^[0]\d{2}-\d{3}-\d{4}$/;

