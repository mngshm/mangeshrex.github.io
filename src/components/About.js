import React from 'react';
import '../App.css';

function About() {
  return (
    <section id='about'>
      <div class="ab-container px-6 py-6 visible h-full sm:min-h-auto">
        <div class="sm:text-3xl sm:py-16">
          <h1 class="text-2xl sm:text-4xl px-6 font-bold sm:px-32">About</h1>
          <p class="sm:px-32 px-6 py-6 sm:text-xl ">
            Hello! I am a 17-year-old front-end web developer and a tech geek from India, currently pursuing a degree in  <span>Computer Engineering</span>.
            I got interested in technology during the COVID-19 lockdown, when everything was completely shut off, and I
            developed an interest in computers and <span>Linux</span>.
            <br />
            <br />
            I work with HTML and CSS the most. I have a basic understanding of C/C++ and JS.
            <br />
            And I am trying to get efficient at front-end programming with Javascript frameworks.
            <br />
            <br />
            Speaking of reading, I am currently reading, <span>"Surely you must be joking, Mr. Richard"</span>. I have
            completed <span>"The Almanack of Naval Ravikant"</span>. During my spare time, I capture street photographs
            and portraits. And, from a classical music standpoint, I enjoy playing tabla.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
