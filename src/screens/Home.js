import React, { useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { DELETE_USER, LIKE_USER, receiveApiData } from '../actions'
import {BsEnvelope, BsFillTelephoneFill, BsGlobe, BsHeart, BsHeartFill} from 'react-icons/bs'
import {AiTwotoneEdit} from 'react-icons/ai';
import {RiDeleteBin6Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

function Home() {
    const users = useSelector(state => state.users);
    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState('')
    const dispatch = useDispatch();
    
    
    const update = () => {
        console.log(currentUser)
        if(Object.entries(currentUser).some((val) => val[1] === '')){
            setError('All field are required')
        }else {
            let newData = users.map((user) => user.id === currentUser.id ? currentUser : user);
            dispatch(receiveApiData(newData));
            setCurrentUser(null);
            setError('')
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-10">
            {users.map((user) => (
                <div className="bg-white border border-gray-200 my-2 shadow-lg rounded-md" key={user.username}>
                    <div className="h-40 bg-gray-50 rounded-t-md flex items-center justify-center">
                    {/* <img src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg`} alt="avatar" className="h-36 w-40" /> */}
                        <img src={`https://avatars.dicebear.com/v2/avataaars/wisetr.svg`} alt="avatar" className="h-36 w-40" />
                    </div>
                    <div className="p-3 flex flex-col">
                        <div className="font-bold">
                            <Link to={"users/"+ user.id}> {user.name}</Link>
                        </div>
                        <div className="flex text-sm items-center gap-2">
                            <BsEnvelope />
                            <div>{user.email}</div>
                        </div>
                        <div className="flex text-sm items-center gap-2">
                            <BsFillTelephoneFill />
                            <div>{user.phone}</div>
                        </div>
                        <div className="flex text-sm items-center gap-2">
                            <BsGlobe />
                            <div>{user.website}</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 rounded-b-md divide-gray-300 divide-x border-t border-gray-200 bg-gray-50">
                        <div className="flex justify-center py-2 cursor-pointer" onClick={() => dispatch({type: LIKE_USER, id: user.id})}>{user.liked ? <BsHeartFill/> : <BsHeart/>}</div>
                        <div className="flex justify-center py-2 cursor-pointer" onClick={() => setCurrentUser(user)}><AiTwotoneEdit/></div>
                        <div className="flex justify-center py-2 cursor-pointer"  onClick={() => dispatch({type: DELETE_USER, id: user.id})}><RiDeleteBin6Fill/></div>
                    </div>
                    
                </div>
            ))}
            {currentUser !== null && <Modal 
            close={() => {setCurrentUser(null); setError('')}} updateData={user => setCurrentUser(user)} 
            updateCurrentUser={update} user={currentUser} error={error} />}
        </div>
    )
}

export default Home;
