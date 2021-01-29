// @flow

import React from 'react';
import { graphql } from 'gatsby';
import { withI18n } from '@lingui/react';
import { t } from '@lingui/macro';

import { Title } from '../layouts/utils';
import {
  LawyerCTABanner,
  SwissPartners,
  CollaborationBanner,
  UniqueSellingPropositions,
} from '../components/partners';

import { PageHeader } from '../components/PageHeader';

export default withI18n()(({ data }: Props) => (
  <>
    <Title title={t`Partners`} description={t`Our trusted law firm partners are here to help`} />
    <PageHeader title="Our trusted law firm partners are here to help" />

    <div className="py-0">
      <SwissPartners data={data} />
      <CollaborationBanner />
      <UniqueSellingPropositions />
    </div>
    <LawyerCTABanner />
  </>
));

export const pageQuery = graphql`
  query {
    kellerhalsCarrard: imageSharp(fluid: { originalName: { regex: "/kellerhals-carrard.png/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
    smartup: imageSharp(fluid: { originalName: { regex: "/smartuplaw.png/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
    lexr: imageSharp(fluid: { originalName: { regex: "/lexr.png/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
    wengerVieli: imageSharp(fluid: { originalName: { regex: "/wenger-vieli.png/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
