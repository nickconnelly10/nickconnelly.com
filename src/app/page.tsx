import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectCard, { projects } from "../components/ProjectCard";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  absoluteTitle: "Nicholas Connelly",
  description: "Exploring health, finance, and the nature of things.",
  path: "/",
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative min-h-screen w-full overflow-hidden">
        <Image
          src="/images/nick/nicholas-personal-2.jpeg"
          alt="Nicholas Connelly"
          fill
          preload
          className="object-cover object-[center_25%] md:object-[center_30%] lg:object-[center_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-black/5" />

        <div className="flex flex-col min-h-screen relative w-full pt-20">
          <div className="relative z-10 max-w-4xl mx-auto container-padding w-full mt-36 md:mt-44">
            <h1 className="font-light text-white leading-tight mb-8 animate-fade-in text-5xl md:text-[4.25rem]">
              Nicholas Connelly
            </h1>
            <p className="text-2xl text-white leading-relaxed max-w-2xl animate-slide-up">
              Exploring health, finance, and the nature of things
            </p>
          </div>
        </div>
      </div>

      <section id="about" className="bg-white py-10 md:py-12">
        <div className="max-w-3xl mx-auto container-padding">
          <h2 className="mb-4 border-b border-gray-200 pb-3 text-xl font-light leading-tight text-gray-900 md:text-xl">
            About
          </h2>

          <div className="max-w-none space-y-4 leading-relaxed text-gray-700">
            <p>
              I&apos;m Nick Connelly, a fourth-year student at the University of Georgia studying Exercise and Sport Science. My passions lie at the crossroads of health, finance, and philosophy. Whether it&apos;s helping others navigate wellness, finances, and the human body, I find purpose in learning what&apos;s around us.
            </p>
            <p>
              Outside of academics, I spend time gardening, being outdoors, and reading. My long-term path is in the medical field, where I&apos;m pursuing studies toward becoming a certified Anesthesiology Assistant (CAA).
            </p>
          </div>
        </div>
      </section>

      <section id="health" className="bg-white pb-10 md:pb-12">
        <div className="max-w-3xl mx-auto container-padding">
          <h2 className="mb-4 border-b border-gray-200 pb-3 text-xl font-light leading-tight text-gray-900 md:text-xl">
            <Link href="/health" className="underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900">
              Health
            </Link>
          </h2>
          <p className="max-w-2xl leading-relaxed text-gray-700">
            My personal journey into body, mind, and spirit.
          </p>
        </div>
      </section>

      <section id="projects" className="bg-white pb-10 md:pb-12">
        <div className="mx-auto max-w-3xl container-padding">
          <h2 className="mb-4 border-b border-gray-200 pb-3 text-xl font-light leading-tight text-gray-900 md:text-xl">
            Projects
          </h2>
          <div className="divide-y divide-gray-200 border-b border-gray-200">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl container-padding py-8 text-sm">
          <div className="flex gap-8">
            <Link href="/resume" className="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900">
              Resume
            </Link>
            <Link href="/contact" className="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900">
              Contact
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-500">© Nicholas Connelly</p>
        </div>
      </section>
    </div>
  );
}
