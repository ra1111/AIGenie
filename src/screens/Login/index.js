import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // your Firebase project configuration
};

firebase.initializeApp(firebaseConfig);
import React, { useState } from 'react';


  // ...

const PhoneLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in
        console.log('User logged in');
      } else {
        // User is signed out
        console.log('User logged out');
      }
    });
  }, []);
  const sendOTP = () => {
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(confirmationResult => {
        setIsCodeSent(true);
        // Save the confirmation result to be used later for verification
        window.confirmationResult = confirmationResult;
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      {!isCodeSent ? (
        <form>
          <label>
            Phone Number:
            <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
          </label>
          <button type="button" onClick={sendOTP}>
            Send OTP
          </button>
        </form>
      ) : (
        <form>
          <label>
            Verification Code:
            <input type="text" value={verificationCode} onChange={e => setVerificationCode(e.target.value)} />
          </label>
          <button type="button" onClick={verifyCode}>
            Verify Code
          </button>
        </form>
      )}
    </div>
  );
};
const verifyCode = () => {
    window.confirmationResult
      .confirm(verificationCode)
      .then(result => {
        // User is signed in
        console.log('User logged in');
      })
      .catch(error => {
        console.error(error);
      });
  };
export default PhoneLogin;

