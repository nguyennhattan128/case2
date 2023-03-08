declare var require: any
import chalk = require("chalk");

let input = require('readline-sync');
let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
let password = '';
let flag = true;
do {
    password = input.question('Enter password : ')
    if(regexPassword.test(password)) {
        console.log(chalk.green('Thành công !'))
        flag = true;
    } else {
        console.log(chalk.yellow('Nhập lại !'))
        flag = false;
    }
} while (!flag)