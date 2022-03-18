

// /first way to write regex
// let regex = /[a-z] /gi;

// // second way to write regex
// let regex2 = new RegExp(/[a-z]/, 'i');


// // validation script here
const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^[0-9]{11}$/
}
// // Appends Class name to input type if valid against regex
function validate(field, regex){
//    console.log(regex.test(field.value));
if(regex.test(field.value)){
    field.className = 'valid';
} else {
    field.className = 'invalid';
}
}

inputs.forEach((input) => {
        input.addEventListener('keyup', (e) => {
            // console.log(e.target.attributes.name.value);
            validate(e.target, patterns[e.target.attributes.name.value])
        });
    });
