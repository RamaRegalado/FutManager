const fs = require('fs');

const User = {
	fileName: './data/manager.json',
     
    //traer la informacion del json
	getData: function () {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));//this....de este objeto literal (User)
	},
    generateId: function () {
		let allUsers = this.findAll();
		let lastUser = allUsers.pop();
		if (lastUser) {
			return lastUser.id + 1;
		}
		return 1;
	},
      //traer los usuarios
    findAll: function () {
		return this.getData();
	},
          //buscar por id
    findByPk: function (id) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser.id === id);
		return userFound;
	},
//buscar por  campo resive dos parametros email, emanuelmj2007@gmail.com
    findByField: function (field, text) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser[field] === text);
		return userFound;
	},

    create: function (userData) {
		let allUsers = this.findAll();
		let newUser = {
			id: this.generateId(),
			...userData//operador de propagacion tiene toda la iformacion que llega 
		}
		allUsers.push(newUser);
		fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null,  ' '));
		return newUser;
	},

	delete: function (id) {
		let allUsers = this.findAll();
		let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
		fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
		return true;
	}
}  
console.log(User.findByPk(4));
module.exports = User;