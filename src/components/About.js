import React from 'react';
import '../App.css';

function About() {
  return (
    <React.Fragment>

    <section id='about'>
      <div class="ab-container px-6 py-6 visible h-full sm:min-h-auto">
        <div class="sm:text-3xl sm:py-16">
          <h1 class="text-2xl sm:text-4xl px-6 font-bold sm:px-32">About</h1>
          <p class="sm:px-32 px-6 py-6 sm:text-xl ">
            Hello! I am a 17-year-old Geek and Front End Enthusiast, currently pursuing diploma in  <span>Computer Engineering</span>.
            I believe I am <a href="https://en.wiktionary.org/wiki/wonk">wonk</a> when it comes to Linux and tech. I was never a tech geek before 2020, so I try catching up with latest technologies.
            <br />
            <br />
            I am not a professional programmer. But, I manage to code basic stuff in C, Bash and JS and for web development I use ReactJS as my Front-End Framework.
            
            <br />
            <br />
            I'm a nerd when it comes to reading.I am currently reading, <span>"Wuthering Heights by Emile Bronte" and "To kill a Mockingbird" just to get an experience of reading two books simaltaneously</span>.
            I have read "The Graveyard book", "Kafka on the Shore", "Metamorphosis", "Surely you're joking Mr. Richard" and some more books.
            You can surely drop by your suggestions for books. There might soon be a Library section on this site :D. 
          </p>
        </div>
      </div>
    </section>
    </React.Fragment>
  );
}

export default About;
