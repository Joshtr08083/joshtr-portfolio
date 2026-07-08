'use client'
import { useEffect, useRef } from 'react'
import styles from './Code.module.css'

interface Props {
    content: string;
    language: string;
}
const Code = ( {content, language} : Props) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    async function highlight() {
        const Prism = ((await import("prismjs")).default);
        await import("prismjs/themes/prism-tomorrow.css");
        await import(`prismjs/components/prism-${language}`);

        if (ref.current) {
            Prism.highlightElement(ref.current);
        }
    }

    highlight();
  }, [content, language])


  return (
    <pre className={`border-b-2xl ${styles.pre}`}>
        <code ref={ref} style={{margin: 0}} className={`language-${language}`}>
            {content}
        </code>
    </pre>
  )
}

export default Code