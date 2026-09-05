import Image from "next/image";
import Container from "@/components/ui/Container";
import { BoltIcon } from "@/components/ui/icons";
import { MANAGEMENT_DEVELOPMENT_PROGRAM as MDP } from "@/lib/content";

export default function ManagementDevelopmentProgram() {
  return (
    <section aria-labelledby="mdp-title" className="bg-canvas py-12 lg:py-16">
      <Container>
        <div className="flex flex-col gap-8 rounded-3xl bg-plum-dark p-6 sm:p-10 lg:flex-row lg:items-stretch lg:gap-14 lg:p-10">
          {/* The design crops this photo tall so it matches the text column's height. */}
          <div className="relative aspect-3/2 w-full lg:aspect-auto lg:w-1/2">
            <Image
              src={MDP.image.src}
              alt={MDP.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="rounded-lg object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2
              id="mdp-title"
              className="text-[22px] leading-snug font-medium text-white sm:text-3xl lg:text-[40px]"
            >
              {MDP.title}
            </h2>
            {MDP.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 text-base leading-[1.45] sm:leading-[1.6] lg:leading-[1.75] text-white lg:text-lg"
              >
                {paragraph}
              </p>
            ))}

            <ul className="mt-8 space-y-4">
              {MDP.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-center gap-3 rounded-lg bg-plum-muted px-4 py-3.5 text-base text-white lg:text-lg"
                >
                  <BoltIcon className="size-5 shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
