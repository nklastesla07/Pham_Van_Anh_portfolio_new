import { Phone, Mail, Share2, Radio } from "lucide-react"

const CHANNELS = [
  { icon: Phone, label: "Voice Channel", value: "0815511058", href: "tel:0815511058" },
  { icon: Mail, label: "Data Uplink", value: "vanhpham8117@gmail.com", href: "mailto:vanhpham8117@gmail.com" },
  {
    icon: Share2,
    label: "Social Relay",
    value: "facebook.com/pham.van.ank.2024",
    href: "https://www.facebook.com/pham.van.ank.2024/",
  },
]

export function ContactSection() {
  return (
    <footer id="contact" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
      <div className="rounded-2xl border border-primary/30 glass p-8 box-glow-strong sm:p-12">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary text-glow-soft">
            <Radio className="h-4 w-4 animate-flicker" />
            Transmission Beacon
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-glow sm:text-4xl">
            Open a Channel
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
            I’m open to conversations about internships, tutoring collaborations, data projects, and opportunities where strong communication and analytical thinking can make an impact.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {CHANNELS.map((channel) => {
            const Icon = channel.icon
            const external = channel.href.startsWith("http")
            return (
              <a
                key={channel.label}
                href={channel.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-2 rounded-xl border border-primary/25 bg-background/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:box-glow-strong"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-primary/40 bg-primary/10 text-primary transition-shadow group-hover:shadow-[0_0_18px_var(--amber-glow)]">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-primary/80">{channel.label}</span>
                <span className="break-all text-sm text-foreground glow-interactive">{channel.value}</span>
              </a>
            )
          })}
        </div>

        <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          End of Flight Log // Van Anh Pham
        </p>
      </div>
    </footer>
  )
}
