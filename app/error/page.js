// app/error/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';

const ErrorPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Authentication Error</h1>
      {error && <p><strong>Error:</strong> {decodeURIComponent(error)}</p>}
      {errorDescription && <p><strong>Description:</strong> {decodeURIComponent(errorDescription)}</p>}
    </div>
  );
};

export default ErrorPage;
