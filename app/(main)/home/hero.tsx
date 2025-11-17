import React from 'react'
import { Button } from '../../../components/ui/button'
import { ArrowRight } from 'lucide-react'


const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-5xl lg:text-6xl">
                            Premium Auto Care
                            <span className="block text-blue-600">For Your Vehicle</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-lg">
                            Expert maintenance and detailing services to keep your car running smoothly and looking pristine.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700"

                            >
                                Schedule Service
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"

                            >
                                View Services
                            </Button>
                        </div>
                        <div className="flex gap-8 pt-4">
                            <div>
                                <div className="text-3xl text-blue-600">5000+</div>
                                <div className="text-gray-600">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-3xl text-blue-600">15+</div>
                                <div className="text-gray-600">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl text-blue-600">4.9</div>
                                <div className="text-gray-600">Rating</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1760827797819-4361cd5cd353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTE1MTkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Professional car wash service"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden lg:block">
                            <div className="text-sm text-gray-600">Trusted by</div>
                            <div className="text-2xl">2000+ Clients</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero