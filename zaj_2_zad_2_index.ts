import {EventManager} from "./EventManager";
import {EventQueue} from "./EventQueue";

const manager = new EventManager<string>();

manager.pushEvent({type: "Login", data: "User has logged in"});
manager.pushEvent({type: "Logout", data: "User has logged out"});
manager.pushEvent({type: "Insert", data: "User has inserted some data"});

console.log("Ile zdarzen jest w kolecje", manager.eventCount())
console.log("Czyszcze kolejke");
console.log(manager.clearEvents());

