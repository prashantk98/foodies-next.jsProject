import classes from './post-item.module.css';
import Image from 'next/image'
import Link from 'next/link'

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: "numeric",
    month: "numeric",
    year: 'numeric'
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `posts/${slug}`;
  return (
    <li className={classes.post}>
      {/* <Link href={''}> */}
        <a >
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} layout="Responsive" />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{humanReadableDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      {/* </Link> */}
    </li>
  )
}

export default PostItem