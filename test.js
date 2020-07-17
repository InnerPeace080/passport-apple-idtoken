const appleSignin = require('apple-signin');
const jwt = require('jsonwebtoken');

const idToken = 'eyJraWQiOiJlWGF1bm1MIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLm1ha2lwb3MuTUtQU21hcnRIb21lIiwiZXhwIjoxNTk0OTU4OTI4LCJpYXQiOjE1OTQ5NTgzMjgsInN1YiI6IjAwMDI2OS5iODc2NzZhYmYwNzE0MzUyOTc2ZWRkYjU4ZWRiZDdjNC4wMjQ1IiwiY19oYXNoIjoiRHZTYmctOTQ5bi1aTFRyX2JaWG9yZyIsImVtYWlsIjoiNW1tbjlyanFqa0Bwcml2YXRlcmVsYXkuYXBwbGVpZC5jb20iLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJpc19wcml2YXRlX2VtYWlsIjoidHJ1ZSIsImF1dGhfdGltZSI6MTU5NDk1ODMyOCwibm9uY2Vfc3VwcG9ydGVkIjp0cnVlfQ.Je3a2mjH9iDmac-AF9ZNCvDWAUBMtQ7Ag0DQtNSJhUeFRimmeVu7VZM-Z6Z8FerO8Rb4HFmE4D7AxFy_eVRtt6fVDCZlEdCkIxPnxo62DHlAgMEZ1h2NC1AqovN4M9oWx64Wwaz3bN42-0U857LRRgjLYBD3s3aDKw5bfF0OOQ5EKyNBcRRuyBU3noQBevl0TeFFaH6OR12IicLYWHFTndFchhNOj9Vq2NG6ausLvPVzn1tcNMB-P5yq_vJzgI1VuYwlxEwFDlN5MlD7vBJC8YyvcG-tFDQqPbbrlIKUjs5IxmtwlurXDrD8BthFRr6OXDfjJKDC-f4rI5NZ5Ew1WA';

appleSignin.verifyIdToken(idToken, 'com.makipos.MKPSmartHome')
  .then((jwtClaims) => {

    console.log('jwtClaims', jwtClaims);
    return;
  })
  .catch((error) => {
    console.log(error);
  });

const unverifiedPayload = jwt.decode(idToken, { complete: true });

console.log('unverifiedPayload', unverifiedPayload);
