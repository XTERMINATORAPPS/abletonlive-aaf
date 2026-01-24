import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "What DAWs and NLEs are supported?",
        answer: "Abletonlive.aaf supports AAF files from Pro Tools, DaVinci Resolve, Logic Pro, Adobe Premiere Pro, Adobe Audition, Nuendo, Cubase, and MAGIX Vegas."
    },
    {
        question: "What gets preserved during conversion?",
        answer: "Audio clips, clip positions, track structure, volume automation, fades, crossfades, and sample rate settings are all preserved in the conversion."
    },
    {
        question: "Does the trial have any limitations?",
        answer: "The free trial includes 5 full conversions. After that, you'll need to purchase a lifetime license for unlimited conversions."
    },
    {
        question: "Is the license a subscription?",
        answer: "No! It's a one-time purchase of $50 for a lifetime license. No recurring fees, and you get free updates forever."
    },
    {
        question: "Does AAF support MIDI data?",
        answer: "No, AAF is an audio-only format. MIDI tracks need to be bounced to audio before export, or exported separately as MIDI files."
    },
    {
        question: "Can I use one license on multiple computers?",
        answer: "Each license is valid for one computer at a time. You can transfer your license to a new computer by deactivating it from the old one. Internet connection is required for license activation."
    },
    {
        question: "What are the system requirements?",
        answer: "You need Ableton Live 10 or later, and either Windows 10/11 or macOS 10.14+. Internet connection is required for license activation and updates."
    },
    {
        question: "Is there a refund policy?",
        answer: "No refunds are available after license activation. We recommend using the free 5-conversion trial to test the software before purchasing."
    },
    {
        question: "What features are coming in future updates?",
        answer: "We're working on pan automation transfer, custom tempo and time signature input, and batch conversion. These will be included as free updates for all license holders."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 relative">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="section-title">
                    Frequently Asked <span className="gradient-text">Questions</span>
                </h2>
                <p className="section-subtitle">
                    Everything you need to know about Abletonlive.aaf
                </p>

                <div className="max-w-3xl mx-auto mt-12 space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="glass-card overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-medium text-foreground">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-primary transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-48 pb-4" : "max-h-0"
                                    }`}
                            >
                                <p className="px-6 text-muted-foreground">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
