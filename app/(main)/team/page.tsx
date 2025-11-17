import React from 'react'
import { getTeamLeaders } from '../../../lib/team-leaders'
import { getMechanics } from '../../../lib/mechanic'

const TeamPage = async () => {

    const leaders = await getTeamLeaders();
    const mechanics = await getMechanics();

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 mt-20">
            <main className="grow">
                {/* Hero Section */}
                <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="mb-4">Meet Our Team</h1>
                        <p className="text-xl opacity-90 max-w-3xl">
                            Experienced professionals dedicated to making your
                            vehicle look its best
                        </p>
                    </div>
                </section>

                {/* Leadership Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="mb-4">Our Leadership Team</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Meet the experienced leaders driving our vision and commitment to excellence
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {leaders?.map((leader) => (
                                <div
                                    key={leader.id}
                                    className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                                >
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={leader.imageURL}
                                            alt={leader.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="mb-1">{leader.name}</h3>
                                        <p className="text-blue-600 mb-3">
                                            {leader.role}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            {leader.bio}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Staff Grid */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {mechanics?.map((member) => (
                                <a
                                    key={member.id}
                                    href={`/staff/${member.id}`}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
                                >
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={member.imageURL}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="mb-1">{member.name}</h3>
                                        <p className="text-blue-600 mb-3">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                            {member.bio}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {member.specialties
                                                .slice(0, 3)
                                                .map((specialty: any, index: any) => (
                                                    <span
                                                        key={index}
                                                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                                                    >
                                                        {specialty}
                                                    </span>
                                                ))}
                                            {member.specialties.length > 3 && (
                                                <span className="text-xs text-gray-500 px-2 py-1">
                                                    +{member.specialties.length - 3}{" "}
                                                    more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Our Team Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="mb-12 text-center">
                            Why Our Team Stands Out
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
                                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-3">
                                    Certified Professionals
                                </h3>
                                <p className="text-gray-600">
                                    All our team members hold industry
                                    certifications and receive ongoing training.
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
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-3">Years of Experience</h3>
                                <p className="text-gray-600">
                                    Our team brings decades of combined experience
                                    in automotive care and detailing.
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
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-3">Passion for Perfection</h3>
                                <p className="text-gray-600">
                                    We're not just technicians—we're automotive
                                    enthusiasts who love what we do.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gray-700 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="mb-6">
                            Ready to Experience Professional Care?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Book a service with our expert team today
                        </p>
                        <a
                            href="/booking"
                            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Book Now
                        </a>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default TeamPage