import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const EMAIL = "talhasajjad148@gmail.com";

const EMAIL_SUBJECT = "Job Opportunity - [Your Company]";
const EMAIL_BODY =
  "Hi Talha, I came across your portfolio and would like to discuss...";

/** Opens in the browser (works without a desktop mail client). */
const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  EMAIL
)}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

/** Fallback when a system mail app is configured (often no-op on Linux / in-app browsers). */
const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
  EMAIL_SUBJECT
)}&body=${encodeURIComponent(EMAIL_BODY)}`;

const whatsappCtaHref = `https://wa.me/923089375935?text=${encodeURIComponent(
  "Hi Talha, I saw your portfolio and would like to discuss a job opportunity."
)}`;

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="mx-auto mb-10 max-w-md text-text-muted">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            build something amazing together.
          </p>

          <div className="mx-auto mb-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${EMAIL}`}
              className="glass-card cursor-pointer p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-violet-500/40"
            >
              <HiMail className="mx-auto mb-2 text-violet-400" size={24} />
              <p className="text-xs text-white/50">Email</p>
              <p className="text-sm font-medium text-white break-all">{EMAIL}</p>
            </a>
            <a
              href="https://wa.me/923089375935"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card cursor-pointer p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-green-500/40"
            >
              <FaWhatsapp className="mx-auto mb-2 text-green-400" size={24} />
              <p className="text-xs text-white/50">WhatsApp</p>
              <p className="text-sm font-medium text-white">+92 308 9375935</p>
            </a>
            <a
              href="https://linkedin.com/in/talha-sajjad-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card cursor-pointer p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/40"
            >
              <FaLinkedin className="mx-auto mb-2 text-blue-400" size={24} />
              <p className="text-xs text-white/50">LinkedIn</p>
              <p className="text-sm font-medium text-white">talha-sajjad-dev</p>
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={gmailComposeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30"
            >
              <HiMail size={20} />
              Send Me an Email
            </a>
            <a
              href={whatsappCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#25D366]/40 px-8 py-4 text-[#25D366] transition hover:bg-[#25D366]/10"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-text-muted">
            <a href={mailtoHref} className="underline decoration-white/20 underline-offset-2 hover:text-foreground">
              Open in your mail app instead
            </a>{" "}
            (requires a desktop email client)
          </p>
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Talha Sajjad. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[
              {
                icon: <FaGithub size={18} />,
                href: "https://github.com/talha-sajjad-dev",
                label: "GitHub",
              },
              {
                icon: <FaLinkedin size={18} />,
                href: "https://linkedin.com/in/talha-sajjad-dev",
                label: "LinkedIn",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-all duration-200 hover:border-accent hover:text-accent"
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
