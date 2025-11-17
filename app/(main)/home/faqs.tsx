import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How often should I get my oil changed?",
        answer: "We recommend oil changes every 3,000-5,000 miles for conventional oil, or 7,500-10,000 miles for synthetic oil. However, this can vary based on your vehicle's make, model, and driving conditions. Check your owner's manual for manufacturer recommendations."
    },
    {
        question: "Do you offer same-day service?",
        answer: "Yes! Most of our services can be completed the same day. We recommend calling ahead or booking online to ensure availability. For more extensive services like complete detailing or major repairs, we may need to schedule for the next day."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, cash, and mobile payments (Apple Pay, Google Pay). We also offer financing options for larger services."
    },
    {
        question: "Do you provide warranties on your services?",
        answer: "Absolutely! All our services come with a satisfaction guarantee. Parts and labor warranties vary by service - typically 90 days to 3 years depending on the work performed. Our premium ceramic coating comes with a 5-year warranty."
    },
    {
        question: "Can I wait while my car is being serviced?",
        answer: "Yes, we have a comfortable waiting area with free Wi-Fi, coffee, and refreshments. For services that take longer than an hour, we also offer complimentary shuttle service within a 10-mile radius."
    },
    {
        question: "Do I need an appointment or can I walk in?",
        answer: "While we welcome walk-ins, we highly recommend booking an appointment to minimize wait times. You can easily schedule online through our website or call either of our branches. Appointments typically get priority service."
    },
    {
        question: "Are your technicians certified?",
        answer: "Yes! All our technicians are ASE (Automotive Service Excellence) certified and undergo continuous training to stay updated with the latest automotive technology and repair techniques."
    },
    {
        question: "What if I'm not satisfied with the service?",
        answer: "Customer satisfaction is our top priority. If you're not completely satisfied with any service, please let us know within 30 days and we'll make it right. This includes re-doing the service or providing a full refund."
    }
];

export function FAQs() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-4xl mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-600">
                        Got questions? We've got answers. Find the most common questions about our services below.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-white border rounded-lg px-6"
                            >
                                <AccordionTrigger className="text-left hover:no-underline py-4">
                                    <span className="text-lg">{faq.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-4">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
