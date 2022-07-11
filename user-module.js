const {readFilesSync, readFileSync}= require('fs')

const loadUser = function (){let users = JSON.parse(readFileSync('users.json'))}

module.exports(loadUser())