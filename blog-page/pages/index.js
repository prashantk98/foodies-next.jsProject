import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

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
const HomePage = () => {
  return (
    <>
      <Hero/>
      <FeaturedPosts posts={DummyData} />
    
    </>
  )
}

export default HomePage;