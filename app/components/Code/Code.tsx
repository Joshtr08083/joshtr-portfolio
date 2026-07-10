'use client'
import { useEffect, useRef } from 'react'
import styles from './Code.module.css'

interface Props {
    content: string;
    language: string;
}

// for some reason prismjs needs dependencies to be imported before specific languages
const languageDependencies: Record<string, Array<string>> = {
    'cpp': ['clike', 'c'],
    'tsx': ['javascript', 'jsx'],
    'typescript': ['javascript']
}

const Code = ( {content, language} : Props) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    async function highlight() {
        
        const Prism = ((await import("prismjs")).default);
        
        await import("prismjs/themes/prism-tomorrow.css");

        if (Object.keys(languageDependencies).includes(language)) {
            
            const dependencies = languageDependencies[language] || [];
            for (const dep of dependencies) {
                try {
                    
                    await import(`prismjs/components/prism-${dep}`);
                } catch (err) {
                    console.error(`Failed to load dependency: ${dep}`, err);
                }
            }
        }

        try {
            await import(`prismjs/components/prism-${language}`);
        } catch (err) {
            console.error(`Failed to load language: ${language}`, err);
        }

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