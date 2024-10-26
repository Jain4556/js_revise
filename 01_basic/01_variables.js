const accountId = 12344
let accountEmail = "sunil123@gmial.com"
var accountPassword = "3232"
accountCity = "Surat"

let accountState;
// accountId = "5";  NOT ALLOWED

accountEmail = "SUNIL243@gmail.com"
accountPassword = "323";

/*
prefer not to use var
becoz of issue in block scope and functional scope
*/

accountCity = "Bengaluru"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


