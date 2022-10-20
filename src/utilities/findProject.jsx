import { projects } from "../../src/data/project"
import { hyphenateWord } from "./hyphenateWords"

export function findProject(hyphenatedTitle){
  // console.log(projects)
  const target = projects.filter(project => 
    hyphenateWord(project.title) === hyphenatedTitle
  )
  console.log(hyphenatedTitle)
  // const target = projects.map(project => 
  //   console.log(hyphenateWord(project.title))
  // )
  console.log(target[0])
  return target[0]
}
