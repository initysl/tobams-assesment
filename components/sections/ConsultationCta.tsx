import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { CONSULTATION_CTA } from '@/lib/content';

export default function ConsultationCta() {
  return (
    <section
      aria-labelledby='consultation-cta-title'
      className='bg-canvas py-10 lg:py-14'
    >
      <Container>
        <div className='rounded-xl bg-plum px-6 py-10 text-center sm:px-10 lg:py-12'>
          <h2
            id='consultation-cta-title'
            className='mx-auto max-w-3xl text-xl leading-relaxed font-medium text-white sm:text-2xl'
          >
            <span className='lg:hidden'>{CONSULTATION_CTA.mobileBody}</span>
            <span className='hidden lg:inline'>
              {CONSULTATION_CTA.desktopBody}
            </span>
          </h2>
          <Button
            href={CONSULTATION_CTA.cta.href}
            variant='inverse'
            className='mt-8 px-8 py-4 text-lg'
          >
            {CONSULTATION_CTA.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
