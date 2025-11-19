import { checkUser } from '@/lib/checkUser';
import { redirect } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from 'react'
import AccountVehicles from '../_components/vehicles';

const UserProfilePage = async () => {

    const user = await checkUser();

    if (!user) redirect('/sign-in');

    return (
        <div className="min-h-screen bg-blue-300 py-12 px-4 sm:px-14 lg:px-18 mt-20">
            <Tabs defaultValue="account">
                <TabsList className='mx-auto'>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
                </TabsList>
                <TabsContent value="account"><div className="max-w-3xl mx-auto">
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        {/* Header */}
                        <div className="bg-linear-to-r from-blue-500 to-purple-600 h-32"></div>

                        <div className='px-7'>
                            {/* Profile Image */}
                            <div className="relative px-6 pb-6">
                                <div className="flex items-end -mt-16">
                                    <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                                        {user.imageURL ? (
                                            <img
                                                src={user.imageURL}
                                                alt={user.name || 'User'}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white text-4xl font-bold">
                                                {user.name?.[0]?.toUpperCase() || 'U'}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* User Name */}
                                <div className="mt-6">
                                    <h1 className="text-3xl font-bold text-gray-900">
                                        {user.name || 'No name provided'}
                                    </h1>
                                </div>
                            </div>

                            {/* User Information */}
                            <div className="border-t border-gray-200 px-6 py-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h2>

                                <dl className="space-y-4">
                                    {/* Email */}
                                    <div className="flex flex-col sm:flex-row sm:items-center">
                                        <dt className="text-sm font-medium text-gray-500 sm:w-40">Email</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                                            {user.email || 'No email provided'}
                                        </dd>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex flex-col sm:flex-row sm:items-center">
                                        <dt className="text-sm font-medium text-gray-500 sm:w-40">Phone</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                                            {user.phone || 'No phone number'}
                                        </dd>
                                    </div>

                                    {/* Role */}
                                    <div className="flex flex-col sm:flex-row sm:items-center">
                                        <dt className="text-sm font-medium text-gray-500 sm:w-40">Role</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                                            {user.role}
                                        </dd>
                                    </div>

                                    {/* Created At */}
                                    <div className="flex flex-col sm:flex-row sm:items-center">
                                        <dt className="text-sm font-medium text-gray-500 sm:w-40">Member Since</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                                            {user.created_at
                                                ? new Date(user.created_at).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })
                                                : 'Unknown'}
                                        </dd>
                                    </div>

                                    {/* Updated At */}
                                    <div className="flex flex-col sm:flex-row sm:items-center">
                                        <dt className="text-sm font-medium text-gray-500 sm:w-40">Last Updated</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                                            {user.updated_at
                                                ? new Date(user.updated_at).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })
                                                : 'Never'}
                                        </dd>
                                    </div>

                                    {/* Deleted At (if soft delete is used) */}
                                    {user.deleted_at && (
                                        <div className="flex flex-col sm:flex-row sm:items-center">
                                            <dt className="text-sm font-medium text-red-500 sm:w-40">Deleted At</dt>
                                            <dd className="mt-1 text-sm text-red-600 sm:mt-0">
                                                {new Date(user.deleted_at).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </dd>
                                        </div>
                                    )}
                                </dl>
                            </div>
                        </div>
                        {/* Action Buttons (Optional) */}
                        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
                            <div className="flex justify-end space-x-3">
                                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div></TabsContent>
                <TabsContent value="vehicles" className='mx-auto max-w-5xl'>
                    <AccountVehicles />
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default UserProfilePage