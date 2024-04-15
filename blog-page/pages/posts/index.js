import React from 'react'
import AllPostPage from '../../components/posts/all-posts';

const DummyData = [
  {
    title: "Getting stared with nextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis, vel voluptas eius maxime voluptatibus, rerum inventore soluta explicabo necessitatibus aut illo fugit magnam labore eveniet eaque dolores omnis maiores.",
    date: "2022-03-22",
    slug: "getting-started-nextjs",
  },
  {
    title: "Getting stared with nextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis, vel voluptas eius maxime voluptatibus, rerum inventore soluta explicabo necessitatibus aut illo fugit magnam labore eveniet eaque dolores omnis maiores.",
    date: "2022-03-22",
    slug: "getting-started-nextjs",
  },
  {
    title: "Getting stared with nextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis, vel voluptas eius maxime voluptatibus, rerum inventore soluta explicabo necessitatibus aut illo fugit magnam labore eveniet eaque dolores omnis maiores.",
    date: "2022-03-22",
    slug: "getting-started-nextjs",
  },
  {
    title: "Getting stared with nextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis, vel voluptas eius maxime voluptatibus, rerum inventore soluta explicabo necessitatibus aut illo fugit magnam labore eveniet eaque dolores omnis maiores.",
    date: "2022-03-22",
    slug: "getting-started-nextjs",
  },
];

const AllPostsPage = () => {
  return (
    <>
      <AllPostPage posts={DummyData} />
    </>
  )
}

export default AllPostsPage;