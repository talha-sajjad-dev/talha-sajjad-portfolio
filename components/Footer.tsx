import { FaGithub, FaLinkedinIn, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* CTA */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-text-muted max-w-md mx-auto mb-8">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s build something amazing together.
          </p>
          <a
            href="mailto:talhasajjad148@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
          >
            <FaEnvelope />
            Get In Touch
          </a>
        </div>

        <div className="section-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Talha Sajjad. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[
              { icon: <FaGithub size={18} />, href: "https://github.com/full-stack-website-developer", label: "GitHub" },
              { icon: <FaLinkedinIn size={18} />, href: "https://linkedin.com/in/talha-sajjad-dev", label: "LinkedIn" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
