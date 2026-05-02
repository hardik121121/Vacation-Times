import PageHero from '../components/shared/PageHero'

const sections = [
  {
    title: 'Information We Collect',
    content: `We collect information you provide directly to us when you make a booking, fill out a contact form, or subscribe to our newsletter. This includes your name, email address, phone number, travel preferences, and payment details. We may also collect non-personal data such as browser type, pages visited, and device information through cookies and analytics tools.`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the information we collect to process bookings and payments, send booking confirmations and travel updates, respond to your enquiries, personalise your travel recommendations, send promotional emails (only if you have opted in), and improve our website and services. We do not sell, trade, or rent your personal information to third parties.`,
  },
  {
    title: 'Sharing of Information',
    content: `We may share your information with trusted third-party service providers such as airlines, hotels, and tour operators strictly to fulfil your booking. All partners are contractually required to keep your data confidential and use it only for the purpose of delivering your travel services. We may also disclose information when required by law or to protect our legal rights.`,
  },
  {
    title: 'Cookies',
    content: `Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us remember your preferences and understand how you use our site. You can disable cookies through your browser settings; however, some features of our website may not function properly without them.`,
  },
  {
    title: 'Data Security',
    content: `We implement industry-standard security measures including SSL encryption and secure servers to protect your personal data from unauthorised access, alteration, disclosure, or destruction. While we strive to protect your information, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: 'Data Retention',
    content: `We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, including legal, accounting, or reporting requirements. If you wish to request deletion of your data, please contact us at vivek@vacationtimes.co.in.`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to access, correct, or delete your personal information held by us. You may also withdraw consent for marketing communications at any time by clicking "unsubscribe" in any email or by contacting us directly. To exercise any of these rights, please reach out to us at vivek@vacationtimes.co.in.`,
  },
  {
    title: 'Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website with a revised date. We encourage you to review this page periodically.`,
  },
  {
    title: 'Contact Us',
    content: `If you have any questions or concerns about this Privacy Policy, please contact us at:\n\nVacation Times\n95, Gwalior Road, Naulakha, Agra, UP - 282001\nEmail: vivek@vacationtimes.co.in\nPhone: +91 98370 89181`,
  },
]

export default function Privacy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        breadcrumbs={['Privacy Policy']}
        backgroundImage="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-cream py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-12">
            <p className="text-brown-medium text-sm sm:text-base mb-8 pb-6 border-b border-cream-dark">
              Last updated: <span className="font-semibold text-brown">April 2026</span>
            </p>
            <p className="text-brown-medium text-sm sm:text-base leading-relaxed mb-10">
              At Vacation Times, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a booking with us. Please read this policy carefully.
            </p>

            <div className="space-y-8">
              {sections.map((s, i) => (
                <div key={s.title}>
                  <h2 className="font-heading text-lg sm:text-xl font-bold text-brown mb-3 flex items-start gap-2">
                    <span className="text-teal font-heading">{i + 1}.</span> {s.title}
                  </h2>
                  <p className="text-brown-medium text-sm sm:text-base leading-relaxed whitespace-pre-line">{s.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
