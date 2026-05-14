export default function Home() {
  const faqs = [
    {
      q: "Which browsers are supported?",
      a: "TabMemory works with Chrome, Edge, and any Chromium-based browser that supports the chrome.processes API."
    },
    {
      q: "How does the memory alert threshold work?",
      a: "You set a per-tab RAM limit (default 500 MB). When any tab exceeds it, you get an instant popup notification so you can close or reload the offender."
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes. Cancel from your billing portal at any time — no questions asked, no lock-in."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Browser Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find memory-hogging{" "}
          <span className="text-[#58a6ff]">browser tabs</span>{" "}
          automatically
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          TabMemory monitors every open tab in real time and fires an alert the moment one starts eating your RAM — before your machine slows to a crawl.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get TabMemory — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime &middot; Instant access after payment</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📊", title: "Live RAM tracking", desc: "Per-tab memory usage updated every 5 seconds." },
            { icon: "🔔", title: "Instant alerts", desc: "Popup notification when a tab crosses your threshold." },
            { icon: "📈", title: "Usage analytics", desc: "Web dashboard with historical memory trends across devices." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Chrome & Edge extension",
              "Real-time per-tab RAM monitor",
              "Custom alert thresholds",
              "Web dashboard + analytics",
              "Multi-device sync",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start for $9/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-10">
        &copy; {new Date().getFullYear()} TabMemory. All rights reserved.
      </footer>
    </main>
  );
}
