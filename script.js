function loaded(){
    document.getElementById('main-content').classList.remove('loading');
}

window.onload = function(){
    setTimeout(loaded(),1000);
    Array.from(document.getElementsByClassName('head-link')).forEach(element => {
       element.onclick = function(){
           var target = element.id + "-container";
           window.scrollTo({"behavior": "smooth", "top": document.getElementById(target).offsetTop-20})
       }
    });
}