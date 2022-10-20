export function hyphenateWord(title){
  title = title.toLowerCase()
  title = title.replaceAll(" ","-")
  // console.log(title)
  return title
}