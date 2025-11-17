import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Business Owner",
        content: "Outstanding service! They fixed my car quickly and the pricing was very fair. Highly recommend AutoCare Pro for anyone looking for reliable auto service.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Software Engineer",
        content: "I've been coming here for 3 years now. The team is professional, honest, and always does excellent work. My car runs better than ever.",
        rating: 5
    },
    {
        name: "Emily Rodriguez",
        role: "Teacher",
        content: "Best auto detailing I've ever had! My car looks brand new. The staff was friendly and the service was completed right on time.",
        rating: 5
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl mb-4">What Our Customers Say</h2>
                    <p className="text-xl text-gray-600">
                        Don't just take our word for it - hear from our satisfied customers
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                            <div>
                                <div className="text-gray-900">{testimonial.name}</div>
                                <div className="text-sm text-gray-500">{testimonial.role}</div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
