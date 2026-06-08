const testimonials = [
  {
    name: "Ayush kumar Bhakta",
    rating: 5,
    text: "great support team...a much needed software for ableton users, if you are into audio post production of film & video",
  },
  {
    name: "Benjamin Pacheco",
    rating: 5,
    text: "This is amazing! I've wanted something to do this for years. Super easy to use and does what you need it to do.",
  },
  {
    name: "Valiumdupeuple",
    rating: 4,
    text: "Did a test exporting a 45mn documentary edit from Resolve. Some discrepancies with volume here and there, but everything was here in place on the timeline, and who wants a video editor's mix anyway, that's why we're here right? That's more than good enough, insta buy! Congrats for your work. (oh btw, requirements say macOS 14 minimum, but it's working here on macOS 13)",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-muted"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const avgRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Abletonlive.aaf",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Windows, macOS",
  "offers": {
    "@type": "Offer",
    "price": "59.99",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": avgRating,
    "reviewCount": testimonials.length.toString(),
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": testimonials.map(t => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": t.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": t.rating.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": t.text
  }))
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Schema.org structured data for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            What users are saying
          </h2>
          <p className="text-muted-foreground text-sm">
            Real reviews from Gumroad customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <Stars count={t.rating} />
              <p className="text-sm text-foreground/90 leading-relaxed italic flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 border-t border-border pt-4 mt-5">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                  {t.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Verified buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
