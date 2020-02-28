// @flow

import React from 'react';
import { withI18n } from '@lingui/react';
import { graphql } from 'gatsby';

import { HomePageHeader } from '../components/HomePageHeader';
import { MainProblemLayout } from '../components/MainProblemLayout';
import { ExternalLogoRow } from '../components/ExternalLogoRow';
import { SellingProp } from '../components/SellingProp';

const DecoShapes = () => (
  <>
    <div className="top-deco-shape top-deco-shape--one" />
    <div className="top-deco-shape top-deco-shape--two" />
  </>
);

const IndexPage = (props: Props) => (
  <main className="position-relative overflow-hidden">
    <DecoShapes />
    <HomePageHeader {...props} />

    {props.data.page.entries.map(({ __typename, ...entry }, index) => {
      if (index === 0) {
        return <MainProblemLayout {...entry} />;
      }
      if (__typename === 'ContentfulExternalLogos') {
        return <ExternalLogoRow {...entry} />;
      }
      if (__typename === 'ContentfulSellingProposition') {
        return <SellingProp {...entry} imgFirst={index % 2 === 0} />;
      }
      return null;
    })}
  </main>
);

export default withI18n()(IndexPage);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    tablet: imageSharp(fluid: { originalName: { regex: "/tablet-dashboard.png/" } }) {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    page: contentfulIndexPage(contentful_id: { eq: "jjbelvJa8nRqbGqYrr5wi" }) {
      entries {
        ... on ContentfulExternalLogos {
          title
          logos {
            title
            description
            localFile {
              childImageSharp {
                fixed(width: 120) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        ... on ContentfulSellingProposition {
          title
          description
          link
          linkTo
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
