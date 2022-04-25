function showArrow1(){
    document.getElementById("1").style.visibility = 'visible';
}
function hideArrow1(){
    document.getElementById("1").style.visibility = 'hidden';
}
function showArrow2(){
    document.getElementById("2").style.visibility = 'visible';
}
function hideArrow2(){
    document.getElementById("2").style.visibility = 'hidden';
}
function showArrow3(){
    document.getElementById("3").style.visibility = 'visible';
}
function hideArrow3(){
    document.getElementById("3").style.visibility = 'hidden';
}
function showArrow4(){
    document.getElementById("4").style.visibility = 'visible';
}
function hideArrow4(){
    document.getElementById("4").style.visibility = 'hidden';
}
function showArrow5(){
    document.getElementById("5").style.visibility = 'visible';
}
function hideArrow5(){
    document.getElementById("5").style.visibility = 'hidden';
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()