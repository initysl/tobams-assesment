import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { HERO } from "@/lib/content";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-training-and-development.jpg"
        alt=""
        fill
        sizes="100vw"
        preload
        fetchPriority="high"
        className="-z-10 object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-ink/55" aria-hidden="true" />

      <Container className="flex flex-col items-center py-16 text-center sm:py-20 lg:py-24">
        <p className="rounded-full bg-white/15 px-8 py-3 text-sm tracking-[0.08em] text-white backdrop-blur-sm sm:text-base">
          {HERO.eyebrow}
        </p>
        <h1
          id="hero-title"
          className="mt-6 max-w-4xl text-[34px] leading-tight font-bold text-white sm:text-5xl lg:text-[56px]"
        >
          {HERO.title}
        </h1>
        <p className="mt-4 max-w-[1100px] text-base leading-relaxed text-white lg:text-lg">
          {HERO.body}
        </p>
        <Button href={HERO.cta.href} className="mt-8 px-8 py-4 text-lg">
          {HERO.cta.label}
        </Button>
      </Container>
    </section>
  );
}
