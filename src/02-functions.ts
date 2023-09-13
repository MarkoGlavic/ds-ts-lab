import {Friend, Colleague } from './myTypes'

import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(f: typeof friends) : string[] {

  return  f.map((friend) =>  `${friend.name} is now ${friend.age + 1}`)


   
}
//console.log(older(friends[0]))
console.log(allOlder(friends))

