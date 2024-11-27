import React from 'react'
import { useGetTeacherProfileQuery } from '../../features/profile/teacher/teacherProfile';
import { useSelector, useDispatch } from 'react-redux';

function ProfileHome() {
    const { token, role, isAuthenticated, user_id } = useSelector((state) => state.auth);
    const { data, error, isLoading } = useGetTeacherProfileQuery(user_id);
    console.log("teacher data",data); 
    


  return (
    <div>
      {role === "instructor" && data ? <div>Profile Section</div> : <div>Create Profile</div>}
    </div>
  )
}

export default ProfileHome
