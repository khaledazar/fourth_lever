const links = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "mailto:hello@fourthlever.com" },
];

export default function Footer() {
  return (
    <footer>
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center mb-4">
              <span className="font-heading font-bold text-xl text-white tracking-[-0.5px]">
                Fourth
              </span>
              <span className="font-heading font-bold text-xl text-emerald-400 tracking-[-0.5px]">
                Lever
              </span>
            </div>
            <p className="font-body text-sm text-body leading-relaxed">
              AI infrastructure for businesses that build real things.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-[13px] text-muted uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-body hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-[13px] text-muted uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@fourthlever.com"
                  className="font-body text-sm text-body hover:text-white transition-colors"
                >
                  hello@fourthlever.com
                </a>
              </li>
              <li className="font-body text-sm text-muted">San Diego, CA</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <p className="font-body text-xs text-muted text-center">
          &copy; {new Date().getFullYear()} Fourth Lever. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
