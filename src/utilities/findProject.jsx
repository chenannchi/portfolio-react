import { projects } from "../../src/data/project"
import { hyphenateWord } from "./hyphenateWords"

export function findProject(hyphenatedTitle){
  const target = projects.filter(project => 
    hyphenateWord(project.title) === hyphenatedTitle
  )
  console.log(hyphenatedTitle)
  console.log(target[0])
  return target[0]
}
