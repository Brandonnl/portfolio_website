import React from 'react';
import { AiFillMail } from 'react-icons/ai';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        const hasVisitAndSource = p.visit !== '' && p.source !== '';
        const displayText = hasVisitAndSource ? 'Code & Source' : 'Contact to view';
        const displayLink = hasVisitAndSource ? (
          <>
            <ExternalLinks href={p.visit}>Code</ExternalLinks>
            <ExternalLinks href={p.source}>Source</ExternalLinks>
          </>
        ) : (
          <ExternalLinks href="mailto: bl533@cornell.edu">
            Contact to view <AiFillMail size="1.5rem" />
          </ExternalLinks>
        );

        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <br />
              <TitleContent>
                <strong>Stack</strong>
              </TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              {displayText !== 'Contact to view' && displayLink}
              {displayText === 'Contact to view' && (
                <ExternalLinks href="mailto:bl533@cornell.edu">
                  {displayText} <AiFillMail size="1.5rem" />
                </ExternalLinks>
              )}
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
