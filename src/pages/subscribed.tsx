import React from 'react';

import { PageHeader, Button } from '../components';
import { helpUrl } from '../helpers';

const Subscribed = () => (
  <>
    <PageHeader title="Subscription confirmed" />
    <div className="container">
      <div className="bg-gray h-full p-5 imprint">
        <div className="row justify-content-center">
          <div className="d-flex flex-column align-items-center text-center w-md-75">
            <p>
              Thank you for your interest in Ledgy{' '}
              <span role="img" aria-label="rocket">
                🚀
              </span>
            </p>
            <p>
              We might from time to time send you newsletters or other types of marketing material.
              <br />
              You can at any time opt out of these communications by clicking{' '}
              <a href="http://hs-6881367.s.hubspotemail.net/hs/manage-preferences/unsubscribe-simple?via_redirect=true">
                {' '}
                here
              </a>
            </p>
            <div className="d-flex flex-column flex-md-row mt-2">
              <Button outline inverted className="btn-xl mr-md-1 mb-3 mb-md-0" href={helpUrl}>
                Continue exploring
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Subscribed;
