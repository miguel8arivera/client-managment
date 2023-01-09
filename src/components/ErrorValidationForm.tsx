import { FC } from 'react';

type ErrorValidationFormProps = {
  children: React.ReactNode;
};

const ErrorValidationForm: FC<ErrorValidationFormProps> = function ({
  children,
}) {
  return (
    <div className="text-center bg-red-600 text-white font-semibold p-4 uppercase m-4 rounded-md">
      {children}
    </div>
  );
};

export default ErrorValidationForm;
