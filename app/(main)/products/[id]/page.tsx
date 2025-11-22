import React from 'react'
import ProductDetails from './_components/product_details'
import Comments from '@/components/CommentsSection/ShowCommentsSection'

const ProductDetailsPage = () => {
    return (
        <div>
            <ProductDetails />
            <Comments />
        </div>
    )
}

export default ProductDetailsPage