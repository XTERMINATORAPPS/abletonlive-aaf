import { useState } from "react";
import { Bug, Send, CheckCircle, AlertCircle } from "lucide-react";

const daws = [
  "Pro Tools",
  "DaVinci Resolve",
  "Logic Pro",
  "Sequoia",
  "Nuendo/Cubase",
  "Other",
];

// Ableton Live versions from 10.1.43 to current (12.3.2)
// Reference: https://www.ableton.com/en/release-notes/live-12/
const abletonVersions = [
  // Live 12.3 Series (newest first)
  "12.3.2",
  "12.3.1",
  "12.3",

  // Live 12.2 Series
  "12.2.7",
  "12.2.6",
  "12.2.5",
  "12.2.2",
  "12.2.1",
  "12.2",

  // Live 12.1 Series
  "12.1.11",
  "12.1.10",
  "12.1",

  // Live 12.0 Series
  "12.0.25",
  "12.0",

  // Live 11.x Series
  "11.3.13",
  "11.3.11",
  "11.3.4",

  // Live 10.x Series
  "10.1.43",
];

const BugReportSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    daw: "",
    abletonVersion: "",
    description: "",
    steps: "",
    aafLink: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Create a hidden iframe to handle form submission without redirect
    const iframe = document.createElement("iframe");
    iframe.name = "silentforms-frame";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    // Create a temporary form for submission
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://silentforms.com/api/submit";
    form.target = "silentforms-frame";

    // Add form fields
    const fields = {
      accessKey: "df3e9c5e66b860e0c7c1be9dd2d58175c4b0e7d8257cc4fb3829885d3008543b",
      name: "Bug Report",
      email: formData.email,
      message: `DAW: ${formData.daw}\nAbleton Live: ${formData.abletonVersion}\n\nBug Description:\n${formData.description}\n\nSteps to Reproduce:\n${formData.steps}${formData.aafLink ? `\n\nAAF File Link:\n${formData.aafLink}` : ""}`,
    };

    Object.entries(fields).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    // Clean up and show success after a delay
    setTimeout(() => {
      document.body.removeChild(form);
      document.body.removeChild(iframe);
      setStatus("success");
      setFormData({ email: "", daw: "", abletonVersion: "", description: "", steps: "", aafLink: "" });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="bug-report" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Bug className="w-8 h-8 text-primary" />
          <h2 className="section-title mb-0">Found a Bug?</h2>
        </div>
        <p className="section-subtitle">
          Help us improve by reporting issues. We typically respond within 48 hours.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8">
            {status === "success" ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Report Submitted!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for your feedback. We'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-outline mt-6"
                >
                  Submit Another Report
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="you@example.com"
                  />
                </div>

                {/* DAW Selection */}
                <div>
                  <label htmlFor="daw" className="block text-sm font-medium text-foreground mb-2">
                    DAW Used <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="daw"
                    name="daw"
                    required
                    value={formData.daw}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select your DAW</option>
                    {daws.map((daw) => (
                      <option key={daw} value={daw}>{daw}</option>
                    ))}
                  </select>
                </div>

                {/* Ableton Version */}
                <div>
                  <label htmlFor="abletonVersion" className="block text-sm font-medium text-foreground mb-2">
                    Ableton Live Version <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="abletonVersion"
                    name="abletonVersion"
                    required
                    value={formData.abletonVersion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select Ableton version</option>
                    {abletonVersions.map((version) => (
                      <option key={version} value={version}>{version}</option>
                    ))}
                  </select>
                </div>

                {/* Bug Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                    Bug Description <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Describe the bug you encountered..."
                  />
                </div>

                {/* Steps to Reproduce */}
                <div>
                  <label htmlFor="steps" className="block text-sm font-medium text-foreground mb-2">
                    Steps to Reproduce
                  </label>
                  <textarea
                    id="steps"
                    name="steps"
                    rows={3}
                    value={formData.steps}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="1. Open the app&#10;2. Load an AAF file&#10;3. ..."
                  />
                </div>

                {/* AAF File Link */}
                <div>
                  <label htmlFor="aafLink" className="block text-sm font-medium text-foreground mb-2">
                    AAF File Link <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input
                    type="url"
                    id="aafLink"
                    name="aafLink"
                    value={formData.aafLink}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Google Drive, Dropbox, WeTransfer, SwissTransfer link..."
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Share your AAF file to help us reproduce the issue
                  </p>
                </div>

                {/* Error Message */}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-destructive bg-destructive/10 px-4 py-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Report
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BugReportSection;
