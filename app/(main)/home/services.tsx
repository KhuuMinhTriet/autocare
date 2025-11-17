import { Card } from "@/components/ui/card";
import {
    Wrench,
    Droplets,
    Gauge,
    Battery,
    Wind,
    Shield,
    Disc3,
    CircleStop,
} from "lucide-react";

const services = [
    {
        icon: Wrench,
        title: "General Maintenance",
        description:
            "Oil changes, brake service, and routine maintenance to keep your vehicle in top condition.",
    },
    {
        icon: Droplets,
        title: "Premium Detailing",
        description:
            "Interior and exterior detailing services for a showroom-quality finish.",
    },
    {
        icon: Gauge,
        title: "Diagnostics",
        description:
            "Advanced computer diagnostics to identify and resolve any issues quickly.",
    },
    {
        icon: Battery,
        title: "Battery Service",
        description:
            "Battery testing, replacement, and electrical system checks.",
    },
    {
        icon: Wind,
        title: "AC Service",
        description:
            "Air conditioning maintenance and repair for optimal comfort.",
    },
    {
        icon: Shield,
        title: "Paint Protection",
        description:
            "Ceramic coating and paint protection to preserve your car's finish.",
    },
    {
        icon: Disc3,
        title: "Tire Service",
        description:
            "Tire rotation, balancing, alignment, and replacement for optimal performance and safety.",
    },
    {
        icon: CircleStop,
        title: "Brake Service",
        description:
            "Inspection and maintenance of a vehicle's braking system",
    },
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600">
                        Comprehensive auto care solutions tailored to your
                        vehicle's needs
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Card
                                key={index}
                                className="p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}