import React from 'react'
import PricingPlans from '../../components/PricingPlans';
import CTABanner from '../../components/CTAbanner';
import MoneyBackGuarantee from '../../components/MoneyBackGuarantee';
import StudentsTestimonials from '../../components/StudentsTestimonials';

const Pricing = () =>  {
  return (
    <div>
     <PricingPlans/>
     <MoneyBackGuarantee/>
     <StudentsTestimonials/>
     <CTABanner/>
    </div>
  )
}

export default Pricing;