import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Health",
  description:
    "Nick Connelly's personal journey into body, mind, and spirit — nutrition, movement, learning, and faith.",
  path: "/health/",
});

export default function HealthPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto container-padding section-padding">
        <h1 className="font-light text-gray-900 leading-tight mb-6 pb-4 border-b border-gray-200">
          Health
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-16">
          My personal journey into body, mind, and spirit.
        </p>

        <div className="space-y-10 animate-slide-up">
          <section className="card">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Body</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="relative w-full aspect-[4/5] overflow-hidden border border-gray-200">
                <Image
                  src="/images/health/journey/body/farmersmarket.jpeg"
                  alt="Farmers market table of carrots, radishes and other fresh vegetables"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="eager"
                />
              </div>
              <div className="relative w-full aspect-[4/5] overflow-hidden border border-gray-200">
                <Image
                  src="/images/health/health-wellness-platform.jpeg"
                  alt="Runners with finisher medals after a race"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-light text-gray-800 mb-2">Nutrition</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I try to only eat whole foods.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-light text-gray-800 mb-2">
                  Physical Activity & Exercise
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I lift, run, and mix in other training. During the day I walk, play sports, and bike instead of driving.
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Mind</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="relative mb-6 w-full aspect-[4/5] overflow-hidden border border-gray-200">
                  <Image
                    src="/images/health/journey/mind/mind-photo-2.jpg"
                    alt="An open notebook and a Bible on a desk"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-light text-gray-800 mb-2">Reading & Learning</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I love reading all kinds of books. You learn so much about yourself in them, from
                  historical fiction to the Stoics, self-help, and beyond.
                </p>
              </div>
              <div>
                <div className="relative mb-6 w-full aspect-[4/5] overflow-hidden border border-gray-200">
                  <Image
                    src="/images/health/journey/mind/mind-photo-1.jpg"
                    alt="Potted plants on a kitchen counter"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-light text-gray-800 mb-2">Plants & Gardening</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I take care of peach trees, blackberry bushes, figs, and a few indoor plants.
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Spirit</h2>

            <div className="mb-8">
              <div className="relative mx-auto max-w-sm w-full aspect-[3/4] overflow-hidden border border-gray-200">
                <Image
                  src="/images/health/journey/spirit/mural-jordan-jesus.jpg"
                  alt="Icon of Jesus entering Jerusalem on a donkey"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="max-w-3xl">
              <h3 className="text-lg font-light text-gray-800 mb-4">
                Connection with God & Continuing Faith
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Faith has been a source of strength and a challenge. I started growing closer to God
                in college, through prayer and reading the Bible. It has given me a purpose and a
                path, and it grounds me in what is true.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              This page reflects my personal lifestyle and the practices that work for me. Nothing
              here is intended as medical, nutritional, fitness, or health advice. For guidance on
              your own health, please consult a qualified physician or licensed professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
