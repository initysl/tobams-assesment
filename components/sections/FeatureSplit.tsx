import Image from 'next/image';
import BulletList from '@/components/ui/BulletList';
import Container from '@/components/ui/Container';
import type { FeatureSplitContent } from '@/lib/content';

/**
 * Drives Corporate Trainings, Personalised Individual Training and Capacity
 * Development — the same block mirrored, so `imageSide` picks the arrangement.
 *
 * The two frames stack differently: on desktop the image sits beside the whole
 * text column, but on mobile it slots between the heading and the body copy. A
 * grid keeps that in one DOM order — heading, image, body — and expresses the
 * desktop layout purely through column and row placement.
 */
export default function FeatureSplit({
  content,
}: {
  content: FeatureSplitContent;
}) {
  const headingId = `${content.id}-title`;
  const imageFirst = content.imageSide === 'left';

  return (
    <section aria-labelledby={headingId} className='bg-white py-12 lg:py-16'>
      <Container
        className={`grid gap-5 lg:items-center lg:gap-x-24 lg:gap-y-3 ${
          imageFirst ? 'lg:grid-cols-[600px_1fr]' : 'lg:grid-cols-[1fr_600px]'
        }`}
      >
        <h2
          id={headingId}
          className={`text-[22px] font-medium text-ink sm:text-3xl lg:row-start-1 lg:text-[42px] ${
            imageFirst ? 'lg:col-start-2' : 'lg:col-start-1'
          }`}
        >
          {content.title}
        </h2>

        <div
          className={`lg:row-span-2 lg:row-start-1 lg:self-center ${
            imageFirst ? 'lg:col-start-1' : 'lg:col-start-2'
          }`}
        >
          <Image
            src={content.image.src}
            alt={content.image.alt}
            width={1000}
            height={667}
            sizes='(max-width: 1024px) 100vw, 600px'
            className='aspect-12/7 w-full rounded-xl object-cover'
          />
        </div>

        <div
          className={`lg:row-start-2 ${imageFirst ? 'lg:col-start-2' : 'lg:col-start-1'}`}
        >
          <p className='text-[15px] leading-[1.45] sm:leading-[1.6] lg:leading-[1.75] text-slate-body sm:text-base lg:text-lg'>
            {content.body}
          </p>
          <BulletList items={content.bullets} className='mt-5 lg:pl-9' />
        </div>
      </Container>
    </section>
  );
}
