import { CheckCircle, Clock, Award, Users } from "lucide-react";

const features = [
    {
        icon: CheckCircle,
        title: "Quality Guaranteed",
        description: "We stand behind our work with a satisfaction guarantee on all services."
    },
    {
        icon: Clock,
        title: "Fast Service",
        description: "Most services completed same-day with our efficient team."
    },
    {
        icon: Award,
        title: "Certified Technicians",
        description: "ASE certified mechanics with years of experience."
    },
    {
        icon: Users,
        title: "Customer First",
        description: "Transparent pricing and exceptional customer service."
    }
];

export function Features() {
    return (
        <section id="features" className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1730453075684-2ad6232ab451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMGNhciUyMHNlcnZpY2V8ZW58MXx8fHwxNzYxMjc1NDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Professional mechanic at work"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl mb-6">Why Choose AutoCare Pro?</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            We're committed to providing the best auto care experience with professionalism, expertise, and care.
                        </p>

                        <div className="space-y-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={index} className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                            <Icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl mb-1">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
