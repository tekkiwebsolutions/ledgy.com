import React from 'react';
import { graphql } from 'gatsby';

import { LongText, PageHeader, CompanySummary, OtherCustomerStories } from '../components';
import { Title, Hr } from '../layouts/utils';

const CustomerStory = ({
  data,
  prefix,
}: Props & {
  data: {
    contentfulCustomerStory: CustomerStoryProps;
    allContentfulCustomerStory: { edges: { node: AllContentfulCustomerStoryProps }[] };
  };
}) => {
  const { id, title, header, subtitle, content, company, isOurStory } =
    data.contentfulCustomerStory;
  const otherUserStories = data.allContentfulCustomerStory.edges
    .filter(({ node }) => node.id !== id && !node.isOurStory)
    .map(({ node }) => node);
  const hasOtherCustomerStories = otherUserStories.length > 0;
  return (
    <div>
      <Title title={title || header} description={subtitle} />
      <PageHeader title={header} subtitle={subtitle} />
      <main>
        <section className="section ">
          <div className="container container-medium">
            <div className="row">
              <div className="col-md-4 mb-6">
                <CompanySummary company={company} prefix={prefix} />
              </div>
              <div className="col-md-8">
                <div className="px-3">
                  <LongText content={content} prefix={prefix} />
                </div>
              </div>
            </div>
            {hasOtherCustomerStories && !isOurStory && (
              <>
                <Hr />
                <div className="row pb-6">
                  <div className="col-md-12">
                    <OtherCustomerStories customerStories={otherUserStories} prefix={prefix} />
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CustomerStory;

export const customerStoryQuery = graphql`
  query ($id: String!) {
    contentfulCustomerStory(id: { eq: $id }) {
      id
      slug
      title
      header
      subtitle
      language
      isOurStory
      content {
        childMdx {
          body
        }
      }
      company {
        name
        contactName
        contactTitle
        logo {
          localFile {
            childImageSharp {
              fluid(maxWidth: 150) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        mainQuote {
          childMdx {
            body
          }
        }
        yearFounded
        employeeCount
        sector
        location
        stage
      }
    }
    allContentfulCustomerStory(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          slug
          isOurStory
          company {
            logo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            cover {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
