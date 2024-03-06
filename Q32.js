"use strict";
// 32.	Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
Object.defineProperty(exports, "__esModule", { value: true });
// List of current users
let current_users = ["Mehak", "Rida", "Aliya", "Ayesha", "Rubab"];
// List of new users
let new_users = ["Maria", "Zarafshan", "Rukhsana", "Ayesha", "Aliya"];
// Loop through new_users list
for (let new_user of new_users) {
    // Convert both the new username and current usernames to lowercase for case-insensitive comparison
    let lowercase_new_user = new_user.toLowerCase();
    let lowercase_current_users = current_users.map(user => user.toLowerCase());
    // Check if the new username already exists
    if (lowercase_current_users.includes(lowercase_new_user)) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
        // Add the new username to the list of current users
        current_users.push(new_user);
    }
}
