import React from 'react'
import FreelancerHeader from './FreelancerHeader'
import FooterAverage from './../components/FooterAverage';
import FreelancerSlide from '../components/FreelancerSlide';
import LatestProject from '../components/LatestProject';
import Freelist1 from '../components/Freelist1';
import FooterTopFree from '../components/FooterTopFree';
import FooterFreeBtm from '../components/FooterFreeBtm';

function Freelancer() {
  return (
    <div>
        <FreelancerHeader />
        <FreelancerSlide />
        <FooterAverage />
        <LatestProject />
        <Freelist1 />
        <FooterTopFree />
        <FooterFreeBtm />
    </div>
  )
}

export default Freelancer
