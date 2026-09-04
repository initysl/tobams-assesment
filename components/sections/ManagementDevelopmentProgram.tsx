import Image from "next/image";
import Container from "@/components/ui/Container";
import { BoltIcon } from "@/components/ui/icons";
import { MANAGEMENT_DEVELOPMENT_PROGRAM as MDP } from "@/lib/content";

export default function ManagementDevelopmentProgram() {
  return (
    <section aria-labelledby="mdp-title" className="bg-canvas py-12 lg:py-16">
      <Container>
        <div className="flex flex-col gap-8 rounded-3xl bg-plum-dark p-6 sm:p-10 lg:flex-row lg:items-center lg:gap-14 lg:p-10">
          <div className="w-full lg:w-1/2">
            <Image
              src={MDP.image.src}
              alt={MDP.image.alt}
              width={1000}
              height={667}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2
              id="mdp-title"
              className="text-3xl leading-snug font-semibold text-white sm:text-4xl lg:text-[40px]"
            >
              {MDP.title}
            </h2>
            {MDP.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 text-base leading-[1.65] text-white"
              >
                {paragraph}
              </p>
            ))}

            <ul className="mt-8 space-y-4">
              {MDP.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-center gap-3 rounded-lg bg-plum-muted px-4 py-3 text-base text-white"
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
