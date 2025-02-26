// interface User{
//     id:number;
//     name:string;
//     email:string;
//     age?:number;
// }

// let u: User={
//     id: 1,
//     name: "Arihant",
//     email: "abc@gmail.com"
// };

// console.log(u);

// ------------------------------------------------Q2---------------------------------

class User{
    id:number;
    name:string;
   email: string
    constructor(id,name,email){
        this.id=id;
        this.name=name;
        this.email=email;
    }
}
class UserManager{
    private users: User[]=[];

    addUser(user:User):void{
        this.users.push(user);
    }
    removeUser(id:number):void{
        this.users = this.users.filter(user=>user.id!==id);
    }
    getUser(id:number):User | undefined {
        for (const user of this.users) {
            if (user.id === id) {
              return user;
            }
          }
          return undefined;

    }
    getAllUsers():User[]{
        return this.users;
    }
    getUserGreeting = (name: string = "Guest"): string => {
        return `Hello, ${name}! Welcome.`;
      };
    printUserDetails():void{
        const [user1]=[...this.getAllUsers()];
        console.log(user1);
        // console.log(user2);

    }
}

const userManager = new UserManager();
userManager.addUser(new User(1, "lal", "lal@example.com"));
userManager.addUser(new User(2, "Bal", "bal@example.com"));

// console.log(userManager.getAllUsers());
// userManager.removeUser(1);

// console.log(userManager.getUserGreeting("Santa"));

userManager.printUserDetails()
