const appleSignin = require('apple-signin');

const idToken = 'eyJraWQiOiI4NkQ4OEtmIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLm1ha2lwb3MuTUtQU21hcnRIb21lIiwiZXhwIjoxNTk0NjE4NDI0LCJpYXQiOjE1OTQ2MTc4MjQsInN1YiI6IjAwMDU1Ni5hYjNiY2Q3YzczZGY0M2EzOWExNGM3NTA2ZjcwMGM2OS4wNzUyIiwiY19oYXNoIjoic1R2U0JPNzdqTmx2X09EWlMzamdhUSIsImVtYWlsIjoidnVxdWFuYm5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOiJ0cnVlIiwiYXV0aF90aW1lIjoxNTk0NjE3ODI0LCJub25jZV9zdXBwb3J0ZWQiOnRydWV9.au3wKnoj6Zki-Zfg_e7Wwkyb00lKsuJ1jXWuR4R_IEqLfWYc8zl6Ro1qlwbKqKUWR61gAoW-5ZLzTX8OykiLhlUSkti3n4y2zmQLT7LRkJM4gJt-DM1qeEzfCYRJMhkfHrek7QP-FZYk61_8ZjoaoaM1J_Eoyx7glZQ-s7sRpxIKZgqLEGT9Yv6cJQnzIXUlTJLlyGGvPkw2aqyAs7UnJhMQMmGtCGeQiyCEc-v6RDUwhX1wNwdQsfmaowlng-2re6JcoixlkoxbJN1ZYiI02gJM2_bvA1mJgt0qzQjZIQP11ocOVzcyIBrZpx4pxUKgtEaR3DLfk-_9iHJN7uMgBg';

appleSignin.verifyIdToken(idToken, 'com.makipos.MKPSmartHome')
  .then((jwtClaims) => {

    console.log('jwtClaims', jwtClaims);
    return;
  })
  .catch((error) => {
    console.log(error);
  });
