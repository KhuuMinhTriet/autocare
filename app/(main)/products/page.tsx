import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Star } from "lucide-react";
import { getProducts } from '../../../lib/product';
import Link from "next/link";

const ProductsPage = async () => {

    const products = await getProducts();

    const categories = ["All", "Exterior Care", "Interior Care", "Wheels & Tires", "Washing", "Glass Care"];

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-5xl mb-4">Our Products</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Premium auto care products to keep your vehicle looking its best
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={category === "All" ? "default" : "outline"}
                            className={category === "All" ? "bg-blue-600 hover:bg-blue-700" : ""}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products?.map((product) => (
                        <Link key={product.id} href={`/products/${product.id}`}><Card
                            className="overflow-hidden hover:shadow-lg hover:shadow-blue-500 transition-shadow cursor-pointer"
                        >
                            <div className="aspect-auto relative bg-gray-100">
                                <img
                                    src={product.imageURL}
                                    alt={product.name}
                                    className="w-full h-full max-h-64 object-cover"
                                />
                                {product.amount === 0 && (
                                    <Badge className="absolute top-3 right-3 bg-red-500">
                                        Out of Stock
                                    </Badge>
                                )}
                            </div>
                            <div className="p-4">
                                <div className="text-sm text-blue-600 mb-1">{product.category}</div>
                                <h3 className="text-lg mb-2">{product.name}</h3>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex items-center">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm ml-1">{product.rating}</span>
                                    </div>
                                    <span className="text-sm text-gray-500">({product.reviews})</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl text-blue-600">${product.price}</span>
                                    <span className="text-sm text-gray-600">
                                        {product.amount > 0 ? `${product.amount} left` : 'Out of stock'}
                                    </span>
                                </div>
                            </div>
                        </Card></Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;
