
function topFunction() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

function submitPredictions() {
    
}

function showPredictions() {
    
}

function welcome() {
    alert("반갑습니다.")
}

function date() {
    var today = new Date()
    var dd = today.getDate()
    var mm = today.getMonth() + 1
    var yyyy = today.getFullYear()
    
    if(dd<10) {
        dd = '0' + dd
    }
    
    if(mm<10) {
        mm = '0' + mm
    }
    
    today = mm+'/'+dd+'/'+yyy
    
    alert("dlfkjdlkfj")
    
    documnet.write(today);
}