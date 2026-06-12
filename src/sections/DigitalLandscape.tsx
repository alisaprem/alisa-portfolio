import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
} as const;

type ProjectProps = {
  title: string;
  category: string;
  badge: string;
  description: string;
  reverse?: boolean;
  illustration: React.ReactNode;
  sideCards: React.ReactNode;
};

function Project({ title, category, badge, description, reverse, illustration, sideCards }: ProjectProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className={`flex flex-col gap-4 lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className="flex flex-1 flex-col gap-6 rounded-2xl bg-card p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="inline-block self-start rounded-lg bg-white px-3 py-2 text-xs font-medium text-[#2251ad] shadow-sm">
            {badge}
          </div>
          <div className="self-end sm:self-start">{illustration}</div>
        </div>

        <div className="mt-auto flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-2xl font-medium">{title}</h3>
            <p className="mt-1 text-base text-muted-2">{category}</p>
          </div>
          <div className="sm:max-w-xs sm:text-right">
            <p className="text-base">{description}</p>
            <a href="#" className="mt-2 inline-block text-base underline decoration-from-font">
              View Project
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 lg:w-[28%] lg:flex-col">{sideCards}</div>
    </motion.div>
  );
}

function SideCard({ className = '', children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={`flex-1 rounded-2xl ${className}`} style={{ minHeight: 100 }}>
      {children}
    </div>
  );
}

export default function DigitalLandscape() {
  return (
    <section id="works" className="bg-cream px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14 flex flex-col items-center gap-2 text-center"
        >
          <div className="text-3xl">🧭</div>
          <h2 className="text-2xl">My Digital Landscape</h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          <Project
            title="Insights Hub"
            category="Enterprise, SaaS"
            badge="Enterprise B2B Business Intelligence Platform"
            description="Transforming reporting into a unified analytics experience with customisable dashboards and flexible filtering."
            illustration={
              <div className="h-32 w-44 rotate-6 rounded-lg border-4 border-white bg-gradient-to-br from-[#d3e9fe] to-[#74baff] shadow-lg" />
            }
            sideCards={
              <>
                <SideCard className="bg-card flex items-center justify-center text-4xl">📊</SideCard>
                <SideCard className="bg-card-light" />
              </>
            }
          />

          <Project
            title="TripZen"
            category="Mobile Application, B2C"
            badge="Where planning meets peace of mind."
            description="Group travel app created to help reduce the stress of planning group trips."
            reverse
            illustration={
              <div className="h-32 w-44 -rotate-6 rounded-lg border-4 border-white bg-gradient-to-br from-[#fde2e4] to-[#caffe5] shadow-lg" />
            }
            sideCards={
              <>
                <SideCard className="bg-card flex items-center justify-center text-4xl">✈️</SideCard>
                <SideCard className="bg-card-light" />
              </>
            }
          />
        </div>

        <motion.a
          href="#"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mt-6 flex items-center justify-between rounded-full bg-accent px-8 py-5 text-white"
        >
          <span className="text-base font-medium">Take a look at more of my work</span>
          <motion.span
            whileHover={{ scale: 1.06 }}
            className="rounded-full border border-white px-6 py-3 text-sm font-bold"
          >
            See More
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
