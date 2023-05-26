import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import { MyLogo } from './MyLogo';

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: 'flex', alignItems: 'center', color: "white", marginBottom: '1px' }}>

        <MyLogo size="3rem" /> <Span>Brandon Lu</Span>

      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" legacyBehavior>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#contactme" legacyBehavior>
          <NavLink>Contact Me</NavLink>
        </Link>
      </li>

    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Brandonnl">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/brandon-lu14">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto: brandonlu3556@gmail.com">
        <AiFillMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
