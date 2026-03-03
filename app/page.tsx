import Link from 'next/link';
import Image from 'next/image';
import WellnessCalculator from './components/WellnessCalculator';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-burgundy mb-8 leading-tight">
              Workspaces designed for how people actually work
            </h1>
            <p className="text-lg md:text-xl text-burgundy/80 mb-8 max-w-3xl leading-relaxed">
              Your hybrid office isn't working. People don't want to come in. When they do, they struggle to focus. Sick leave is up. Turnover is climbing.
            </p>
            <p className="text-lg md:text-xl text-burgundy/80 mb-12 max-w-3xl leading-relaxed">
              The problem isn't your people. It's your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/work-with-me"
                className="inline-block bg-sage text-warm-white px-8 py-4 rounded-sm hover:bg-sage/90 transition-colors text-center font-medium"
              >
                Book a discovery call
              </Link>
              <Link
                href="/speaking"
                className="inline-block bg-transparent border-2 border-sage text-sage px-8 py-4 rounded-sm hover:bg-sage hover:text-warm-white transition-colors text-center font-medium"
              >
                Book me to speak
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <Image
              src="/images/08-portret-blazer-broches.jpg"
              alt="Elianne Alblas"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-burgundy text-warm-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl mb-12">
            Your office is designed for the wrong work
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-lg leading-relaxed">
            <div>
              <p className="mb-6">
                Most offices prioritize collaboration: open plans, breakout spaces, "energy."
              </p>
              <p>
                But 60% of knowledge work requires deep focus. And 30-40% of your team is neuro-diverse (ADHD, autism, HSP), struggling with sensory overload daily.
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-start gap-3">
                <span className="text-dusty-rose text-2xl leading-none">✗</span>
                <span>Constant noise and visual chaos</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-dusty-rose text-2xl leading-none">✗</span>
                <span>Fluorescent lighting causing fatigue</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-dusty-rose text-2xl leading-none">✗</span>
                <span>No escape from interruptions</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-dusty-rose text-2xl leading-none">✗</span>
                <span>Employees choosing home over office</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-dusty-rose text-2xl leading-none">✗</span>
                <span>Rising sick leave and turnover costs</span>
              </p>
            </div>
          </div>
          <p className="text-xl mt-12 italic">
            Sound familiar?
          </p>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="bg-dusty-rose/10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl text-burgundy mb-12">
            Redesign for reality, not trends
          </h2>
          <div className="prose prose-lg max-w-none text-burgundy/90 leading-relaxed space-y-6 mb-12">
            <p>
              I help companies redesign offices using <strong>neuro-inclusive spatial design</strong>: creating spaces that work for everyone, not just extroverts and neurotypical brains.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-burgundy/90">
            <p className="flex items-start gap-3 text-lg">
              <span className="text-sage text-2xl leading-none">✓</span>
              <span>Sensory-balanced zones (focus rooms, quiet areas, collaboration spaces)</span>
            </p>
            <p className="flex items-start gap-3 text-lg">
              <span className="text-sage text-2xl leading-none">✓</span>
              <span>Lighting and acoustics that reduce overwhelm</span>
            </p>
            <p className="flex items-start gap-3 text-lg">
              <span className="text-sage text-2xl leading-none">✓</span>
              <span>Flexible layouts that respect different work styles</span>
            </p>
            <p className="flex items-start gap-3 text-lg">
              <span className="text-sage text-2xl leading-none">✓</span>
              <span>Evidence-based design rooted in environmental psychology</span>
            </p>
          </div>
          <p className="text-xl text-burgundy/80 mt-12 italic">
            You don't need a full renovation. You need strategic tweaks with measurable impact.
          </p>
        </div>
      </section>

      {/* Portfolio Strip */}
      <section className="bg-burgundy py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/02-kerk-werkruimte-orgel.jpg", alt: "Church converted to workspace" },
              { src: "/images/07-entree-teal-boog.jpg", alt: "Commercial entry with teal archway" },
              { src: "/images/10-eetkamer-behang-kroonluchter.jpg", alt: "Meeting space with statement wallpaper" },
              { src: "/images/09-detail-paars-gordijn-kast.jpg", alt: "Interior detail" },
            ].map((img, i) => (
              <div key={i} className="aspect-square relative rounded-sm overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculate Your Cost Section */}
      <section id="calculator" className="bg-dusty-rose/10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl text-burgundy mb-8 text-center">
            What is your office costing you?
          </h2>
          <p className="text-xl text-burgundy/80 mb-12 text-center max-w-2xl mx-auto leading-relaxed">
            Most offices are missing 3-5 spatial wellness features. Each one costs you 4-7% in productivity. Calculate your loss in 60 seconds.
          </p>
          <WellnessCalculator />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="font-heading text-3xl md:text-5xl text-burgundy mb-16 text-center">
          From audit to action in 90 days
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-sage text-warm-white rounded-full flex items-center justify-center text-2xl font-heading mb-6 mx-auto">
              1
            </div>
            <h3 className="font-heading text-xl text-burgundy mb-3">
              Discovery Call
            </h3>
            <p className="text-burgundy/80 leading-relaxed">
              30 minutes, free. Understand your challenges, team dynamics, and goals.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-sage text-warm-white rounded-full flex items-center justify-center text-2xl font-heading mb-6 mx-auto">
              2
            </div>
            <h3 className="font-heading text-xl text-burgundy mb-3">
              Workplace Wellness Audit
            </h3>
            <p className="text-burgundy/80 leading-relaxed">
              Full spatial assessment + optional employee sensory survey.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-sage text-warm-white rounded-full flex items-center justify-center text-2xl font-heading mb-6 mx-auto">
              3
            </div>
            <h3 className="font-heading text-xl text-burgundy mb-3">
              Strategic Report
            </h3>
            <p className="text-burgundy/80 leading-relaxed">
              Priority matrix, quick wins, 3/6/12-month implementation plan.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-sage text-warm-white rounded-full flex items-center justify-center text-2xl font-heading mb-6 mx-auto">
              4
            </div>
            <h3 className="font-heading text-xl text-burgundy mb-3">
              Implementation Support
            </h3>
            <p className="text-burgundy/80 leading-relaxed">
              3 follow-up calls (30/60/90 days) + supplier recommendations.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-burgundy/80 mb-6">
            Investment: €5.000-12.000 (depending on scope)
          </p>
          <Link
            href="/work-with-me"
            className="inline-block bg-sage text-warm-white px-8 py-4 rounded-sm hover:bg-sage/90 transition-colors font-medium"
          >
            Book your discovery call
          </Link>
        </div>
      </section>

      {/* The Problem Section - Research Backed */}
      <section className="bg-burgundy text-warm-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl mb-12 text-center">
            What the research shows
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-warm-white/10 p-8 rounded-sm">
              <h3 className="font-heading text-2xl mb-4 text-dusty-rose">Open-plan offices increase sick leave</h3>
              <p className="text-lg leading-relaxed mb-4">
                A 2014 study tracking 1,852 office workers over 2 years found significantly higher sick leave rates in open-plan offices compared to private or shared-room offices.
              </p>
              <p className="text-sm text-warm-white/60">
                Source: Danielsson et al., Ergonomics, 2014
              </p>
            </div>
            <div className="bg-warm-white/10 p-8 rounded-sm">
              <h3 className="font-heading text-2xl mb-4 text-dusty-rose">10-20% of your team is neurodivergent</h3>
              <p className="text-lg leading-relaxed mb-4">
                ADHD, autism, HSP (Highly Sensitive Person), dyslexia (whether diagnosed or not). Your office design either supports them or exhausts them.
              </p>
              <p className="text-sm text-warm-white/60">
                Source: World Economic Forum, 2023
              </p>
            </div>
          </div>
          <div className="bg-warm-white/10 p-8 rounded-sm">
            <h3 className="font-heading text-2xl mb-4 text-dusty-rose text-center">When companies redesign for wellness</h3>
            <p className="text-lg leading-relaxed text-center mb-4">
              Research on employees transitioning to wellness-focused offices showed satisfaction rates jumping from 42% to 70%, with measurable improvements in mental health and well-being.
            </p>
            <p className="text-sm text-warm-white/60 text-center">
              Source: WELL Building Standard impact study, 2022 (1,300 employees)
            </p>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              The question isn't whether your office affects your people. It's how much it's costing you, and what to fix first.
            </p>
          </div>
        </div>
      </section>

      {/* Who I Am Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="font-heading text-3xl md:text-5xl text-burgundy mb-12">
          Who I am
        </h2>
        <div className="prose prose-lg max-w-none text-burgundy/90 leading-relaxed space-y-6">
          <p>
            I'm Elianne Alblas. I started in commercial design, running my own businesses where I could watch how people actually move through the spaces I helped create. And I kept noticing something most people miss: how differently people respond to the same environment.
          </p>
          <p>
            That turned into an obsession. What is this room doing to people? Not aesthetically. Neurologically. Why does one person thrive in an open space while another quietly shuts down? Why do some environments energize teams and others drain them by lunch?
          </p>
          <p>
            I started reading everything I could find: environmental psychology, neuroscience, neuro-inclusive design. Not as a scientist, but because I needed to understand the gap between how we design spaces and how human brains actually work.
          </p>
          <p>
            Today I work specifically with office environments. Because that's where the stakes are highest. People spend 40+ hours a week in workplaces that either support their nervous system or fight it. Most companies have no idea which one they're doing. That's what I help them figure out.
          </p>
          <div className="pt-6">
            <Link
              href="/about"
              className="text-sage hover:text-sage/80 transition-colors font-medium text-lg"
            >
              More about me →
            </Link>
          </div>
        </div>
      </section>

      {/* From the Blog Section */}
      <section className="bg-dusty-rose/10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl text-burgundy mb-16">
            From the blog
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-dusty-rose/30 p-6 rounded-sm bg-warm-white">
              <h3 className="font-heading text-xl text-burgundy mb-3">
                Why your office feels exhausting before lunch
              </h3>
              <p className="text-burgundy/70 text-sm mb-4">
                It's not you. It's the fluorescent lights doing something to your nervous system that most people don't notice until it's too late.
              </p>
              <Link href="/writing" className="text-sage hover:text-sage/80 transition-colors text-sm font-medium">
                Read more →
              </Link>
            </div>
            <div className="border border-dusty-rose/30 p-6 rounded-sm bg-warm-white">
              <h3 className="font-heading text-xl text-burgundy mb-3">
                The open floor plan isn't broken. It's just designed for the wrong people.
              </h3>
              <p className="text-burgundy/70 text-sm mb-4">
                1 in 5 people on your team experiences sound fundamentally differently. Here's what that means for your workspace.
              </p>
              <Link href="/writing" className="text-sage hover:text-sage/80 transition-colors text-sm font-medium">
                Read more →
              </Link>
            </div>
            <div className="border border-dusty-rose/30 p-6 rounded-sm bg-warm-white">
              <h3 className="font-heading text-xl text-burgundy mb-3">
                How much is sick leave costing your company?
              </h3>
              <p className="text-burgundy/70 text-sm mb-4">
                Most HR teams underestimate the real cost. Here's how to calculate it, and why your office design might be the hidden culprit.
              </p>
              <Link href="/writing" className="text-sage hover:text-sage/80 transition-colors text-sm font-medium">
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-burgundy text-warm-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6">
            Stay in touch
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            I write about spatial wellness, neuro-inclusive design, and the research that changes how we think about workspaces. Straight to your inbox, no fluff.
          </p>
          <a
            href="https://substack.com/@spatialwellness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sage text-warm-white px-8 py-4 rounded-sm hover:bg-sage/90 transition-colors font-medium"
          >
            Subscribe on Substack
          </a>
        </div>
      </section>
    </div>
  );
}
