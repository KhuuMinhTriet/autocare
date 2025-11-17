import { Spinner } from '@/components/ui/spinner'
import React from 'react'

export default function Loading() {
    return (
        <div className='flex flex-col space-y-4 justify-center items-center h-screen'>
            <Spinner fontSize='lg' />
            <p>Loading...</p>
        </div>
    )
}