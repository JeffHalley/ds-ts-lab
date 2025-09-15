import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(friends: Friend[]): string[] {
    const friendsListStr: string[] = []
    for (let i: number = 0; i <= friends.length - 1; i++) {
        friendsListStr.push(`${friends[i].name} is now ${friends[i].age}`)
    }
    return friendsListStr;
}

//console.log(older(friends[0]))

console.log(allOlder(friends))


// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

console.log(highestExtension(colleagues.current));

function addColleague(colleagues: Colleague[], name: string, department: string, email: string) {
    const c: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            extension: highestExtension(colleagues).contact?.extension + 1
        },
    };
    colleagues.push(c)
    return c
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
