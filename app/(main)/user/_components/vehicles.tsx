import React from 'react'
import { getUserVehicles } from '@/lib/vehicles'
import { checkUser } from '@/lib/checkUser';

const AccountVehicles = async () => {

    const user = await checkUser();
    const vehicles = await getUserVehicles(user.id);

    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            {vehicles?.map((vehicle) => (
                <div key={vehicle.id} >
                    <div className='lg:flex bg-gray-200 space-x-3 m-4 rounded-xl'>
                        <img src={vehicle.imageURL} alt={`Vehicle number ${vehicle.id}`} className='p-5 lg:max-w-[50%]' />
                        <div className='w-full p-5 space-y-8'>
                            <div className='flex justify-between'>
                                <div className='flex justify-between w-[40%]'>
                                    <label htmlFor="brand" className='text-blue-700 font-semibold'>Brand</label>
                                    <p>{vehicle.brand}</p>
                                </div>
                                <div className='flex justify-between w-[50%]'>
                                    <label htmlFor="model" className='text-blue-700 font-semibold'>Model</label>
                                    <p>{vehicle.model}</p>
                                </div>
                            </div>

                            <div className='flex justify-between'>
                                <div className='flex justify-between w-[40%]'>
                                    <label htmlFor="color" className='text-blue-700 font-semibold'>Color</label>
                                    <p>{vehicle.color}</p>
                                </div>
                                <div className='flex justify-between w-[50%]'>
                                    <label htmlFor="plate" className='text-blue-700 font-semibold'>License Plate</label>
                                    <p>{vehicle.plate}</p>
                                </div>
                            </div>

                            <div className='flex justify-between'>
                                <div className='flex justify-between w-[40%]'>
                                    <label htmlFor="year" className='text-blue-700 font-semibold'>Year</label>
                                    <p>{vehicle.year}</p>
                                </div>
                                <div className='flex justify-between w-[50%]'>
                                    <label htmlFor="mileage" className='text-blue-700 font-semibold'>Mileage</label>
                                    <p>{vehicle.mileage} km</p>
                                </div>
                            </div>

                            <div className='flex justify-between w-[50%]'>
                                <label htmlFor="mileage" className='text-blue-700 font-semibold'>VIN</label>
                                <p>{vehicle.VIN}</p>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AccountVehicles