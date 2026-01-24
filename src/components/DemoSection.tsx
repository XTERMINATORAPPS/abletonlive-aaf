import { Play } from "lucide-react";

const DemoSection = () => {
    return (
        <section id="demo" className="py-24 relative">
            {/* Background Accent */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="section-title">
                    See It In <span className="gradient-text">Action</span>
                </h2>
                <p className="section-subtitle">
                    Watch how easy it is to convert your AAF files to Ableton Live projects
                </p>

                <div className="max-w-4xl mx-auto mt-12">
                    <div className="glass-card overflow-hidden">
                        <div className="relative aspect-video bg-background/50">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/RYYILuy_u4M"
                                title="AAF to Ableton Live Converter Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
