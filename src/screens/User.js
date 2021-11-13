import React from 'react'
import { useSelector } from 'react-redux'
import {BsEnvelope, BsFillTelephoneFill, BsGlobe} from 'react-icons/bs'
import {FaBuilding} from 'react-icons/fa';
import {IoPin} from 'react-icons/io5'

function User({match}) {
    const user = useSelector(state => state.users.find((user) => user.id == match.params.id))

    return (
        <div className="w-screen h-screen flex justify-center items-center rounded-md">
            {user ?
            <div className="border rounded-sm bg-white mx-5 sm:mx-0 sm:w-1/3 flex flex-col shadow-lg">
                <div className="bg-gray-50 w-full h-48 flex justify-center items-center">
                    {/* <img src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg`} alt="avatar" className="h-36 w-40" /> */}
                    <img src={`https://avatars.dicebear.com/v2/avataaars/wisetr.svg`} alt="avatar" className="h-40 w-40 bg-white rounded-full border border-black" />
                </div>
                <div className="p-3 flex flex-col gap-2">

                    <div className="flex text-lg font-bold">
                        {user.name}
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <div><BsEnvelope /></div>
                        <div>{user.email}</div>
                    </div>

                    <div className="flex items-center gap-2">
                        <BsFillTelephoneFill />
                        <div>{user.phone}</div>
                    </div>

                    <div className="flex items-center gap-2">
                        <BsGlobe />
                        <div>{user.website}</div>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaBuilding />
                        <div>{user.company.name}</div>
                    </div>

                    <div className="flex items-center gap-2">
                        <IoPin/>
                        <div>{`${user.address.street}, ${user.address.suite}, ${user.address.city}`}</div>
                    </div>

                </div>
            </div>
            :
            <div className="font-bold text-2xl">
                404: User Not Found
            </div>
            }
        </div>
    )
}

export default User
