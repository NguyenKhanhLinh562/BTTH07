
function checkUserId() {
    let userID = document.getElementById('txtUserID');
    let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
    if (userIDRegex.test(userID.value)) {
        return true
    }
    return false
}

function checkPassword() {
    let password = document.getElementById('txtPassword');
    let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
    if (passwordRegex.test(password.value)) {
        return true
    }
    return false
}


function checkName() {
    let Name = document.getElementById('txtName');
    let NameRegex = /^[a-z A-Z]+$/;
    if (NameRegex.test(Name.value)) {
        return true
    }
    return false
}

function checkZipCode() {
    let ZipCode = document.getElementById('txtZipCode');
    let ZipCodeRegex = /^[0-9]+$/;
    if (ZipCodeRegex.test(ZipCode.value)) {
        return true
    }
    return false
}

function checkEmail() {
    let Email = document.getElementById('txtEmail');
    let EmailRegex = /^[a-z A-Z 0-9]+@gmail.com/;
    if (EmailRegex.test(Email.value)) {
        return true
    }
    return false
}

function checkAbout() {
    let About = document.getElementById('txtAbout');
    let AboutRegex = /^[a-zA-Z0-9]+$/;
    if (AboutRegex.test(About.value)) {
        return true
    }
    return false
}

let register = document.getElementById('btnRegister')

register.addEventListener('click', function (e) {
    e.preventDefault()
    let statusOfUserID = document.getElementById('statusOfUserID')
    let statusOfPassword = document.getElementById('statusOfPassword')
    let statusOfName = document.getElementById('statusOfName')

    let statusOfZipCode = document.getElementById('statusOfZipCode')
    let statusOfEmail = document.getElementById('statusOfEmail')
    let statusOfABout = document.getElementById('statusOfAbout')
    if (checkUserId() == true) {
        statusOfUserID.textContent = 'UserID hợp lệ'
        statusOfUserID.style.color = 'blue'
    } else {
        statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
        statusOfUserID.style.color = 'red'
    }

    if (checkPassword() == true) {
        statusOfPassword.textContent = 'Password hợp lệ'
        statusOfPassword.style.color = 'blue'
    } else {
        statusOfPassword.textContent = 'Password không hợp lệ. Độ dài từ 7 - 12'
        statusOfPassword.style.color = 'red'
    }

    if (checkName() == true) {
        statusOfName.textContent = 'Name hợp lệ'
        statusOfName.style.color = 'blue'
    } else {
        statusOfName.textContent = 'Name không hợp lệ.'
        statusOfName.style.color = 'red'
    }

    let statusOfCountry = document.getElementById('statusOfCountry');
    let value = statusOfCountry.value;
    if(value == '#'){
        statusOfCountry.textContent = "Bạn đã chọn thành công";
        statusOfCountry.style.color = 'blue'
    }else{
        statusOfCountry.textContent = "Vui lòng lựa chọn ";
        statusOfCountry.style.color = "red"
    }

    if (checkZipCode() == true) {
        statusOfZipCode.textContent = 'Zip Code hợp lệ.'
        statusOfZipCode.style.color = 'blue'
    } else {
        statusOfZipCode.textContent = 'Zip Code không hợp lệ.'
        statusOfZipCode.style.color = 'red'
    }

    if (checkEmail() == true) {
        statusOfEmail.textContent = 'Email hợp lệ.'
        statusOfEmail.style.color = 'blue'
    } else {
        statusOfEmail.textContent = 'Email không hợp lệ.'
        statusOfEmail.style.color = 'red'
    }

    let statusOfSex= document.getElementById('statusOfSex');
    let value1 = statusOfSex.value;
    if(value1 == '#'){
        statusOfSex.textContent = "Bạn đã chọn thành công";
        statusOfSex.style.color = 'blue'
    }
    else{
        statusOfSex.textContent = "Vui lòng lựa chọn ";
        statusOfSex.style.color = "red"
    }

    let statusOfLanguage= document.getElementById('statusOfLanguage');
    let value2 = statusOfSex.value;
    if(value2 == '#'){
        statusOfLanguage.textContent = "Bạn đã chọn thành công";
        statusOfLanguage.style.color = 'blue'
    }
    else{
        statusOfLanguage.textContent = "Vui lòng lựa chọn ";
        statusOfLanguage.style.color = "red"
    }

    if (checkAbout() == true) {
        statusOfABout.textContent = 'Thông tin đã điền đầy đủ'
        statusOfABout.style.color = 'blue'
    }else{
        statusOfABout.textContent = 'Vui lòng thêm ý kiến'
        statusOfABout.style.color = 'red'
    }

})

