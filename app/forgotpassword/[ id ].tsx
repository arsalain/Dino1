// pages/forgotpassword.js
'use client'
import { useRouter } from 'next/navigation';

const ForgotPassword = () => {
  const router = useRouter();
  // const { id } = router.query;

  // Your forgot password logic here

  return (
    <div>
      <h1>Forgot Password Page</h1>
      <p>ID: </p>
      {/* Add your form and logic for resetting the password */}
    </div>
  );
};

export default ForgotPassword;
