// interface User{
//     id:number;
//     name:string;
//     email:string;
//     age?:number;
// }
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// let u: User={
//     id: 1,
//     name: "Arihant",
//     email: "abc@gmail.com"
// };
// console.log(u);
// ------------------------------------------------Q2---------------------------------
var User = /** @class */ (function () {
    function User(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    return User;
}());
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
        this.getUserGreeting = function (name) {
            if (name === void 0) { name = "Guest"; }
            return "Hello, ".concat(name, "! Welcome.");
        };
    }
    UserManager.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserManager.prototype.removeUser = function (id) {
        this.users = this.users.filter(function (user) { return user.id !== id; });
    };
    UserManager.prototype.getUser = function (id) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.id === id) {
                return user;
            }
        }
        return undefined;
    };
    UserManager.prototype.getAllUsers = function () {
        return this.users;
    };
    UserManager.prototype.printUserDetails = function () {
        var allUser = __spreadArray([], this.getAllUsers(), true);
        console.log(allUser);
    };
    return UserManager;
}());
var userManager = new UserManager();
userManager.addUser(new User(1, "lal", "lal@example.com"));
userManager.addUser(new User(2, "Bal", "bal@example.com"));
console.log(userManager.getAllUsers());
userManager.removeUser(1);
console.log(userManager.getUserGreeting("Santa"));
userManager.printUserDetails();
