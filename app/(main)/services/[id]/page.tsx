"use client";

import { useEffect, useState } from 'react';
import { getServiceById } from '@/lib/service';
import { getRelatedPackages } from '@/lib/package'
import { useParams, notFound } from 'next/navigation';
import {
    Wrench,
    Droplets,
    Gauge,
    Battery,
    Wind,
    Shield,
    ArrowLeft,
    Check,
    Clock,
    Disc3,
    CircleStop,
} from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

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

export default function ServiceDetailsPage() {
    const params = useParams();
    const id = params.id as string;

    const [service, setService] = useState<any>(null);
    const [packages, setPackages] = useState<any>([]);
    const [shouldNotFound, setShouldNotFound] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const serviceId = Number(id);

            if (isNaN(serviceId) || serviceId <= 0) {
                setShouldNotFound(true);
                return;
            }

            const serviceData = await getServiceById(serviceId);

            if (!serviceData || serviceData.length === 0) {
                setShouldNotFound(true);
                return;
            }
            setService(serviceData[0]);

            const packagesData = await getRelatedPackages(serviceId);
            setPackages(packagesData || [])
        }

        if (id) {
            fetchData();
        }
    }, [id]);

    if (shouldNotFound) {
        notFound();
    }

    if (!service) {
        return (
            <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    const Icon = iconMap[service.icon as keyof typeof iconMap];

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                <Button
                    variant="ghost"
                    className="mb-8"
                >
                    <Link href='/services' className='flex justify-center items-center'><ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Services</Link>
                </Button>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-lg mb-6">
                            <img
                                src={service.imageURL}
                                alt={service.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl mb-4">
                                    Why Choose This Service?
                                </h3>
                                <div className="space-y-3">
                                    {service.benefits?.map((benefit: string, index: any) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3"
                                        >
                                            <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                            <span className="text-gray-700">
                                                {benefit}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl mb-4">Our Process</h3>
                                <div className="space-y-3">
                                    {service.process?.map((step: string, index: any) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-sm text-blue-600">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <span className="text-gray-700">
                                                {step}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            {Icon && (
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-blue-600" />
                                </div>
                            )}
                            <div>
                                <Badge className="mb-2 bg-blue-100 text-blue-700">
                                    {service.category}
                                </Badge>
                                <h1 className="text-4xl">{service.name}</h1>
                            </div>
                        </div>

                        <p className="text-lg text-gray-700 mb-8">
                            {service.longDescription}
                        </p>

                        <h2 className="text-2xl mb-6">Service Packages</h2>
                        <div className="space-y-4">
                            {packages.length > 0 ? (
                                packages.map((pkg: any, index: any) => (
                                    <Card
                                        key={index}
                                        className="p-6 hover:shadow-lg transition-shadow"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl mb-1">
                                                    {pkg.name}
                                                </h3>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{pkg.duration} minutes</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-3xl text-blue-600">
                                                    ${pkg.price}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2 mb-6">
                                            {pkg.includes.map((item: any, itemIndex: any) => (
                                                <div
                                                    key={itemIndex}
                                                    className="flex items-start gap-2"
                                                >
                                                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                    <span className="text-sm text-gray-700">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <Button
                                            className="w-full bg-blue-600 hover:bg-blue-700"
                                        >
                                            Book {pkg.name}
                                        </Button>
                                    </Card>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center py-8">
                                    No packages available for this service.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}