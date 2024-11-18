import React from 'react'
import VideoIntroduction from '../../components/VideoIntroduction';
import FeatureHighlights from '../../components/FeatureHighlights';
import CardComponent from '../../components/CardCompoenent';
import CallToAction from '../../components/CallToAction';
import ScrollToTop from '../../components/ScrollToTop';

const Features = () => {
  return (
    <div>
      <ScrollToTop/>
      <VideoIntroduction/>
      <FeatureHighlights/>
      <CardComponent/>
      <CallToAction/>
    </div>
  )
}

export default Features;
