var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created:', this.name);
    }
    return User;
}());
var newUser = new User('Vince', 'Vince@Vince.com', 28);
