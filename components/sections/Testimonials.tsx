'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import Container from '@/components/ui/Container';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/icons';
import { TESTIMONIALS } from '@/lib/content';

export default function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
  }, []);

  useEffect(() => {
    syncArrows();
    window.addEventListener('resize', syncArrows);
    return () => window.removeEventListener('resize', syncArrows);
  }, [syncArrows]);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('li');
    const step = card ? card.clientWidth + 24 : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  }

  return (
    <section
      aria-labelledby='testimonials-title'
      className='bg-canvas py-12 lg:py-16'
    >
      <Container>
        <h2
          id='testimonials-title'
          className='text-center text-3xl font-semibold text-ink sm:text-4xl lg:text-[40px]'
        >
          Testimonials
        </h2>
      </Container>

      <ul
        ref={trackRef}
        onScroll={syncArrows}
        tabIndex={0}
        aria-label='Client testimonials'
        className='mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-16 scrollbar-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral [&::-webkit-scrollbar]:hidden'
      >
        {TESTIMONIALS.map((testimonial) => (
          <li
            key={testimonial.name}
            className='flex w-[min(100%,420px)] shrink-0 snap-start flex-col rounded-lg border-l-[3px] border-coral bg-white p-6 shadow-[0_2px_12px_rgba(21,21,21,0.06)]'
          >
            <div className='flex items-center gap-4'>
              <Image
                src={testimonial.avatar}
                alt={`Portrait of ${testimonial.name}`}
                width={65}
                height={65}
                className='size-14 rounded-full object-cover'
              />
              <div>
                <p className='font-semibold text-ink'>{testimonial.name}</p>
                <p className='text-[15px] text-slate-body/70'>
                  {testimonial.role}
                </p>
              </div>
            </div>
            <blockquote className='mt-5 text-base leading-[1.75] text-ink lg:text-lg'>
              {testimonial.quote}
            </blockquote>
          </li>
        ))}
      </ul>

      <Container className='mt-4 flex justify-end gap-3'>
        <button
          type='button'
          onClick={() => scrollByCard(-1)}
          disabled={atStart}
          aria-label='Previous testimonials'
          className='rounded-md bg-coral-soft p-2.5 text-coral transition-opacity hover:bg-blush disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral'
        >
          <ChevronLeftIcon className='size-5' />
        </button>
        <button
          type='button'
          onClick={() => scrollByCard(1)}
          disabled={atEnd}
          aria-label='Next testimonials'
          className='rounded-md bg-coral-soft p-2.5 text-coral transition-opacity hover:bg-blush disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral'
        >
          <ChevronRightIcon className='size-5' />
        </button>
      </Container>
    </section>
  );
}
