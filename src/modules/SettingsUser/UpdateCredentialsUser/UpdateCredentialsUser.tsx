import CustomButton from '@/src/components/CustomButton/CustomButton'
import CustomInput from '@/src/components/CustomInput'
import CustomModal from '@/src/components/CustomModal';
import React, { useRef } from 'react'
import UpdatePassword from '../UpdatePassword/UpdatePassword';


const UpdateCredentialsUser = () => {

  const updatePassword = useRef();

  const toggleUpdatePassword = () => {
    (updatePassword.current as any).toggle();
  }


  return (
    <div className='flex flex-col gap-8'>
      <CustomInput
        label='Correo electrónico'
        type='email'
        placeholder='Correo electrónico'
        onChange={(e) => console.log(e.target.value)}
        className='w-full h-10 p-2 rounded-md border brode-gray'
      />
      <CustomButton
        label='Actualizar contraseña'
        onClick={toggleUpdatePassword}
        className=' w-1/2 max-xl:w-full w- bg-secondary text-white font-bold text-lg rounded-md py-2 px-4 hover:bg-primary-dark'
      />
      <CustomModal customRef={updatePassword} closeOnEscape={false}>
        <UpdatePassword onClose={toggleUpdatePassword} />
      </CustomModal>
    </div>
  )
}

export default UpdateCredentialsUser