const jwt = require('jsonwebtoken');

// Secret key for signing the token (use a strong secret key in production)
const secretKey = 'aweHJWMKJkcgKSFgkhgtreZHGkgdzfkgkSDGsdgwgrgsrgtukuttyrrewwtegjwjhjq';

// Define payload data
const payload = {
  id: 'user_id',
  name: 'Test User',
  email: 'testuser@example.com',
  role: 'customer',
};

// Define token options
// const options = {
//   expiresIn: '1h', // Token expiration time
// };

// Generate the token
const token = jwt.sign(payload, secretKey);

// Print the token
console.log('Generated JWT Token:', token);
