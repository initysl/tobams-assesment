import Image from 'next/image';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ArrowUpRightIcon } from '@/components/ui/icons';
import { LEARNING_MANAGEMENT_SYSTEM as LMS } from '@/lib/content';
import Reveal from '@/components/ui/Reveal';

/**
 * On desktop the portrait sits to the left of the whole text column; on mobile
 * the design slots it between the heading and the copy card. The grid keeps one
 * DOM order - heading, image, card - for both.
 */
export default function LearningManagementSystem() {
  return (
    <section aria-labelledby='lms-title' className='bg-lilac py-12 lg:py-20'>
      <Reveal>
        <Container className='grid justify-items-center gap-8 lg:grid-cols-[556px_1fr] lg:justify-items-stretch lg:gap-x-16 lg:gap-y-6'>
          <h2
            id='lms-title'
            className='justify-self-start font-heading text-[22px] font-semibold text-plum sm:text-3xl lg:col-start-2 lg:row-start-1 lg:text-[42px]'
          >
            {LMS.title}
          </h2>

          <div className='w-full max-w-105 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:max-w-none lg:self-start'>
            <Image
              src={LMS.image.src}
              alt={LMS.image.alt}
              width={1880}
              height={1253}
              sizes='(max-width: 1024px) 90vw, 556px'
              className='aspect-square w-full rounded-full object-cover'
            />
          </div>

          <div className='w-full lg:col-start-2 lg:row-start-2'>
            <div className='rounded-xl bg-lilac-deep p-6 lg:p-7'>
              <p className='text-[15px] leading-[1.45] sm:leading-[1.6] lg:leading-[1.75] text-ink sm:text-base lg:text-lg'>
                {LMS.body}
              </p>
              <p className='mt-5 text-[15px] font-semibold text-plum sm:text-base lg:text-lg'>
                {LMS.coursesLabel}
              </p>
              <ul className='mt-3 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3'>
                {LMS.courses.map((course) => (
                  <li
                    key={course}
                    className='flex items-start gap-2 text-[15px] text-ink sm:text-base'
                  >
                    <span aria-hidden='true' className='leading-6'>
                      &bull;
                    </span>
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button href='/tg-academy' className='mt-6'>
              Learn More
              <ArrowUpRightIcon className='size-4' />
            </Button>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
