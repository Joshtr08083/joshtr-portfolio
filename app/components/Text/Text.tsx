import Link from 'next/link';
interface Props {
  content: string;
}

const markupRegex = [
  {regex: /^\*\*(.*?)\*\*$/, component: (match: RegExpMatchArray, key:number) => <strong key={key}>{match[1]}</strong>},                                                                                                            //bold **TEXT**
  {regex: /^\*(.*?)\*$/, component: (match: RegExpMatchArray) => <em>{match[1]}</em>},                                                                                                                                              //italics *TEXT*,
  {regex: /^\{([^\}]+)\}\(([^)]+)\)$/,component: (match: RegExpMatchArray) => <Link className="text-blue-600 underline hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100" href={match[2]}>{match[1]}</Link>}, // NextJS router link {TEXT}(URL)
  {regex: /^\<([^\>]+)\>\(([^)]+)\)$/, component: (match: RegExpMatchArray) => <span style={{color: match[2]}}>{match[1]}</span>},                                                                                                  // color <TEXT>(color)
  {regex: /^\[([^\}]+)\]\(([^)]+)\)$/,component: (match: RegExpMatchArray) => <a className="text-blue-600 underline hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100" href={match[2]}>{match[1]}</a>},       // link [TEXT](URL)
  {regex: /^\|([^\|]+)\|\(([^)]+)\)$/,component: (match: RegExpMatchArray) => <a className="text-gray-950 hover:text-gray-600 dark:text-gray-50 dark:hover:text-gray-400" href={match[2]}>{match[1]}</a>},       // jump link |TEXT|(URL)
  {regex: /^\_(.*?)\_$/, component: (match: RegExpMatchArray) => <span className="underline">{match[1]}</span>}                                                                                                                     // underline _TEXT_
]

const splitRegex = /(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\)|\<.*?\>\(.*?\)|\{.*?\}\(.*?\)|\|.*?\|\(.*?\)|\_.*?\_)/;

const parseMarkup = (text:string) => {
  return text.split(splitRegex).map((part:string, index:number) => {
    for (const { regex, component } of markupRegex) {
      if (!part) { return null }

      const match = part.match(regex)
      if (match) {
        return <span key={index}>{component(match, index)}</span>
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