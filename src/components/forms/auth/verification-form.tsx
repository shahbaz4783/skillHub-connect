'use client';

import { useSearchParams } from 'next/navigation';
import AuthHeader from '../../ui/AuthHeader';
import { BeatLoader } from 'react-spinners';
import { useCallback, useEffect, useState } from 'react';
import FormError from '../../feedback/FormError';
import FormSuccess from '../../feedback/FormSuccess';
import { newVerification } from '@/actions/auth.action';

const VerificationForm = () => {
  const [formMessage, setFormMessage] = useState<{
    error: string | undefined;
    success: string | undefined;
  }>({
    error: '',
    success: '',
  });

  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (!token) {
      setFormMessage({ error: 'Token is missing', success: '' });
      return null;
    }
    newVerification(token)
      .then((data) => {
        setFormMessage({ error: data.error, success: data.success });
      })
      .catch((error) => {
        setFormMessage({ error: error, success: '' });
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <>
      <AuthHeader
        heading="Verifying Account"
        subHeading="Confirming your verification"
        label=""
        linkTo=""
      />
      <div>{!formMessage.error && !formMessage.success && <BeatLoader />}</div>
      <div>
        <FormError message={formMessage.error} />
        <FormSuccess message={formMessage.success} />
      </div>
    </>
  );
};

export default VerificationForm;
