import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { LEARNING_MANAGEMENT_SYSTEM as LMS } from "@/lib/content";

export default function LearningManagementSystem() {
  return (
    <section aria-labelledby="lms-title" className="bg-lilac py-14 lg:py-20">
      <Container className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
        <div className="w-full max-w-[420px] shrink-0 lg:max-w-[556px]">
          <Image
            src={LMS.image.src}
            alt={LMS.image.alt}
            width={1880}
            height={1253}
            sizes="(max-width: 1024px) 90vw, 556px"
            className="aspect-square w-full rounded-full object-cover"
          />
        </div>

        <div className="w-full">
          <h2
            id="lms-title"
            className="text-3xl font-semibold text-plum sm:text-4xl lg:text-[42px]"
          >
            {LMS.title}
          </h2>

          <div className="mt-6 rounded-xl bg-lilac-deep p-6 lg:p-7">
            <p className="text-base leading-[1.75] text-ink lg:text-lg">{LMS.body}</p>
            <p className="mt-5 font-semibold text-plum lg:text-lg">{LMS.coursesLabel}</p>
            <ul className="mt-3 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {LMS.courses.map((course) => (
                <li
                  key={course}
                  className="flex items-start gap-2 text-base text-ink"
                >
                  <span aria-hidden="true" className="leading-6">
                    &bull;
                  </span>
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button href="/tg-academy" className="mt-6">
            Learn More
            <ArrowUpRightIcon className="size-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
