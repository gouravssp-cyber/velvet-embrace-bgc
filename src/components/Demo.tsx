import * as Accordion from "@radix-ui/react-accordion";
import * as Tabs from "@radix-ui/react-tabs";
import * as Dialog from "@radix-ui/react-dialog";

export default function SpaLandingPage() {
  return (
    <div className="w-full bg-[#0B0F0E] text-white">
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Luxury spa"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Spa Service in Dehradun  
            <span className="block text-emerald-400 mt-2">
              A Perfect Blend of Relaxation & Wellness
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Reconnect with your body and mind through professional spa services in
            the peaceful surroundings of Dehradun.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#services"
              className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-xl font-semibold transition"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              Book Session
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1200"
          className="rounded-3xl object-cover w-full h-[380px]"
          alt="Spa interior"
        />
        <div>
          <h2 className="text-3xl font-bold text-emerald-400 mb-4">
            Himalayan Bliss Spa Dehradun
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Himalayan Bliss Spa Dehradun is a premium wellness destination
            offering professional spa services in a peaceful and hygienic
            environment. Every session is designed to restore calm, refresh your
            energy, and rebalance your mind and body.
          </p>
          <p className="mt-4 text-gray-300">
            With certified therapists, quality oils, and tranquil ambiance, each
            visit becomes a rejuvenating ritual.
          </p>
        </div>
      </section>

      {/* SERVICES TABS */}
      <section id="services" className="py-20 bg-[#0E1412] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Spa Services
          </h2>

          <Tabs.Root defaultValue="body" className="w-full">
            <Tabs.List className="flex flex-wrap justify-center gap-3 mb-10">
              {["body", "aroma", "ayurveda", "head"].map((v) => (
                <Tabs.Trigger
                  key={v}
                  value={v}
                  className="px-5 py-2 rounded-xl border border-white/10 data-[state=active]:bg-emerald-500 data-[state=active]:text-black transition"
                >
                  {v === "body" && "Full Body Therapy"}
                  {v === "aroma" && "Aromatherapy"}
                  {v === "ayurveda" && "Ayurvedic Spa"}
                  {v === "head" && "Head & Foot Relaxation"}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Tabs.Content value="body">
                <h3 className="text-2xl font-semibold mb-3">Full Body Relaxation Therapy</h3>
                <p className="text-gray-300">
                  Releases muscle tension, improves blood circulation, and
                  deeply relaxes the nervous system. Ideal for people with
                  stressful work routines.
                </p>
              </Tabs.Content>

              <Tabs.Content value="aroma">
                <h3 className="text-2xl font-semibold mb-3">Aromatherapy Spa Sessions</h3>
                <p className="text-gray-300">
                  Essential oils calm the mind, uplift your mood, and reduce
                  anxiety, creating emotional balance and peace.
                </p>
              </Tabs.Content>

              <Tabs.Content value="ayurveda">
                <h3 className="text-2xl font-semibold mb-3">Ayurvedic Spa Treatments</h3>
                <p className="text-gray-300">
                  Traditional herbal oils and therapies restore natural balance
                  and promote long-term wellness.
                </p>
              </Tabs.Content>

              <Tabs.Content value="head">
                <h3 className="text-2xl font-semibold mb-3">Head & Foot Relaxation Therapy</h3>
                <p className="text-gray-300">
                  Improves sleep quality, relieves mental fatigue, and enhances
                  clarity and focus.
                </p>
              </Tabs.Content>

              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1200"
                className="rounded-3xl w-full h-[320px] object-cover"
                alt="Massage therapy"
              />
            </div>
          </Tabs.Root>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200"
          className="rounded-3xl h-[350px] w-full object-cover"
          alt="Relaxation benefits"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-emerald-400">
            Benefits of Regular Spa Therapy
          </h2>
          <ul className="space-y-3 text-gray-300 list-disc pl-5">
            <li>Reduced stress and mental exhaustion</li>
            <li>Improved posture and flexibility</li>
            <li>Better sleep quality</li>
            <li>Increased energy levels</li>
            <li>Overall improved well-being</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0E1412] px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Spa Service in Dehradun?
          </h2>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {[
              {
                q: "Peaceful environment",
                a: "Dehradun offers a calm, low-noise environment ideal for deep relaxation.",
              },
              {
                q: "Professional therapists",
                a: "Certified therapists ensure safety, hygiene, and premium care.",
              },
              {
                q: "Affordable packages",
                a: "Flexible pricing options for both locals and visitors.",
              },
              {
                q: "Blend of modern & traditional",
                a: "Experience a fusion of Ayurvedic and contemporary wellness therapies.",
              },
            ].map((item, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="border border-white/10 rounded-xl overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-5 py-4 text-left hover:bg-white/5 transition">
                    {item.q}
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-5 pb-4 text-gray-300">
                  {item.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-24 px-6 text-center bg-gradient-to-br from-emerald-600 to-teal-600 text-black"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Relax & Rejuvenate?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Experience premium spa service in Dehradun and bring balance back into
          your life.
        </p>

        <Dialog.Root>
          <Dialog.Trigger className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition">
            Book Appointment
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60" />
            <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-[#0B0F0E] rounded-2xl p-6 border border-white/10">
              <Dialog.Title className="text-xl font-bold mb-3">
                Book Your Spa Session
              </Dialog.Title>
              <p className="text-gray-300 mb-5">
                Contact us to schedule your personalized wellness session.
              </p>
              <Dialog.Close className="mt-4 bg-emerald-500 text-black px-5 py-2 rounded-lg">
                Close
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </section>
    </div>
  );
}