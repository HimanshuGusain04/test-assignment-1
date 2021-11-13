import React from 'react'
import Loader from '../assets/loader.gif'

function Loading() {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <img src={Loader} alt="loading..." />
        </div>
    )
}

export default Loading
