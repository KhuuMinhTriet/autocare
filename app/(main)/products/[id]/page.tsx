"use client";

import { useEffect, useState } from 'react';
import { getProductById } from '../../../../lib/product';
import { useParams, notFound } from 'next/navigation';
import {
    Star,
    ArrowLeft,
    Check,
    Shield,
    Wrench,
} from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function ProductDetailsPage() {
    const params = useParams();
    const id = params.id as string;

    const [product, setProduct] = useState<any>(null);
    const [shouldNotFound, setShouldNotFound] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const productId = Number(id);

            if (isNaN(productId) || productId <= 0) {
                setShouldNotFound(true);
                return;
            }

            const data = await getProductById(productId);

            if (!data || data.length === 0) {
                setShouldNotFound(true);
                return;
            }
            setProduct(data[0]);
        }

        if (id) {
            fetchData();
        }
    }, [id]);

    if (shouldNotFound) {
        notFound();
    }

    if (!product) {
        return (
            <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                <Button
                    variant="ghost"
                    className="mb-8"
                >
                    <Link href='/products' className='flex justify-center items-center'>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Products</Link>
                </Button>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                            <img
                                src={product.imageURL}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div>
                        <Badge className="mb-3 bg-blue-100 text-blue-700">
                            {product.category}
                        </Badge>
                        <h1 className="text-4xl mb-4">{product.name}</h1>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < Math.floor(product.rating)
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-gray-600">
                                {product.rating} ({product.reviews} reviews)
                            </span>
                        </div>

                        <div className="text-4xl text-blue-600 mb-6">
                            ${product.price}
                        </div>

                        <p className="text-lg text-gray-700 mb-6">
                            {product.description}
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl mb-4">Key Features</h3>
                            <ul className="space-y-3">
                                {product.features.map((feature: any, index: any) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                        <span className="text-gray-700">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {product.amount === 0 && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                                <p className="text-red-700">
                                    This product is currently out of stock. Check
                                    back soon!
                                </p>
                            </div>
                        )}

                        {product.amount > 0 && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                                <p className="text-blue-700">
                                    {product.amount}{" "}
                                    {product.amount === 1 ? "item" : "items"}{" "}
                                    available in stock
                                </p>
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                                <Wrench className="w-8 h-8 text-blue-600 mb-2" />
                                <div className="text-sm">
                                    Professional Installation Include
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                                <Shield className="w-8 h-8 text-blue-600 mb-2" />
                                <div className="text-sm">Quality Guarantee</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}