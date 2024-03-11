"use strict";
// Question no 30   Hello Admin
let userNames = ['asif', 'yasir', 'admin', 'yaseen', 'atif'];
for (let userName of userNames) {
    if (userName == 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else if (userName != 'admin') {
        console.log(`hello ${userName} welcome!`);
    }
    // else if(userName == 'yaseen'){
    //     console.log(`hello ${userName} welcome!`)   
    // }
    // else if(userName == 'atif'){
    //     console.log(`hello ${userName} welcome!`)   
    // }
    // else if(userName == 'yasir'){
    //     console.log(`hello ${userName} welcome!`)   
    // }
    // else if(userName == 'asif'){
    //     console.log(`hello ${userName} welcome!`)   
    // }
}
