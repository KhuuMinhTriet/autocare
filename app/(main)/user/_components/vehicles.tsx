import React from 'react'
import { getUserVehicles } from '@/lib/vehicles'

const AccountVehicles = async () => {

    const vehicles = await getUserVehicles();

    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            {vehicles?.map((vehicle) => (
                <div key={vehicle.id}>
                    <img src={vehicle.imageURL} alt={`Vehicle number ${vehicle.id}`} />
                </div>
            ))}
        </div>
    )
}

export default AccountVehicles