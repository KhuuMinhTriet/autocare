'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, Check, Calendar, Clock, User, ShoppingBag } from 'lucide-react';
import { getServices } from '@/lib/service';
import { getRelatedPackages } from '@/lib/package';
import { getProducts } from '@/lib/product';
import { getMechanics } from '@/lib/mechanic';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface Service {
    id: number;
    name: string;
    icon?: string;
    description?: string;
    imageURL?: string;
    popular?: boolean;
    process?: string;
    benefits?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string | null;
}

interface Package {
    id: number;
    serviceID: number;
    name: string;
    price: number;
    duration: number;
    includes: string[];
    created_at?: string;
    updated_at?: string;
    deleted_at?: string | null;
}

interface Product {
    id: number;
    name: string;
    price: number;
    imageURL?: string;
    amount?: number;
    rating?: number;
    reviews?: number;
    features?: string;
    description?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string | null;
}

interface Mechanic {
    id: string;
    name: string;
    role: string;
    imageURL?: string;
    available: boolean;
    specialties?: string[];
    created_at?: string;
    updated_at?: string;
    deleted_at?: string | null;
}

const AutoCareBooking = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [services, setServices] = useState<Service[]>([]);
    const [packages, setPackages] = useState<Package[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [mechanics, setMechanics] = useState<Mechanic[]>([]);
    const [loading, setLoading] = useState(false);

    // Booking state
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedMechanic, setSelectedMechanic] = useState<Mechanic | null>(null);

    // Load services on mount
    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = async () => {
        setLoading(true);
        try {
            const data = await getServices();
            setServices(data);
        } catch (error) {
            console.error('Error loading services:', error);
        }
        setLoading(false);
    };

    const handleServiceSelect = async (service: Service) => {
        setSelectedService(service);
        setLoading(true);
        try {
            const pkgs = await getRelatedPackages(service.id);
            setPackages(pkgs);
        } catch (error) {
            console.error('Error loading packages:', error);
        }
        setLoading(false);
    };

    const handlePackageSelect = (pkg: Package) => {
        setSelectedPackage(pkg);
    };

    const handleProductToggle = (product: Product) => {
        setSelectedProducts(prev => {
            const exists = prev.find(p => p.id === product.id);
            if (exists) {
                return prev.filter(p => p.id !== product.id);
            }
            return [...prev, product];
        });
    };

    const loadProductsForStep2 = async () => {
        setLoading(true);
        try {
            const data: Product[] = await getProducts();
            setProducts(data);
        } catch (error) {
            console.error('Error loading products:', error);
        }
        setLoading(false);
    };

    const loadMechanicsForStep4 = async () => {
        setLoading(true);
        try {
            const data = await getMechanics();
            setMechanics(data);
        } catch (error) {
            console.error('Error loading mechanics:', error);
        }
        setLoading(false);
    };

    const getTotalPrice = () => {
        const packagePrice = selectedPackage?.price || 0;
        const productsPrice = selectedProducts.reduce((sum, p) => sum + p.price, 0);
        return packagePrice + productsPrice;
    };

    const handleContinue = async () => {
        if (currentStep === 1 && selectedPackage) {
            await loadProductsForStep2();
            setCurrentStep(2);
        } else if (currentStep === 2) {
            setCurrentStep(3);
        } else if (currentStep === 3 && selectedDate && selectedTime) {
            await loadMechanicsForStep4();
            setCurrentStep(4);
        } else if (currentStep === 4 && selectedMechanic) {
            setCurrentStep(5);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const canContinue = () => {
        switch (currentStep) {
            case 1: return selectedPackage !== null;
            case 2: return true; // Add-ons are optional
            case 3: return selectedDate && selectedTime;
            case 4: return selectedMechanic !== null;
            default: return false;
        }
    };

    const steps = [
        { number: 1, label: 'Service', icon: ShoppingBag },
        { number: 2, label: 'Add-ons', icon: ShoppingBag },
        { number: 3, label: 'Date & Time', icon: Calendar },
        { number: 4, label: 'Mechanic', icon: User },
        { number: 5, label: 'Details', icon: Check }
    ];

    const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 mt-20">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Book a Service</h1>
                    <p className="text-gray-600">Select a service, add optional products, choose your mechanic, and pick your preferred time</p>
                </div>

                {/* Steps Progress */}
                <div className="flex items-center justify-center mb-12">
                    {steps.map((step, idx) => (
                        <React.Fragment key={step.number}>
                            <div className="flex flex-col items-center">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold ${currentStep > step.number ? 'bg-green-500 text-white' :
                                    currentStep === step.number ? 'bg-blue-600 text-white' :
                                        'bg-gray-200 text-gray-500'
                                    }`}>
                                    {currentStep > step.number ? <Check size={20} /> : step.number}
                                </div>
                                <span className={`mt-2 text-sm font-medium ${currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                                    }`}>{step.label}</span>
                            </div>
                            {idx < steps.length - 1 && (
                                <div className={`w-16 h-1 mx-2 ${currentStep > step.number ? 'bg-green-500' : 'bg-gray-200'
                                    }`} />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-lg shadow-lg p-8 min-h-96">
                    {loading ? (
                        <div className="flex items-center justify-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
                        </div>
                    ) : (
                        <>
                            {/* Step 1: Service & Package Selection */}
                            {currentStep === 1 && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-6">Choose a Service & Package</h2>

                                    {!selectedService ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {services.map(service => (
                                                <button
                                                    key={service.id}
                                                    onClick={() => handleServiceSelect(service)}
                                                    className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-md transition text-left"
                                                >
                                                    <img src={service.imageURL} alt={service.name} className='max-h-56 w-full' />
                                                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                                                    <p className="text-gray-600">{service.description}</p>
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <div>
                                            <button
                                                onClick={() => { setSelectedService(null); setSelectedPackage(null); }}
                                                className="text-blue-600 hover:underline mb-4"
                                            >
                                                ← Change Service
                                            </button>
                                            <h3 className="text-xl font-semibold mb-4">{selectedService.name} Packages</h3>
                                            <div className={packages.length > 0 ? 'grid grid-cols-1 md:grid-cols-3 gap-6' : 'w-full'}>
                                                {packages.length > 0 ? (packages.map(pkg => (
                                                    <div
                                                        key={pkg.id}
                                                        onClick={() => handlePackageSelect(pkg)}
                                                        className={`border-2 rounded-lg p-6 cursor-pointer transition ${selectedPackage?.id === pkg.id
                                                            ? 'border-blue-600 bg-blue-50 shadow-md'
                                                            : 'border-gray-200 hover:border-blue-400'
                                                            }`}
                                                    >
                                                        <div className="flex items-center justify-between mb-3">
                                                            <h4 className="text-lg font-bold">{pkg.name}</h4>
                                                            {selectedPackage?.id === pkg.id && (
                                                                <Check className="text-blue-600" size={24} />
                                                            )}
                                                        </div>
                                                        <div className="text-2xl font-bold text-blue-600 mb-2">${pkg.price}</div>
                                                        <div className="text-sm text-gray-600 mb-4">{pkg.duration} minutes</div>
                                                        <ul className="space-y-2">
                                                            {pkg.includes.map((item: any, idx: any) => (
                                                                <li key={idx} className="flex items-start text-sm">
                                                                    <Check size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))) : (
                                                    <h1 className='text-gray-500 font-semibold text-3xl text-center'>No packages available for this service right now. Come back later</h1>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Step 2: Add-ons (Products) */}
                            {currentStep === 2 && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">Enhance Your Service</h2>
                                    <p className="text-gray-600 mb-6">Add premium products to your {selectedPackage?.name}</p>

                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-semibold">{selectedPackage?.name}</div>
                                                <div className="text-sm text-gray-600">{selectedPackage?.duration} minutes</div>
                                            </div>
                                            <div className="text-xl font-bold text-blue-600">${selectedPackage?.price}</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {products.map(product => {
                                            const isSelected = selectedProducts.find(p => p.id === product.id);
                                            return (
                                                <div
                                                    key={product.id}
                                                    onClick={() => handleProductToggle(product)}
                                                    className={`border-2 rounded-lg p-6 cursor-pointer transition ${isSelected
                                                        ? 'border-blue-600 bg-blue-50 shadow-md'
                                                        : 'border-gray-200 hover:border-blue-400'
                                                        }`}
                                                >
                                                    <div className="flex items-start justify-between mb-3">
                                                        <img src={product.imageURL} alt={product.name} className='max-h-80 w-full' />
                                                        {isSelected && (
                                                            <Check className="text-blue-600" size={24} />
                                                        )}
                                                    </div>
                                                    <h4 className="font-bold mb-2">{product.name}</h4>
                                                    <div className="text-lg font-bold text-blue-600">${product.price}</div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {selectedProducts.length > 0 && (
                                        <div className="mt-6 border-t pt-4">
                                            <h4 className="font-semibold mb-2">Selected Add-ons ({selectedProducts.length})</h4>
                                            <div className="space-y-2">
                                                {selectedProducts.map(p => (
                                                    <div key={p.id} className="flex justify-between text-sm">
                                                        <span>{p.name}</span>
                                                        <span className="font-semibold">${p.price}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Step 3: Date & Time Selection */}
                            {currentStep === 3 && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-6">Select Date & Time</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block font-semibold mb-3">Select Date</label>
                                            <input
                                                type="date"
                                                value={selectedDate}
                                                onChange={(e) => setSelectedDate(e.target.value)}
                                                min={new Date().toISOString().split('T')[0]}
                                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                                            />
                                        </div>

                                        <div>
                                            <label className="block font-semibold mb-3">Select Time Slot</label>
                                            <div className="grid grid-cols-3 gap-2">
                                                {timeSlots.map(time => (
                                                    <button
                                                        key={time}
                                                        onClick={() => setSelectedTime(time)}
                                                        className={`py-2 px-3 rounded-lg border-2 font-medium transition ${selectedTime === time
                                                            ? 'border-blue-600 bg-blue-600 text-white'
                                                            : 'border-gray-300 hover:border-blue-400'
                                                            }`}
                                                    >
                                                        {time}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Mechanic Selection */}
                            {currentStep === 4 && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-6">Choose Your Mechanic</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {mechanics.map(mechanic => (
                                            <div
                                                key={mechanic.id}
                                                onClick={() => setSelectedMechanic(mechanic)}
                                                className={`border-2 rounded-lg p-6 cursor-pointer transition ${selectedMechanic?.id === mechanic.id
                                                    ? 'border-blue-600 bg-blue-50 shadow-md'
                                                    : 'border-gray-200 hover:border-blue-400'
                                                    }`}
                                            >
                                                <div className="mb-4 flex items-center justify-between">
                                                    {/* <img  className='rounded-full' /> */}
                                                    <div className='w-[30%] text-center'>
                                                        <Avatar className='w-32 h-32 mx-auto'>
                                                            <AvatarImage src={mechanic.imageURL} alt={mechanic.name} />
                                                        </Avatar>
                                                        <div className='py-5'>
                                                            <h4 className="text-lg font-bold">{mechanic.name}</h4>
                                                        </div>
                                                        <Badge variant='default'>{mechanic.role}</Badge>
                                                    </div>
                                                    <div className='w-[50%] leading-10'>
                                                        <h2 className='text-blue-600 text-2xl my-2'>Specialties:</h2>
                                                        {mechanic.specialties?.map((specialty: any, index: any) => (
                                                            <div key={index} className='flex space-x-3 items-center'>
                                                                <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                                                                <span>{specialty}</span>
                                                            </div>
                                                        ))}</div>
                                                    {selectedMechanic?.id === mechanic.id && (
                                                        <Check className="text-blue-600" size={24} />
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 5: Confirmation */}
                            {currentStep === 5 && (
                                <div>
                                    <h2 className="text-2xl font-bold mb-6">Confirm Your Booking</h2>

                                    <div className="space-y-6">
                                        <div className="border-2 border-gray-200 rounded-lg p-6">
                                            <h3 className="font-bold text-lg mb-4">Service Details</h3>
                                            <div className="space-y-3">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Service:</span>
                                                    <span className="font-semibold">{selectedService?.name}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Package:</span>
                                                    <span className="font-semibold">{selectedPackage?.name}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Duration:</span>
                                                    <span className="font-semibold">{selectedPackage?.duration} minutes</span>
                                                </div>
                                            </div>
                                        </div>

                                        {selectedProducts.length > 0 && (
                                            <div className="border-2 border-gray-200 rounded-lg p-6">
                                                <h3 className="font-bold text-lg mb-4">Add-ons</h3>
                                                <div className="space-y-2">
                                                    {selectedProducts.map(p => (
                                                        <div key={p.id} className="flex justify-between">
                                                            <span>{p.name}</span>
                                                            <span className="font-semibold">${p.price}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="border-2 border-gray-200 rounded-lg p-6">
                                            <h3 className="font-bold text-lg mb-4">Appointment</h3>
                                            <div className="space-y-3">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Date:</span>
                                                    <span className="font-semibold">{new Date(selectedDate).toLocaleDateString()}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Time:</span>
                                                    <span className="font-semibold">{selectedTime}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Mechanic:</span>
                                                    <span className="font-semibold">{selectedMechanic?.name}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-2 border-blue-600 rounded-lg p-6 bg-blue-50">
                                            <div className="flex justify-between items-center">
                                                <span className="text-xl font-bold">Total Price:</span>
                                                <span className="text-3xl font-bold text-blue-600">${getTotalPrice().toFixed(2)}</span>
                                            </div>
                                        </div>

                                        <button className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition">
                                            Confirm Booking
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Navigation Buttons */}
                {!loading && (
                    <div className="flex justify-between mt-6">
                        <button
                            onClick={handleBack}
                            disabled={currentStep === 1}
                            className={`px-6 py-3 rounded-lg font-semibold transition ${currentStep === 1
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Back
                        </button>

                        {currentStep < 5 && (
                            <button
                                onClick={handleContinue}
                                disabled={!canContinue()}
                                className={`px-6 py-3 rounded-lg font-semibold transition flex items-center ${canContinue()
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                Continue
                                <ChevronRight size={20} className="ml-2" />
                            </button>
                        )}
                    </div>
                )}

                {/* Price Summary (visible on steps 2-5) */}
                {currentStep >= 2 && selectedPackage && (
                    <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
                        <h3 className="font-bold text-lg mb-3">Price Summary</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Package ({selectedPackage.name}):</span>
                                <span className="font-semibold">${selectedPackage.price}</span>
                            </div>
                            {selectedProducts.map(p => (
                                <div key={p.id} className="flex justify-between text-gray-600">
                                    <span>{p.name}:</span>
                                    <span>${p.price}</span>
                                </div>
                            ))}
                            <div className="border-t pt-2 mt-2 flex justify-between text-lg font-bold">
                                <span>Total:</span>
                                <span className="text-blue-600">${getTotalPrice().toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AutoCareBooking;