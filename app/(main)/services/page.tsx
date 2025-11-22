
import {
    Wrench,
    Droplets,
    Gauge,
    Battery,
    Wind,
    Shield,
    Clock,
    ArrowRight,
    Disc3,
    CircleStop,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { getServices } from '../../../lib/service';
import { getPackages } from '../../../lib/package'
import Link from "next/link";

const iconMap = {
    wrench: Wrench,
    droplets: Droplets,
    gauge: Gauge,
    battery: Battery,
    wind: Wind,
    shield: Shield,
    disc3: Disc3,
    circleStop: CircleStop,
};

const ServicesPage = async () => {

    const services = await getServices();
    const packages = await getPackages();

    const truncateString = (text: string, limit: number): string => {
        if (!text) return "";

        const words = text.split(' ');
        if (words.length <= limit) {
            return text;
        }

        const truncated = words.slice(0, limit).join(' ');
        return truncated + '...';
    };

    const categories = [
        "All",
        "Maintenance",
        "Detailing",
        "Diagnostics",
        "Electrical",
        "Climate Control",
        "Protection",
    ];

    return (
        <div className="min-h-screen pt-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-5xl mb-4">Our Services</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Professional auto care services tailored to your
                        vehicle's needs
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={
                                category === "All" ? "default" : "outline"
                            }
                            className={
                                category === "All"
                                    ? "bg-blue-600 hover:bg-blue-700"
                                    : ""
                            }
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services?.map((service) => {
                        const Icon =
                            iconMap[service.icon as keyof typeof iconMap];

                        const relevantPackages = packages?.filter((pkg) => pkg.serviceID === service.id) || [];
                        const servicePackagesCount = relevantPackages.length;

                        const startingPrice = servicePackagesCount > 0 ? Math.min(...relevantPackages.map((pkg) => pkg.price)) + '$' : 0;

                        return (
                            <Link key={service.id} href={`/services/${service.id}`}><Card
                                className="overflow-hidden hover:shadow-lg hover:shadow-blue-500 transition-shadow cursor-pointer group"
                            >
                                <div className="aspect-video relative bg-gray-100 overflow-hidden">
                                    <img
                                        src={service.imageURL}
                                        alt={service.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {service.popular && (
                                        <Badge className="absolute top-3 right-3 bg-blue-600">
                                            Popular
                                        </Badge>
                                    )}
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl">
                                                {service.name}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-4">
                                        {truncateString(service.description, 20)}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-sm text-gray-500">
                                                {servicePackagesCount > 0 ? (<p>Starting at <span className="text-2xl font-bold">{startingPrice}</span></p>) : (<p className="text-2xl font-bold">Unavailable</p>)}
                                            </div>
                                            <div className="text-2xl text-blue-600">

                                            </div>
                                        </div>
                                        <Button
                                            size="sm"
                                            className="bg-blue-600 hover:bg-blue-700"
                                        >
                                            View Details
                                            <ArrowRight className="w-4 h-4 ml-1" />
                                        </Button>
                                    </div>

                                    <div className="mt-4 pt-4 border-t flex items-center gap-2 text-sm text-gray-500">
                                        <Clock className="w-4 h-4" />
                                        <span>
                                            {servicePackagesCount} packages
                                            available
                                        </span>
                                    </div>
                                </div>
                            </Card></Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ServicesPage;