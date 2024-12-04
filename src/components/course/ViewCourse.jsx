import React from 'react'
import { useParams } from 'react-router-dom'
const ViewCourse = () => {
    const {courseId} = useParams()
  return (
    <div>
      {courseId}
    </div>
  )
}

export default ViewCourse
