import React from 'react'
import VideoIntroduction from '../../components/VideoIntroduction';
import FeatureHighlights from '../../components/FeatureHighlights';
import CardComponent from '../../components/CardCompoenent';
import CallToAction from '../../components/CallToAction';

const Features = () => {
  return (
    <div>
      <VideoIntroduction/>
      <FeatureHighlights/>
      <CardComponent/>
      <CallToAction/>
    </div>
  )
}

export default Features;
