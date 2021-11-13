import React from 'react'

function Modal(props) {
        return (
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex justify-center items-center sm:items-end min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-40 transition-opacity" ></div>
           
                    <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all duration-500 ease-in sm:my-8 sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex justify-between flex-col">
                            {props.error !=='' &&
                            <div className="bg-red-400 text-white w-full items-center flex justify-center text-sm py-1">
                                <div>{props.error}</div>
                            </div>
                            }
                            <div className="flex gap-2 mt-2 items-center self-center">
                                <label className="font-semibold text-sm sm:text-md w-20 text-right">Name : </label>
                                <input type="text" className="focus:outline-none border-2 text-sm rounded-md border-gray-400 h-8 px-1" value={props.user.name} onChange={(e) => props.updateData({...props.user, name: e.target.value})} />
                            </div>
                            <div className="flex gap-2 mt-2 items-center self-center">
                                <label className="font-semibold text-sm sm:text-md w-20 text-right">Email : </label>
                                <input type="text" className="focus:outline-none border-2 text-sm rounded-md border-gray-400 h-8 px-1" value={props.user.email} onChange={(e) => props.updateData({...props.user, email: e.target.value})} />
                            </div>
                            <div className="flex gap-2 mt-2 items-center self-center">
                                <label className="font-semibold text-sm sm:text-md w-20 text-right">Phone : </label>
                                <input type="text" className="focus:outline-none border-2 text-sm rounded-md border-gray-400 h-8 px-1" value={props.user.phone} onChange={(e) => props.updateData({...props.user, phone: e.target.value})} />
                            </div>
                            <div className="flex gap-2 mt-2 items-center self-center">
                                <label className="font-semibold text-sm sm:text-md w-20 text-right">Website : </label>
                                <input type="text" className="focus:outline-none border-2 text-sm rounded-md border-gray-400 h-8 px-1" value={props.user.website} onChange={(e) => props.updateData({...props.user, website: e.target.value})} />
                            </div>

                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-row-reverse gap-4">
                            <button type="button" className="bg-gray-800 text-white px-2 py-1 rounded-sm" onClick={props.updateCurrentUser}>
                            Update
                            </button>
                            <button type="button" className="px-2 py-1 border-2 border-secondary bg-white rounded-sm" onClick={props.close}>
                            Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Modal