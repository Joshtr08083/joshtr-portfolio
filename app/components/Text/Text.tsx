import ReactMarkdown from 'react-markdown'
import { Components } from 'react-markdown'
interface Props {
    content: string;
    components: Components;
}

const Text = ({content, components} : Props) => {
  return (
    <ReactMarkdown components={components}>
        {content}
    </ReactMarkdown>
  )
}

export default Text