import ReactMarkdown from 'react-markdown';

import SyntaxHighlighted from '/src/Hook/SyntaxHighlighted';

import PostHeader from '../PostHeader/index';
import { Container, Content, Picture, Spacer } from './style';

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <>
            <Picture
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </>
        );
      }
      return <Content>{paragraph.children}</Content>;
    },

    code(code) {
      return <SyntaxHighlighted code={code} />;
    },
  };

  return (
    <>
      <Spacer />
      <Container>
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
      </Container>
    </>
  );
}

export default PostContent;
