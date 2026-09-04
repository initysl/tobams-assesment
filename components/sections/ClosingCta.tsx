import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CLOSING_CTA } from "@/lib/content";

export default function ClosingCta() {
  return (
    <section aria-labelledby="closing-cta-title" className="bg-plum-dark py-10 lg:py-12">
      <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-base text-white">{CLOSING_CTA.eyebrow}</p>
          <h2
            id="closing-cta-title"
            className="mt-2 text-2xl font-semibold text-white sm:text-3xl lg:text-[34px]"
          >
            {CLOSING_CTA.title}
          </h2>
        </div>
        <Button
          href={CLOSING_CTA.cta.href}
          className="self-start px-8 py-3.5 lg:self-auto"
        >
          {CLOSING_CTA.cta.label}
        </Button>
      </Container>
    </section>
  );
}
