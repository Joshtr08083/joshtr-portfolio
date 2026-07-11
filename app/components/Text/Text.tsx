import Link from 'next/link';
interface Props {
  content: string;
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
    component: (match: RegExpMatchArray, key:number) => <strong key={key}>{match[1]}</strong>
  },
  {
    regex: /^\*(.*?)\*$/, component: 
    (match: RegExpMatchArray, key:number) => <em key={key}>{match[1]}</em>
  },
  {
    regex: /^\{([^\}]+)\}\(([^)]+)\)$/,
    component: (match: RegExpMatchArray, key:number) => <Link key={key} className="text-blue-600 underline hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100" href={match[2]}>{match[1]}</Link>
  },
  {
    regex: /^\<([^\>]+)\>\(([^)]+)\)$/, 
    component: (match: RegExpMatchArray, key:number) => <span key={key} style={{color: match[2]}}>{match[1]}</span>
  },
  {
    regex: /^\[([^\}]+)\]\(([^)]+)\)$/,
    component: (match: RegExpMatchArray, key:number) => <a key={key} className="text-blue-600 underline hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100" href={match[2]} target="_blank" rel="noopener noreferrer">{match[1]}</a>
  },
  {
    regex: /^\|([^\|]+)\|\(([^)]+)\)$/,
    component: (match: RegExpMatchArray, key:number) => <a key={key} className="text-gray-950 hover:text-gray-600 dark:text-gray-50 dark:hover:text-gray-400" href={match[2]}>{match[1]}</a>
  },
  {
    regex: /^\_(.*?)\_$/, 
    component: (match: RegExpMatchArray, key:number) => <span key={key} className="underline">{match[1]}</span>
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

const Text = ({content} : Props) => {
  return (
    <>
      {parseMarkup(content)}
    </>
  )
}

export default Text