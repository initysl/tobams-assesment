import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { TRAINING_THE_CONSULTANT as TTC } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function TrainingTheConsultant() {
  return (
    <section aria-labelledby="consultant-title" className="bg-lilac py-12 lg:py-16">
      <Reveal>
        <Container>
          <h2
            id="consultant-title"
            className="font-heading text-[22px] font-semibold text-plum sm:text-3xl lg:text-[42px]"
          >
            {TTC.title}
          </h2>
          <p className="mt-3 text-base font-medium text-plum lg:text-lg">{TTC.subtitle}</p>
          <p className="mt-5 text-base leading-[1.45] sm:leading-[1.6] lg:leading-[1.75] text-ink lg:text-lg">{TTC.body}</p>

          <dl className="mt-8 grid gap-x-14 gap-y-6 rounded-xl bg-plum p-6 sm:grid-cols-2 lg:p-8">
            {TTC.benefits.map((benefit) => (
              <div key={benefit.title}>
                <dt className="font-heading font-semibold text-white">{benefit.title}</dt>
                <dd className="mt-3 text-base leading-[1.45] sm:leading-[1.6] lg:leading-[1.75] text-white">
                  {benefit.body}
                </dd>
              </div>
            ))}
          </dl>

          <Button href={TTC.cta.href} className="mt-8">
            {TTC.cta.label}
            <ArrowUpRightIcon className="size-4" />
          </Button>
        </Container>
      </Reveal>
    </section>
  );
}
