import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Stats from '~/components/widgets/Stats';
import Services from '~/components/widgets/Services';
import Features from '~/components/widgets/Features';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import CallToAction from '~/components/widgets/CallToAction';

import {
  callToActionHome,
  featuresHome,
  heroHome,
  servicesHome,
  statsHome,
  stepsHome,
  testimonialsHome,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <Stats {...statsHome} />
      <Services {...servicesHome} />
      <Features {...featuresHome} />
      <Steps {...stepsHome} />
      <Testimonials {...testimonialsHome} />
      <CallToAction {...callToActionHome} />
    </>
  );
}
