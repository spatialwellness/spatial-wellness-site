import Image from 'next/image';

export default function Writing() {
  const articles = [
    {
      title: "Why your office feels exhausting before lunch",
      date: "March 2026",
      excerpt: "It's not you. It's the fluorescent lights doing something to your nervous system that most people don't notice until it's too late."
    },
    {
      title: "The open floor plan isn't broken. It's just designed for the wrong people.",
      date: "February 2026",
      excerpt: "1 in 5 people on your team experiences sound fundamentally differently. Here's what that means for your workspace."
    },
    {
      title: "Three things you can change today (without asking permission)",
      date: "January 2026",
      excerpt: "Small changes that make an immediate difference to how your workspace affects your focus, energy, and mood."
    },
    {
      title: "What environmental psychology actually tells us about workspace design",
      date: "December 2025",
      excerpt: "The research exists. It's just buried in academic papers that nobody in design is reading."
    },
    {
      title: "The colour of your walls is doing something to you",
      date: "November 2025",
      excerpt: "Whether you chose it deliberately or not, your spatial environment is shaping your mood every single day."
    },
    {
      title: "Neuro-inclusive design isn't a trend. It's overdue.",
      date: "October 2025",
      excerpt: "Why designing for the average person means your space works well for almost no one."
    }
  ];

  return (
    <div className="pt-20">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="font-heading text-4xl md:text-6xl text-burgundy mb-6">
          Writing
        </h1>
        <p className="text-xl text-burgundy/80 mb-12 max-w-3xl">
          Research, observations, and the occasional strong opinion about how spaces shape us.
        </p>

        <div className="bg-dusty-rose/10 p-10 rounded-sm mb-16 text-center">
          <h2 className="font-heading text-2xl text-burgundy mb-4">
            Subscribe for updates
          </h2>
          <p className="text-burgundy/80 mb-6 max-w-2xl mx-auto">
            I write about how spaces shape us, the science, the details, the things nobody tells you about your workspace. Straight to your inbox, no fluff.
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

        <div className="relative aspect-[4/3] md:aspect-[16/9] max-w-4xl mx-auto rounded-sm overflow-hidden mb-16">
          <Image 
            src="/images/11-portret-aquarel.jpg" 
            alt="Elianne Alblas" 
            fill 
            className="object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="border border-dusty-rose/30 p-8 rounded-sm hover:border-dusty-rose/50 transition-colors">
              <div className="text-sm text-burgundy/60 mb-3">{article.date}</div>
              <h3 className="font-heading text-2xl text-burgundy mb-4">
                {article.title}
              </h3>
              <p className="text-burgundy/80 mb-6 leading-relaxed">
                {article.excerpt}
              </p>
              <a
                href="https://substack.com/@spatialwellness"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage hover:text-sage/80 transition-colors font-medium"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
