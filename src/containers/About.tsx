'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Tavershima Achir, a digital markerter and Business
            Relationship Manager at{' '}
            <Link
              href="https://www.moniepoint.com"
              target="_blank"
              className="text-accent"
            >
              Moniepoint Inc
            </Link>
            .<br /> I'm a strong advocate for entrepreneurial mindset, dedicated
            to exploring innovative business opportunities and fostering
            sustainable growth
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working as CEO
            at -{' '}
            <Link
              href="https://www.facebook.com/tlogmedia"
              target="_blank"
              className="text-accent"
            >
              TLOG Digitals
            </Link>
            .
          </p>
          <p>
            My primary focus right now is acquiring new digital skills and
            deepening my knowledge in IT.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
