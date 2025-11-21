'use client';

import React from 'react'
import { Comparison, ComparisonHandle, ComparisonItem } from '@/components/ui/shadcn-io/comparison';
import Image from 'next/image';


const AboutPage = () => {

    const galleryImages = [
        {
            url: "https://images.unsplash.com/photo-1651275666236-8ecf57b4c66e?w=800",
            alt: "Auto repair shop interior",
        },
        {
            url: "https://images.unsplash.com/photo-1594849981292-89dbaf5aee53?w=800",
            alt: "Car detailing workspace",
        },
        {
            url: "https://images.unsplash.com/photo-1697036451092-cd59c2d2a59d?w=800",
            alt: "Professional team at work",
        },
        {
            url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800",
            alt: "Luxury car detailing",
        },
        {
            url: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800",
            alt: "Paint correction process",
        },
        {
            url: "https://images.unsplash.com/photo-1632823469770-8c35cf16e60c?w=800",
            alt: "Interior detailing",
        },
    ];

    const beforeAfterSlides = [
        {
            before:
                "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800",
            after:
                "https://images.unsplash.com/photo-1583267746897-f5fc1cf3a6c3?w=800",
        },
        {
            before:
                "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800",
            after:
                "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800",
        },
        {
            before:
                "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800",
            after:
                "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
        },
    ];

    return (
        <div className='min-h-screen flex flex-col bg-gray-50'>
            <main className="grow">
                {/* Hero Section */}
                <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="mb-4">About AutoCare Pro</h1>
                        <p className="text-xl opacity-90 max-w-3xl">
                            Your trusted partner in professional automotive
                            care since 2010
                        </p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="mb-6">Our Story</h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        Founded in 2010, AutoCare Pro began with a
                                        simple mission: to provide the highest
                                        quality automotive detailing and care
                                        services while delivering exceptional
                                        customer experiences. What started as a
                                        small garage with two passionate detailers
                                        has grown into a premier automotive care
                                        center serving hundreds of satisfied
                                        customers.
                                    </p>
                                    <p>
                                        Over the years, we've invested in
                                        state-of-the-art equipment, ongoing
                                        training, and the latest techniques in
                                        automotive care. Our team of certified
                                        professionals brings decades of combined
                                        experience, ensuring your vehicle receives
                                        the meticulous attention it deserves.
                                    </p>
                                    <p>
                                        Today, AutoCare Pro stands as a trusted name
                                        in the community, known for our attention to
                                        detail, commitment to quality, and passion
                                        for making every vehicle shine like new.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1651275666236-8ecf57b4c66e?w=800"
                                    alt="Our professional facility"
                                    className="rounded-lg shadow-xl w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="mb-12 text-center">
                            Our Core Values
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-3">Quality Excellence</h3>
                                <p className="text-gray-600">
                                    We never compromise on quality. Every service
                                    is performed with precision and care using
                                    premium products.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-3">Customer First</h3>
                                <p className="text-gray-600">
                                    Your satisfaction is our priority. We listen,
                                    understand, and deliver services that exceed
                                    expectations.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-3">Innovation</h3>
                                <p className="text-gray-600">
                                    We stay ahead with the latest techniques,
                                    products, and equipment in automotive care
                                    technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Before & After Portfolio */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="mb-4 text-center">Our Work</h2>
                        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                            See the transformation. Drag the slider to compare
                            before and after results of our detailing
                            services.
                        </p>
                        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
                            {beforeAfterSlides.map((slide, index) => (
                                <Comparison key={index} className="w-5xl h-[700px]">
                                    <ComparisonItem className="" position="left">
                                        <Image
                                            alt="Placeholder 1"
                                            className="object-fill w-full h-full"
                                            src={slide.before}
                                            unoptimized
                                            width={896}
                                            height={500}
                                        />
                                    </ComparisonItem>
                                    <ComparisonItem className="" position="right">
                                        <Image
                                            alt="Placeholder 2"
                                            className="object-fill w-full h-full"
                                            src={slide.after}
                                            unoptimized
                                            width={896} // Đảm bảo width/height khớp với container
                                            height={500}
                                        />
                                    </ComparisonItem>
                                    <ComparisonHandle />
                                </Comparison>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="mb-4 text-center">
                            Our Facility & Team
                        </h2>
                        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                            Take a look at our state-of-the-art facility and
                            our team in action
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {galleryImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                                >
                                    <img
                                        src={image.url}
                                        alt={image.alt}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-linear-to-r from-blue-700 to-blue-300 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="mb-2">15+</div>
                                <p className="opacity-90">Years in Business</p>
                            </div>
                            <div>
                                <div className="mb-2">10,000+</div>
                                <p className="opacity-90">Vehicles Serviced</p>
                            </div>
                            <div>
                                <div className="mb-2">5</div>
                                <p className="opacity-90">Expert Technicians</p>
                            </div>
                            <div>
                                <div className="mb-2">98%</div>
                                <p className="opacity-90">
                                    Customer Satisfaction
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="mb-6">
                            Experience the AutoCare Pro Difference
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Join thousands of satisfied customers who trust us
                            with their vehicles
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <a
                                href="/services"
                                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                View Our Services
                            </a>
                            <a
                                href="/booking"
                                className="inline-block bg-gray-100 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AboutPage