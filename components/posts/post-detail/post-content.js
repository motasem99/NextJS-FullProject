import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import classes from './post-content.module.css';

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  // const customRenderers = {
  //   image(image) {
  //     return (
  //       <Image
  //         src={`/images/posts/${post.slug}/${image.src}`}
  //         alt={image.alt}
  //         width={600}
  //         height={300}
  //       />
  //     );
  //   },
  //   paragraph(paragraph) {
  //     const { node } = paragraph;
  //     if (node.children[0].type === 'image') {
  //       const image = node.children[0];
  //       console.log(image);
  //       return (
  //         <div className={classes.image}>
  //           <Image
  //             src={`/images/posts/${post.slug}/${image.url}`}
  //             alt={image.alt}
  //             width={600}
  //             height={300}
  //           />
  //         </div>
  //       );
  //     }
  //     return <p>{paragraph.children}</p>;
  //   },
  // };

  const renderers = {
    image: (image) => {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          height={600}
          width={300}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={renderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
