import { checkUser } from '@/lib/checkUser'
import { getUserVehicles } from '@/lib/vehicles';
import React from 'react'
import BookingFlow from './_components/booking_flow';

const BookingPage = async () => {

    const user = await checkUser();
    const userVehicles = await getUserVehicles(user.id);

    return (
        <BookingFlow user={user} userVehicles={userVehicles} />
    )
}

export default BookingPage