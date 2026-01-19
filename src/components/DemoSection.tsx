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

                {/* Video Container */}
                <div className="max-w-4xl mx-auto mt-12">
                    <div className="glass-card overflow-hidden">
                        <div className="relative aspect-video bg-background/50 flex items-center justify-center group cursor-pointer">
                            {/* Placeholder content */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

                            {/* Play button */}
                            <div className="relative z-10 w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                                <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                            </div>

                            {/* Coming soon text */}
                            <div className="absolute bottom-6 left-0 right-0 text-center">
                                <span className="text-muted-foreground text-sm">Video coming soon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
