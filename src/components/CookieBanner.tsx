import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Button } from './utils';
import { ClosingButton, bannerClassName } from './PublicityBanner';

import { hasAcceptedCookies, loadMarketingTools } from '../helpers';

const ConfirmCookieButton = ({
  hide,
  acceptCookies,
}: {
  hide: () => void;
  acceptCookies: () => void;
}) => {
  const baseClasses = 'my-sm-0 my-2 mr-2 btn-md';
  const smallScreenClasses = 'btn-sm';
  if (!window) return <></>;
  const { innerWidth: screenWidth } = window;

  return (
    <Button
      className={screenWidth < 576 ? smallScreenClasses : baseClasses}
      onClick={() => {
        hide();
        acceptCookies();
      }}
    >
      Ok
    </Button>
  );
};

const Banner = ({
  content,
  hide,
  acceptCookies,
}: {
  content: Mdx;
  hide: () => void;
  acceptCookies: () => void;
}) => (
  <div className={`${bannerClassName} offset-xl-8 col-xl-4 `}>
    <div className="m-4 row">
      <div className="col-12 pb-2 pl-2">
        <MDXRenderer>{content.childMdx.body}</MDXRenderer>
      </div>
      <div className="col-12 d-flex align-items-center justify-content-center">
        <ConfirmCookieButton hide={hide} acceptCookies={acceptCookies} />
      </div>
    </div>
    <ClosingButton classNames={'close--button-dark'} hide={hide} />
  </div>
);

const cookieBannerQuery = graphql`
  {
    allContentfulCookieBanner {
      edges {
        node {
          content {
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`;

export const CookieBanner = ({ segmentDestinations }: { segmentDestinations: string[] }) => {
  const result = useStaticQuery(cookieBannerQuery);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (hasAcceptedCookies()) {
      setTimeout(() => {
        loadMarketingTools(segmentDestinations);
      }, 1414);
    } else {
      setShow(true);
    }
  }, []);

  const [banner] = result.allContentfulCookieBanner.edges;
  if (!banner) return null;

  const { content } = banner.node;
  const acceptCookies = () => {
    loadMarketingTools(segmentDestinations);
    setShow(false);
  };

  return show ? (
    <Banner content={content} hide={() => setShow(false)} acceptCookies={acceptCookies} />
  ) : null;
};
