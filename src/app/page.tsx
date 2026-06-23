'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative min-h-screen w-full overflow-hidden'>
        <Image
          src='/images/nick/nicholas-personal-2.jpeg'
          alt='Nicholas Connelly'
          fill
          priority
          className='object-cover object-[center_25%] md:object-[center_30%] lg:object-[center_35%]'
          sizes='100vw'
          quality={85}
        />
        
        <div className='flex flex-col min-h-screen relative w-full pt-20'>
          <div className='relative z-10 max-w-4xl mx-auto container-padding w-full mt-36 md:mt-44'>
            <h1 className='font-light text-white leading-tight mb-8 animate-fade-in text-5xl md:text-[4.25rem]'>
              Nicholas Connelly
            </h1>
            <p className='text-2xl text-white leading-relaxed max-w-2xl animate-slide-up'>
              Exploring health, finance, and the nature of things
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className='section-padding bg-white'>
        <div className='max-w-4xl mx-auto container-padding'>
          <div className='text-center mb-16 animate-fade-in'>
            <h2 className='font-light text-gray-800 leading-tight mb-8'>
              About Me
            </h2>
          </div>
          
          <div className='prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6 animate-fade-in'>
            <p className='text-lg'>
              I'm Nick Connelly, a third-year student at the University of Georgia studying Exercise and Sport Science. My passions lie at the crossroads of health, finance, and philosophy. Whether it's helping others navigate wellness, finances, and the human body, I find purpose to always question whats around us.
            </p>
            
            <p className='text-lg'>
              Outside of academics, I spend time gardening, being outdoors, and reading—often drawing inspiration from the stoics and in my faith in Jesus. My long-term path is in the medical field, where I'm pursuing studies toward becoming a certified Anesthesiology Assistant (caa).
            </p>
            
            <p className='text-lg'>
              I founded Muscadine to help others navigate the emerging world of cryptography and decentralized finance, and created a personal health and wellness site to share tools for preventing lifestyle-related chronic diseases. My commitment to health and community led me to create NEST Run Club which has led to a massive growth in students fitness and wellbeing at UGA. At the core of everything I do is a simple value: helping others, while living in the nature of truth.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className='section-padding bg-gray-50'>
        <div className='max-w-6xl mx-auto container-padding'>
          <div className='text-center mb-16 animate-fade-in'>
            <h2 className='font-light text-gray-800 leading-tight mb-8'>
              Projects & Initiatives
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              A collection of my work in health technology, community building, and global health initiatives.
            </p>
          </div>
          
          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-slide-up'>
            {/* Muscadine - DeFi */}
            <div className='card card-hover'>
              <div className='aspect-square mb-6 overflow-hidden rounded-lg'>
                <Image
                  src='/images/muscadine/Bitcoin.svg.png'
                  alt='Muscadine Platform'
                  width={400}
                  height={400}
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Muscadine</h3>
              <p className='text-gray-600 mb-4'>
                Muscadine is a small business focused on Bitcoin, crypto security, and DeFi solutions, helping individuals navigate the digital economy.
              </p>
              <a
                href='https://muscadine.io'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium'
              >
                View Platform →
              </a>
            </div>

            {/* Health Platform */}
            <div className='card card-hover'>
              <div className='aspect-square mb-6 overflow-hidden rounded-lg'>
                <Image
                  src='/images/health/health-wellness-platform.jpeg'
                  alt='Health Platform'
                  width={400}
                  height={400}
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Health & Wellness</h3>
              <p className='text-gray-600 mb-4'>
                This site reflects my journey in health, medicine, and holistic living. I also have a collection of reliable resources and protocols I use for my own health and wellbeing.
              </p>
              <a
                href='https://health.nickconnelly.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium'
              >
                View Platform →
              </a>
            </div>

            {/* NEST Run Club */}
            <div className='card card-hover'>
              <div className='aspect-square mb-6 overflow-hidden rounded-lg'>
                <Image
                  src='/images/nest/nest-run-club-activity-2.jpeg'
                  alt='NEST Run Club'
                  width={400}
                  height={400}
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>NEST Run Club</h3>
              <p className='text-gray-600 mb-4'>
                The NEST Run Club is a student-led community at the University of Georgia that brings people together through weekly runs, promoting both the physical benefits of exercise while fostering friendship, consistency, and growth.
              </p>
              <a
                href='/nest'
                className='text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium'
              >
                Learn More →
              </a>
            </div>

            {/* Volunteering */}
            <div className='card card-hover'>
              <div className='aspect-square mb-6 overflow-hidden rounded-lg'>
                <Image
                  src='/images/volunteering-community/volunteering-activity-3.jpeg'
                  alt='Volunteering & Community Service'
                  width={400}
                  height={400}
                  className='w-full h-full object-cover object-center'
                  style={{ objectPosition: 'center center' }}
                />
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>Volunteering & Service</h3>
              <p className='text-gray-600 mb-4'>
                My commitment to service through medical missions, community development, and local volunteer work.
              </p>
              <a
                href='/volunteering'
                className='text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium'
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
