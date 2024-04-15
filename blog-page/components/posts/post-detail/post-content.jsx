import classes from './post-content.module.css';
import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown'

const dummyPost = {
  title: "Getting stared with nextJs",
  image: "getting-started-nextjs.png",
  excerpt:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis, vel voluptas eius maxime voluptatibus, rerum inventore soluta explicabo necessitatibus aut illo fugit magnam labore eveniet eaque dolores omnis maiores.",
  date: "2022-03-22",
  slug: "getting-started-nextjs",
  content: '# This is first post content'
};
const PostContent = () => {

  const imagePath = `/images/posts/${dummyPost.slug}/${dummyPost.image}`;
  return (
    <article className={classes.content} >
      <PostHeader title={dummyPost.title} image={imagePath} />
      <ReactMarkdown>{dummyPost.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent;