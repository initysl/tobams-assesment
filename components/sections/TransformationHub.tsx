import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { ArrowUpRightIcon, BoltIcon } from "@/components/ui/icons";
import { TRANSFORMATION_HUB as HUB } from "@/lib/content";

export default function TransformationHub() {
  return (
    <section aria-labelledby="hub-title" className="bg-white py-12 lg:py-16">
      <Container>
        <div className="rounded-3xl bg-blush p-6 sm:p-10">
          <p className="text-lg font-medium text-hub-accent italic">
            {HUB.eyebrow}
          </p>
          <h2
            id="hub-title"
            className="mt-2 text-2xl font-semibold text-plum italic sm:text-3xl lg:text-[34px]"
          >
            {HUB.title}
          </h2>
          <p className="mt-6 text-base leading-[1.65] text-ink">{HUB.body}</p>

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-stretch">
            <div className="w-full lg:w-1/2">
              <Image
                src={HUB.image.src}
                alt={HUB.image.alt}
                width={1500}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>

            <div className="w-full rounded-xl bg-blush-soft p-5 lg:w-1/2 lg:p-6">
              <ul className="grid gap-4 sm:grid-cols-2">
                {HUB.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-center gap-3 rounded-lg bg-white px-4 py-4 text-base text-ink"
                  >
                    <BoltIcon className="size-5 shrink-0 text-plum" />
                    {topic}
                  </li>
                ))}
              </ul>
              <Button href={HUB.cta.href} className="mt-6">
                {HUB.cta.label}
                <ArrowUpRightIcon className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
