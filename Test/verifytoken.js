const jwt = require('jsonwebtoken');

// Secret key for verifying the token (should be the same key used for signing)
const secretKey = 'aweHJWMKJkcgKSFgkhgtreZHGkgdzfkgkSDGsdgwgrgsrgtukuttyrrewwtegjwjhjq'; // Make sure this matches your generateToken script

// Replace with the token generated earlier
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJfaWQiLCJuYW1lIjoiVGVzdCBVc2VyIiwiZW1haWwiOiJ0ZXN0dXNlckBleGFtcGxlLmNvbSIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcyMjM5NDU4NX0.huVoihQEgyqmsYctYkvPefFGTJTEs7vbL4qJk_I4UhY';

try {
  console.log('Verifying Token:', token);
  const decoded = jwt.verify(token, secretKey);
  console.log('Decoded Token:', decoded);
} catch (err) {
  console.error('Token verification failed:', err);
}
