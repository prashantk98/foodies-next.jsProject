import classes from './hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/prashant.jpeg" alt='An image showing prashant' width={300} height={300} />
      </div>
      <h1>Hi, I'm Prashant</h1>
      <p>I blog about web-development- especially frontend frameworks like Next.js or React</p>
    </section>
  )
}

export default Hero