

// /first way to write regex
// let regex = /[a-z] /gi;

// // second way to write regex
// let regex2 = new RegExp(/[a-z]/, 'i');


// // validation script here
const inputs = document.querySelectorAll('input');

const patterns = {
        telephone: /^[0-9]{11}$/
    ,   username: /^[a-z\d]{5,12}$/i       //AplaNumeric between 5-12
    ,   password: /^[-@a-z\d_]{8,20}$/i   //Alpha Numeric icluding hyphen underscore and @
    ,   slug:     /^[-a-z\d]{8,20}$/i    //AplaNumeric between 8-20}
    ,   email:     /^([a-z\d\._-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/   //email
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
// Runs validate Function
inputs.forEach((input) => {
        input.addEventListener('keyup', (e) => {
            console.log(e.target.attributes.name.value);
            validate(e.target, patterns[e.target.attributes.name.value])
        });
    });
