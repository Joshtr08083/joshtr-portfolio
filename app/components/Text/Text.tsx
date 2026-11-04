import Link from 'next/link';
interface Props {
  children: React.ReactNode;
}
import styles from './text.module.css'

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
    regex: /^\`(.*?)\`$/,
    component: (match: RegExpMatchArray, key:number) => <span key={key} className={`p-1 rounded-sm ${styles.inlineCodeBlock}`}><Text>{match[1]}</Text></span>
  },
  {
    regex: /^\*\*(.*?)\*\*$/, 
    component: (match: RegExpMatchArray, key:number) => <strong key={key} className={styles.bold}><Text>{match[1]}</Text></strong>
  },
  {
    regex: /^\*(.*?)\*$/, component: 
    (match: RegExpMatchArray, key:number) => <em key={key}><Text>{match[1]}</Text></em>
  },
  {
    regex: /^\_(.*?)\_$/, 
    component: (match: RegExpMatchArray, key:number) => <span key={key} className="underline"><Text>{match[1]}</Text></span>
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
  }
]


const splitRegex = /(\*\*.*?\*\*|\*.*?\*|\`.*?\`|\[.*?\]\(.*?\)|\<.*?\>\(.*?\)|\{.*?\}\(.*?\)|\|.*?\|\(.*?\)|\_.*?\_)/;
const escapable = /\\([*_`[\]{}<>|()])/g;
const escapeTokens: Record<string, string> = {
  '*': '\uE000',
  '_': '\uE001',
  '`': '\uE002',
  '[': '\uE003',
  ']': '\uE004',
  '{': '\uE005',
  '}': '\uE006',
  '<': '\uE007',
  '>': '\uE008',
  '|': '\uE009',
  '(': '\uE00A',
  ')': '\uE00B',
};

const restoreEscapes = (text: string) =>
  text.replace(/[\uE000-\uE00B]/g, token => {
    const entry = Object.entries(escapeTokens)
      .find(([, value]) => value === token);

    return entry ? entry[0] : token;
  });

const parseMarkup = (text: string) => {
  const protectedText = text.replace(escapable, (_, character) => {
    return escapeTokens[character];
  });

  return protectedText.split(splitRegex).map((part, index) => {
    if (!part) return null;

    for (const { regex, component } of markupRegex) {
      const match = part.match(regex);

      if (match) {
        return component(match, index);
      }
    }

    return restoreEscapes(part);
  });
};
const Text = ({children} : Props) => {
  if (children as string == null) {return `Failed to parse text: ${children}`}
  return (
    <>
      {parseMarkup(children as string)}
    </>
  )
}

export default Text