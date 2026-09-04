import Image from "next/image";
import BulletList from "@/components/ui/BulletList";
import Container from "@/components/ui/Container";
import type { FeatureSplitContent } from "@/lib/content";

/**
 * Drives Corporate Trainings, Personalised Individual Training and Capacity
 * Development — the same block mirrored, so `imageSide` picks the arrangement.
 */
export default function FeatureSplit({ content }: { content: FeatureSplitContent }) {
  const headingId = `${content.id}-title`;
  const imageFirst = content.imageSide === "left";

  return (
    <section aria-labelledby={headingId} className="bg-white py-12 lg:py-16">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
        <div
          className={`w-full lg:w-1/2 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
        >
          <h2
            id={headingId}
            className="text-3xl font-medium text-ink sm:text-4xl lg:text-[42px]"
          >
            {content.title}
          </h2>
          <p className="mt-3 text-base leading-[1.75] text-slate-body lg:text-lg">
            {content.body}
          </p>
          <BulletList items={content.bullets} className="mt-5 lg:pl-9" />
        </div>

        <div
          className={`w-full lg:w-1/2 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
        >
          <Image
            src={content.image.src}
            alt={content.image.alt}
            width={1000}
            height={667}
            sizes="(max-width: 1024px) 100vw, 600px"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
