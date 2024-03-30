import React from 'react';
import PrivacyHeader from '../components/privacyComponents/privacyHeader';
import PrivacySection from '../components/privacyComponents/privacySection';
import PrivacyInfo from '../components/privacyComponents/privacyInfo';
import PrivacyExtra from '../components/privacyComponents/privacyExtra';

export default function Page() {
  return (
    <div>
        <PrivacyHeader />
        <PrivacySection />
        <PrivacyInfo />
        <PrivacyExtra />
    </div>
  )
}
