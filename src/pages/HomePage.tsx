import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}