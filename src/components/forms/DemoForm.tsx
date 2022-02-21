import React, { useState } from 'react';
import { t } from '@lingui/macro';

import { Button } from '../utils';
import { Input, InvalidFieldHints } from './Fields';
import { handleDemoSubmit, RequesterType, COMPANY, INVESTOR, FORM_STATUSES } from './lib';

const { IDLE, FETCH_ERROR } = FORM_STATUSES;

const REQUESTER_TYPES = [COMPANY, INVESTOR];

export const DemoForm = ({
  buttonText,
  contentfulRequesterType,
}: {
  buttonText: string;
  contentfulRequesterType: RequesterType | void;
}) => {
  const [requesterType, setRequesterType] = useState(contentfulRequesterType || COMPANY);
  const [email, setEmail] = useState('');
  const [size, setSize] = useState('');
  const [formStatus, setFormStatus] = useState(IDLE);
  const inputClassName = 'height-42px bg-transparent text-dark border border-light-energetic-blue';
  const values = { requesterType, email, size };
  const isButtonDisabled = formStatus !== IDLE && formStatus !== FETCH_ERROR;

  return (
    <div className="card-border-style bg-white mx-md-7 mx-xl-6">
      <form
        method="post"
        onSubmit={(event) => handleDemoSubmit({ values, event, setFormStatus })}
        noValidate
        className="w-100 p-2 px-md-4 py-md-4 p-lg-6 d-flex flex-column align-items-center justify-content-between"
      >
        {!contentfulRequesterType && (
          <div className="d-flex mb-4 w-100">
            <input type="hidden" name="type" />
            {REQUESTER_TYPES.map((type) => (
              <Button
                key={type}
                onClick={() => {
                  setRequesterType(type);
                  setSize('');
                  setFormStatus(IDLE);
                }}
                className={`multi-button border border-light-energetic-blue px-1 py-2 ${
                  type === requesterType ? 'selected' : ''
                }`}
              >
                {type === COMPANY ? t`Company` : t`Investor`}
              </Button>
            ))}
          </div>
        )}
        <Input
          state={email}
          setState={setEmail}
          placeholder={t`Company email`}
          setFormStatus={setFormStatus}
          name="email"
          wrapperClassName="mb-4"
          className={inputClassName}
        />
        <Input
          state={size}
          setState={setSize}
          placeholder={
            requesterType === COMPANY
              ? t`Number of stakeholders / security holders`
              : t`Number of portfolio companies`
          }
          setFormStatus={setFormStatus}
          name="size"
          wrapperClassName="mb-4"
          className={inputClassName}
          type="number"
        />
        <Button
          disabled={isButtonDisabled}
          type="submit"
          energetic
          className="border-0 w-100 mx-1 mt-4 mb-1 align-self-center btn-xl"
        >
          {buttonText}
        </Button>
        <InvalidFieldHints formStatus={formStatus} />
      </form>
    </div>
  );
};
