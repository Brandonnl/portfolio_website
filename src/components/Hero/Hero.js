import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
          I'm Brandon!
        </SectionTitle>
        <SectionText>
          I am currently study Computer Science at Cornell. I'm excited to explore for new opportunies in the Software Engineering field!
        </SectionText>
        <Button onClick={() => window.location = 'https://www.linkedin.com/in/brandon-lu14/'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;