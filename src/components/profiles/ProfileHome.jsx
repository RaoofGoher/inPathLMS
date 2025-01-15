import React from 'react'
import { useGetTeacherProfileQuery } from '../../features/profile/teacher/teacherProfile';
import { useSelector, useDispatch } from 'react-redux';
import CreateProfile from './teacher/CreateProfile';
import ProfileComponent from './teacher/Profile';

function ProfileHome() {
    const { token, role, isAuthenticated, user_id } = useSelector((state) => state.auth);
    const { data, error, isLoading } = useGetTeacherProfileQuery(user_id);
    console.log("teacher data",data); 
    


  return (
    <div>
      {role === "instructor" && data ? <ProfileComponent data={data}/> : <CreateProfile/>}
    </div>
  )
}

export default ProfileHome
