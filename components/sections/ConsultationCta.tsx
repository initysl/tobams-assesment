import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { CONSULTATION_CTA } from '@/lib/content';
import Reveal from '@/components/ui/Reveal';

export default function ConsultationCta() {
  return (
    <section
      aria-labelledby='consultation-cta-title'
      className='bg-canvas pt-6 pb-0 lg:pt-8'
    >
      <Reveal>
        <Container>
          <div className='mx-auto max-w-284 rounded-xl bg-plum px-6 py-10 text-center sm:px-10 lg:py-12'>
            <h2
              id='consultation-cta-title'
              className='mx-auto max-w-3xl text-lg leading-relaxed font-medium text-white sm:text-xl'
            >
              <span className='lg:hidden'>{CONSULTATION_CTA.mobileBody}</span>
              <span className='hidden lg:inline'>
                {CONSULTATION_CTA.desktopBody}
              </span>
            </h2>
            <Button
              href={CONSULTATION_CTA.cta.href}
              variant='inverse'
              className='mt-7'
            >
              {CONSULTATION_CTA.cta.label}
            </Button>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
