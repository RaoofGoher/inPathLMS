import React from 'react'
import PricingPlans from '../../components/PricingPlans';
import CTABanner from '../../components/CTABanner';
import MoneyBackGuarantee from '../../components/MoneyBackGuarantee';
import StudentsTestimonials from '../../components/StudentsTestimonials';
import ScrollToTop from '../../components/ScrollToTop';

const Pricing = () =>  {
  return (
    <div>
      <ScrollToTop/>
     <PricingPlans/>
     <MoneyBackGuarantee/>
     <StudentsTestimonials/>
     <CTABanner/>
    </div>
  )
}

export default Pricing;