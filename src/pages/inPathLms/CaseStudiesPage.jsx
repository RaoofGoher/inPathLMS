import React from 'react'
import CaseStudies from '../../components/CaseStudies';
import StudentsTestimonials from '../../components/StudentsTestimonials';
import CTABanner from '../../components/CTABanner';
import CaseStudyBlog from '../../components/CaseStudyBlog';
import ScrollToTop from '../../components/ScrollToTop';

const CaseStudiesPage = () => {
  return (
    <div>
      <ScrollToTop/>
      <CaseStudies/>
      <CaseStudyBlog/>
      <StudentsTestimonials/>
      <CTABanner/>
      
    </div>
  )
}

export default CaseStudiesPage; 
