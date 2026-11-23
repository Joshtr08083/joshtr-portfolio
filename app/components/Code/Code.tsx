import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/';
import 'prismjs/themes/prism-tomorrow.css';
import styles from './Code.module.css';

interface Props {
  content: string;
  language: string;
}

const Code = ({ content, language }: Props) => {
  loadLanguages([language]);

  const grammar = Prism.languages[language];
  const highlightedHtml = grammar
    ? Prism.highlight(content, grammar, language)
    : content;

  return (
    <pre className={`language-${language} border-b-2xl ${styles.pre}`}>
      <code
        style={{ margin: 0 }}
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: highlightedHtml }}
      />
    </pre>
  );
};

export default Code;
