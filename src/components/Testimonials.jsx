import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      title: "Excellent Communication and a Huge Jump in Core Web Vitals",
      content: "Excellent communication and professionalism from the start and throughout. Shelvin's activity summary detailed a few additional requests, always maintaining an open-minded approach to suggestions and feedback. Our Core Web Vitals jumped immediately after deployment. An excellent experience overall, we will certainly re-engage Shelvin for future projects.",
      author: "Tony Parker",
      role: "Founder • Metro Solutions Group",
      avatar: "TP",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Her JavaScript/React Skills are Through the Roof",
      content: "I've been working with Shelvin for a couple of months now and I can't express enough how impressed I am with her talent. Her JavaScript/React web UI programming skills are through the roof. We have a streamlined workflow, and she's extremely responsive, brief, and efficient. If Shelvin says she can deliver a project, rest assured she can, she will, and it will be awesome.",
      author: "Chris Taylor",
      role: "Chairperson • Core Fitness Club",
      avatar: "CT",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "She's Not Just a Developer, She's a True Partner",
      content: "Shelvin is a genius. She is open-minded, curious, and deeply invested in the projects she chooses to work on. She takes time to fully grasp our product vision—even the vague 'dark theme, high tech' ideas—and brings it to life. She's not just a developer; she's a true partner in the process. She's brilliant!",
      author: "Sarah Chen",
      role: "Product Owner • Digital Bridge Consulting",
      avatar: "SC",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 4,
      title: "An Artist with Code, Delivering Real SEO Results",
      content: "Shelvin is an artist who creates magic with code. I want something beautiful? She delivers. I want something fully built, that can go live week after week. She is constantly improving, ensuring our Sanity CMS-based website adheres to the newest SEO standards and efficiency. The results speak for themselves.",
      author: "Michael Davis",
      role: "Founder/CTO • TechVision Labs",
      avatar: "MD",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      id: 5,
      title: "Exceptional Problem Solver with Great Design Sense",
      content: "Working with Shelvin has been incredible. Her attention to detail and ability to understand complex requirements is outstanding. She delivers clean, efficient code and has a great eye for design. Communication is always clear and she's proactive about suggesting improvements.",
      author: "Jennifer Martinez",
      role: "CEO • StartupHub",
      avatar: "JM",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      id: 6,
      title: "Brilliant Technical Skills and Amazing Work Ethic",
      content: "Shelvin's technical expertise in full-stack development is remarkable. She built our entire platform from scratch using Next.js and implemented complex features with ease. Her dedication to quality and meeting deadlines while maintaining excellent code standards is truly impressive.",
      author: "Robert Johnson",
      role: "Director • Innovation Labs",
      avatar: "RJ",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      id: 7,
      title: "Outstanding Web3 Integration and Smart Contracts",
      content: "Shelvin's expertise in blockchain technology is exceptional. She implemented our entire NFT verification system using Solidity and integrated it seamlessly with our frontend. Her understanding of Web3 concepts and ability to explain complex technical details made the project smooth and successful.",
      author: "David Kim",
      role: "CTO • BlockchainVentures",
      avatar: "DK",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 8,
      title: "FastAPI Backend Architecture Excellence",
      content: "We needed a scalable backend for our legal tech platform and Shelvin delivered beyond expectations. Her FastAPI implementation with PostgreSQL was clean, efficient, and well-documented. She set up proper authentication, real-time updates with WebSockets, and the performance is outstanding.",
      author: "Lisa Anderson",
      role: "Engineering Manager • LegalTech Inc",
      avatar: "LA",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 9,
      title: "AI Integration Done Right",
      content: "Shelvin integrated OpenAI's LLMs into our document analysis system with impressive results. She handled the complexity of prompt engineering, rate limiting, and error handling professionally. The AI features she built have transformed how we process legal documents.",
      author: "Marcus Williams",
      role: "Product Lead • AI Solutions",
      avatar: "MW",
      gradient: "from-lime-500 to-green-500"
    },
    {
      id: 10,
      title: "Perfect Balance of Speed and Quality",
      content: "What sets Shelvin apart is her ability to move fast without sacrificing quality. She shipped our MVP in record time with clean, maintainable code. Her experience with Next.js, TypeScript, and TailwindCSS meant we got a production-ready product quickly.",
      author: "Emma Thompson",
      role: "Founder • StartFast",
      avatar: "ET",
      gradient: "from-fuchsia-500 to-pink-500"
    },
    {
      id: 11,
      title: "AWS Infrastructure Setup Excellence",
      content: "Shelvin set up our entire AWS infrastructure from scratch. She configured EC2 instances, set up proper security groups, implemented CI/CD pipelines, and ensured everything was scalable and cost-effective. Her DevOps knowledge is impressive for a full-stack developer.",
      author: "Kevin Brown",
      role: "CTO • CloudScale",
      avatar: "KB",
      gradient: "from-sky-500 to-blue-500"
    },
    {
      id: 12,
      title: "Exceptional Collaboration and Communication",
      content: "Shelvin is a dream to work with. She asks the right questions, provides regular updates, and actively contributes ideas to improve the product. Her ability to work with designers, PMs, and other developers makes her an invaluable team member on any project.",
      author: "Rachel Green",
      role: "Product Designer • DesignHub",
      avatar: "RG",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  // Duplicate testimonials MANY times for seamless infinite loop
  const allTestimonials = [
    ...testimonials, 
    ...testimonials, 
    ...testimonials, 
    ...testimonials
  ];

  return (
    <section className="py-20 px-6 overflow-hidden relative bg-gradient-to-b from-background via-surface-dark/30 to-background">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto mb-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
            <Quote size={16} className="text-pink-400" />
            <span className="text-xs uppercase tracking-wider text-text-tertiary">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light serif-heading mb-4">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-primary">People Say</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Real feedback from amazing clients I've had the pleasure to work with
          </p>
        </div>
      </div>

      {/* Auto-scrolling Container */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="overflow-hidden w-full">
          <div 
            className={`flex gap-4 ${!isPaused ? 'animate-scroll-testimonials' : 'paused'}`}
          >
            {allTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[350px] glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300 group cursor-pointer relative"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center`}>
                    <Quote size={18} className="text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 serif-heading leading-tight">
                  {testimonial.title}
                </h3>

                {/* Content */}
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-text-tertiary/10">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center font-bold text-white text-xs`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.author}</div>
                    <div className="text-xs text-text-tertiary">{testimonial.role}</div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Inline keyframe animation */}
        <style>{`
          @keyframes scrollTestimonials {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

      {/* Pause Indicator */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs text-text-tertiary">
          {isPaused ? (
            <>
              <div className="w-2 h-2 rounded-full bg-pink-400"></div>
              <span>Paused - Hover to read</span>
            </>
          ) : (
            <>
              <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></div>
              <span>Auto-scrolling - Hover to pause</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;