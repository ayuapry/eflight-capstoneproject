import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getProfile } from '../redux/feature/UserSlice';
import ButtonPrimary from './ButtonPrimary'
import { EditProfileModal } from './EditProfileModal';
import account from '../assets/account.png'

export const ProfileCard = () => {
    const [editProfileModal, setEditProfileModal] = useState(false);
    const handleOnClose = () => setEditProfileModal(false);

    const { profile } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
      dispatch(getProfile(id));
    }, [dispatch, id]);
    console.log(profile)

  return (
    <div className='mt-3'>
        <div className="mx-2 md:mt-[90px] md:min-h-[620px] md:ml-5 bg-white shadow-md rounded-md">
            <div className='px-5 py-2 flex justify-between items-center border-b-2'>
                <div className='font-semibold text-lg'>Your Accounts</div>
                {/* <p>Edit</p> */}
                <div className='w-fit'  onClick={() => setEditProfileModal(true)}>
                    <ButtonPrimary title='Edit Account'  />
                </div>
            </div>
            <div className='mt-5 px-5 py-2 grid grid-cols-2'>
                <div>
                    <p><span className='text-gray-400'>FirstName:</span> {profile?.fullName}</p>
                    <p><span className='text-gray-400'>BirthDate : </span>{profile?.birthdate}</p>
                </div>
                <div>
                    <p><span className='text-gray-400'>Email : </span>{profile?.email}</p>
                    <p><span className='text-gray-400'>Gender: </span>{profile?.gender}</p>
                </div>
            </div>
            <div className='px-40 hidden md:flex' >
                <img src={account} alt="" className='h-[400px] w-[400px]'/>
            </div>
        </div>
        <EditProfileModal open={editProfileModal} close={handleOnClose} />

    </div>
  )
}
