import React from 'react';
import Img from 'gatsby-image';
import { dynamicI18n, DynamicTrans } from './DynamicTrans';
import { getUnderlineHtml } from './lib';
import { Section } from './Section';

export const TitleWithGraphic = ({
  title,
  motivationText,
  graphic,
  description,
}: TitleWithGraphicProps) => {
  const { childImageSharp } = graphic?.localFile || {};

  return (
    <div className="overflow-hidden" style={{ margin: '-7rem 0', padding: '7rem 0' }}>
      <Section className="position-relative my-7">
        <div className="bg-primary position-absolute tilted-background z-index-background"></div>
        <div className="row justify-content-center my-7 py-7">
          <div className="col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end">
            {!!childImageSharp && <Img {...childImageSharp} />}
          </div>

          <div className="col-lg-5">
            <p className="text-secondary">
              <DynamicTrans>{motivationText.toUpperCase()}</DynamicTrans>
            </p>
            <h1
              className="custom-underline my-4 font-weight-bold text-secondary"
              dangerouslySetInnerHTML={{ __html: getUnderlineHtml(dynamicI18n(title)) }}
            />
            <p className="text-white">
              <DynamicTrans>{description}</DynamicTrans>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};
