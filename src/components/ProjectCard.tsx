import Image from "next/image";

type Project = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  cta?: string;
  external?: boolean;
};

export default function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  cta,
  external = false,
}: Project) {
  const coin = imageSrc?.includes("Bitcoin");
  const content = (
    <div className={imageSrc ? "grid gap-4 md:grid-cols-[9rem_minmax(0,1fr)] md:items-center md:gap-8" : ""}>
      {imageSrc ? (
        <div className="flex aspect-[4/3] w-full max-w-36 items-center justify-start overflow-hidden md:max-w-none">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            width={800}
            height={600}
            sizes="9rem"
            className={
              coin
                ? "h-full w-auto rounded-full object-cover"
                : "h-full w-full object-cover"
            }
          />
        </div>
      ) : null}
      <div>
        <h3 className="mb-2 text-lg font-light text-gray-900 md:text-lg">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
        {href && cta ? (
          <span className="mt-3 inline-block text-sm text-gray-900 underline decoration-gray-300 underline-offset-4 group-hover:decoration-gray-900">
            {cta}
          </span>
        ) : null}
      </div>
    </div>
  );

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block py-5"
        aria-label={`${title} (opens in new tab)`}
      >
        {content}
      </a>
    );
  }

  return <div className="py-5">{content}</div>;
}

export const projects: Project[] = [
  {
    title: "Muscadine",
    description:
      "Founded a crypto infrastructure and risk-curation firm focused on secure self-custody for clients.",
    imageSrc: "/images/muscadine/Bitcoin.svg.png",
    imageAlt: "Bitcoin",
    href: "https://muscadine.xyz",
    cta: "View Platform →",
    external: true,
  },
  {
    title: "NEST Run Club",
    description:
      "Lead and recruited over 500 members on weekly morning runs, social gatherings, and community service events.",
    imageSrc: "/images/nest/nest-run-club-activity-2.jpeg",
    imageAlt: "NEST Run Club huddle",
  },
  {
    title: "Personal Care Assistant",
    description:
      "Providing daily care, including mobility, hygiene, dressing, and health, while keeping the person safe.",
  },
  {
    title: "Undergraduate Research Assistant",
    description:
      "Research on physical activity and time-restricted eating, including analysis, working with participants, and data collection.",
  },
  {
    title: "Peru",
    description:
      "Assisted dentists, pharmacists, and family physicians in providing care to patients in Cusco, Peru.",
    imageSrc: "/images/volunteering-community/community-service-project-1.jpeg",
    imageAlt: "Clinic visit during the Peru mission",
  },
  {
    title: "Community Service",
    description:
      "Helping others and gratitude are values I hold. I have seen so much growth from volunteering at a church, mentoring a high school student, working summer camps, and serving locally.",
    imageSrc: "/images/volunteering-community/volunteering-activity-3.jpeg",
    imageAlt: "Volunteers together outdoors",
  },
];
