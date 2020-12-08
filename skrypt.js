
var input = document.getElementById("inputText")
var output = document.getElementById("outputText")
var password = document.getElementById("password")
var info = document.getElementById("infoText")

function encrypt(){
    if(!validateData()) return

    try{
        var encrypted = CryptoJS.AES.encrypt(input.value, password.value)
        output.value = encrypted.toString()
        console.log("Text encrypted")
        info.innerHTML = ""
        validateOutput()
    }
    catch(e){
        info.innerHTML = "Error: " + e
        output.value = ""
    }
}

function decrypt(){
    if(!validateData()) return
    try{
        var decrypted = CryptoJS.AES.decrypt(input.value, password.value)
        var decryptedString = decrypted.toString(CryptoJS.enc.Utf8)
        output.value = decryptedString
        console.log("Text decrypted")
        info.innerHTML = ""
        validateOutput()
    }
    catch(e){
        console.log(e)
        info.innerHTML = "Wrong password or error has occurred! More info in console"
        output.value = ""
    }    
}

function validateData(){
    if(input.value.length <= 0){
        info.innerHTML = "Input cannot be null!"
        return false
    }
    if(password.value.length <= 0){
        info.innerHTML = "Password cannot be null!"
        return false
    }
    return true
}

function validateOutput(){
    if(output.value.length <= 0){
        info.innerHTML = "Output is empty, password might be wrong!"
    }
}