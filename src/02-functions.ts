import {Friend, Colleague, EmailContact } from './myTypes'
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
function highestExtension(cs: Colleague[]) {
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


function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW


function findFriends(
    friends: Friend[],
    predicate: (f: Friend) => boolean): String[] {
    const result: String[] = []
    for (let i = 0; i < friends.length; i++) {
        if (predicate(friends[i])) {
            result.push(friends[i].name)
        }
    }
    return result
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
