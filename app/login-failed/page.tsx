// app/login-failed/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginFailedPage = () => {
  const [seconds, setSeconds] = useState(5);
  const router = useRouter();

  useEffect(() => {
    // Start countdown
    const intervalId = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          router.push('/'); // Redirect to home page
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [router]);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#721c24',
      margin: 0
    }}>
      <div style={{
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#fff',
        color: '#721c24',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '300px'
      }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Error</h1>
        <p style={{ fontSize: '1rem', marginBottom: '20px' }}>
          Redirecting you to the login page in {seconds} seconds...
        </p>
        <p style={{ fontSize: '0.9rem' }}>
          If you are not redirected, <a href="/" onClick={(e) => { e.preventDefault(); router.push('/'); }} style={{ color: '#004085', textDecoration: 'underline' }}>click here to login</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginFailedPage;
