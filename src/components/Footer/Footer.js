import React from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai';
import { FooterWrapper, Name, SocialIconsContainer, SocialContainer, SocialIcons, LinkList } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
       <LinkList>
      </LinkList>
        <img src="/images/BL.png" alt="Logo" style={{ width: '125px' }} />
      <Name>Brandon Lu</Name>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Brandonnl">
            <AiFillGithub size="4rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/brandon-lu14">
            <AiFillLinkedin size="4rem" />
          </SocialIcons>
          <SocialIcons href="mailto:brandonlu3556@gmail.com">
            <AiFillMail size="4rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
