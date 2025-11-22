import React from 'react'
import ServiceDetails from './_components/service_details'
import Comments from '@/components/CommentsSection/ShowCommentsSection'

const ServiceDetailsPage = () => {
    return (
        <div>
            <ServiceDetails />
            <Comments />
        </div>
    )
}

export default ServiceDetailsPage