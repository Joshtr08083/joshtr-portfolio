import Link from 'next/link';
interface Props {
  children: React.ReactNode;
}

/* 
Usage:
  **BOLD**
  *ITALICS*
  _UNDERLINE_
  <TEXT>(COLOR)
  {TEXT}(INTERNAL PAGE URL)
  [TEXT](EXTERNAL PAGE URL)
  |TEXT|{SAME PAGE URL}
*/
const markupRegex = [
  {
    regex: /^\*\*(.*?)\*\*$/, 
    component: (match: RegExpMatchArray, key:number) => <strong key={key}><Text>{match[1]}</Text></strong>
  },
  {
    regex: /^\*(.*?)\*$/, component: 
    (match: RegExpMatchArray, key:number) => <em key={key}><Text>{match[1]}</Text></em>
  },
  {
    regex: /^\{([^\}]+)\}\(([^)]+)\)$/,
    component: (match: RegExpMatchArray, key:number) => <Link key={key} className="text-blue-600 underline hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100" href={match[2]}><Text>{match[1]}</Text></Link>
  },
  {
    regex: /^\<([^\>]+)\>\(([^)]+)\)$/, 
    component: (match: RegExpMatchArray, key:number) => <span key={key} style={{color: match[2]}}><Text>{match[1]}</Text></span>
  },
  {
    regex: /^\[([^\}]+)\]\(([^)]+)\)$/,
    component: (match: RegExpMatchArray, key:number) => <a key={key} className="text-blue-600 underline hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100" href={match[2]} target="_blank" rel="noopener noreferrer"><Text>{match[1]}</Text></a>
  },
  {
    regex: /^\|([^\|]+)\|\(([^)]+)\)$/,
    component: (match: RegExpMatchArray, key:number) => <a key={key} className="text-amber-600 hover:text-amber-900 dark:text-fuchsia-300 dark:hover:text-fuchsia-100" href={match[2]}><Text>{match[1]}</Text></a>
  },
  {
    regex: /^\_(.*?)\_$/, 
    component: (match: RegExpMatchArray, key:number) => <span key={key} className="underline"><Text>{match[1]}</Text></span>
  }
]


const splitRegex = /(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\)|\<.*?\>\(.*?\)|\{.*?\}\(.*?\)|\|.*?\|\(.*?\)|\_.*?\_)/;

const parseMarkup = (text:string) => {
  return text.split(splitRegex).map((part, index) => {
    for (const { regex, component } of markupRegex) {
      if (!part) { return null }

      const match = part.match(regex)
      if (match) {
        return component(match, index);
      }
    }
    return part
  })
}

const Text = ({children} : Props) => {
  if (children as string == null) {return `Failed to parse text: ${children}`}
  return (
    <>
      {parseMarkup(children as string)}
    </>
  )
}

export default Text