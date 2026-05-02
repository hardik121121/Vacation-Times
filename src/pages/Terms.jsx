import PageHero from '../components/shared/PageHero'

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing or using the Vacation Times website and services, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and customers of Vacation Times.`,
  },
  {
    title: 'Booking & Reservations',
    content: `All bookings made through Vacation Times are subject to availability and confirmation. A booking is confirmed only upon receipt of a written confirmation from us and full or partial payment as specified. Prices quoted are per person unless stated otherwise and are subject to change until a booking is confirmed in writing.`,
  },
  {
    title: 'Payment Terms',
    content: `A non-refundable deposit (as specified per package) is required at the time of booking. The remaining balance must be paid no later than 30 days before the travel departure date. For bookings made within 30 days of departure, full payment is required at the time of booking. We accept payments via bank transfer, UPI, and major credit/debit cards.`,
  },
  {
    title: 'Cancellation & Refund Policy',
    content: `Cancellations must be notified to us in writing. The following charges apply based on the notice period before departure:\n\n• 60+ days: Full refund minus processing fee\n• 30–59 days: 50% refund of the total package cost\n• 15–29 days: 25% refund of the total package cost\n• Less than 15 days: No refund\n\nRefunds (where applicable) will be processed within 10–15 working days. Vacation Times reserves the right to cancel any trip due to insufficient bookings or unforeseen circumstances, in which case a full refund will be provided.`,
  },
  {
    title: 'Travel Documents & Visas',
    content: `It is the sole responsibility of the traveller to obtain all required travel documents including passports, visas, health certificates, and travel insurance. Vacation Times may assist with visa guidance but is not responsible for visa rejections or delays. We strongly recommend purchasing comprehensive travel insurance before departure.`,
  },
  {
    title: 'Traveller Responsibilities',
    content: `Travellers are expected to behave respectfully towards fellow travellers, guides, and local communities. Vacation Times reserves the right to remove any traveller from a trip without refund if their behaviour is deemed disruptive, offensive, or unsafe. Travellers must inform us of any medical conditions, dietary requirements, or special needs at the time of booking.`,
  },
  {
    title: 'Liability & Limitations',
    content: `Vacation Times acts as an agent for airlines, hotels, transport providers, and tour operators. We are not liable for any injury, loss, delay, damage, or expense arising from acts of these third-party suppliers. Our liability, where applicable, is limited to the total cost of the package booked. We strongly advise all travellers to carry adequate travel insurance.`,
  },
  {
    title: 'Force Majeure',
    content: `Vacation Times shall not be liable for failure to perform obligations where such failure is due to circumstances beyond our reasonable control including natural disasters, war, civil unrest, pandemics, government actions, or any other force majeure event. In such cases, we will endeavour to provide alternative arrangements or, where not possible, a credit for future travel.`,
  },
  {
    title: 'Intellectual Property',
    content: `All content on the Vacation Times website including text, images, graphics, logos, and design elements is the property of Vacation Times and is protected by applicable copyright and intellectual property laws. No content may be reproduced, distributed, or used without our prior written consent.`,
  },
  {
    title: 'Governing Law',
    content: `These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Agra, Uttar Pradesh, India.`,
  },
  {
    title: 'Changes to Terms',
    content: `Vacation Times reserves the right to amend these Terms & Conditions at any time. Updated terms will be posted on our website with a revised date. Continued use of our services after any changes constitutes your acceptance of the new terms.`,
  },
  {
    title: 'Contact Us',
    content: `For any questions about these Terms & Conditions, please contact:\n\nVacation Times\n95, Gwalior Road, Naulakha, Agra, UP - 282001\nEmail: vivek@vacationtimes.co.in\nPhone: +91 98370 89181`,
  },
]

export default function Terms() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services"
        breadcrumbs={['Terms & Conditions']}
        backgroundImage="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-cream py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-12">
            <p className="text-brown-medium text-sm sm:text-base mb-8 pb-6 border-b border-cream-dark">
              Last updated: <span className="font-semibold text-brown">April 2026</span>
            </p>
            <p className="text-brown-medium text-sm sm:text-base leading-relaxed mb-10">
              Welcome to Vacation Times. These Terms & Conditions govern your use of our website and the purchase of travel services offered by us. By booking with us, you acknowledge that you have read, understood, and agreed to these terms.
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
