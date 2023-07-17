function dance(){
    let about = document.getElementById('about')
    about.classList.toggle('about')
}

function project(){
    document.getElementById('hobbies').style.visibility="hidden"
    document.getElementById('skills').style.visibility="hidden"
    document.getElementById('project').style.visibility="visible"
    document.getElementById('education').style.visibility='hidden'
}

function skills(){
    document.getElementById('skills').style.visibility="visible"
    document.getElementById('project').style.visibility="hidden"
    document.getElementById('hobbies').style.visibility="hidden"
    document.getElementById('education').style.visibility='hidden'
}

function hobbies(){
    document.getElementById('hobbies').style.visibility="visible"
    document.getElementById('skills').style.visibility="hidden"
    document.getElementById('project').style.visibility="hidden"
    document.getElementById('education').style.visibility='hidden'
}

/*function eng1(){
    document.getElementById('eng1').style.visibility='visible'
    document.getElementById('eng').style.visibility='hidden'
    document.getElementById('gap').style.marginTop='0%'
}

function eng(){
    document.getElementById('eng').style.visibility='visible'
    document.getElementById('eng1').style.visibility='hidden'
    document.getElementById('gap').style.marginTop='0%'
}

function education () {
    document.getElementById('education').style.visibility='visible'
    document.getElementById('hobbies').style.visibility="hidden"
    document.getElementById('skills').style.visibility="hidden"
    document.getElementById('project').style.visibility="hidden"
}
*/