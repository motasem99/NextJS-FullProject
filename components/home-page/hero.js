import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/mutasem.jpeg'
          alt='An image showing mutasem'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Motasem</h1>
      <p>
        Frontend Web Developer with 2+ experience in React JS, with problem
        solving skills and team working.
      </p>
    </section>
  );
}

export default Hero;
