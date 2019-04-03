# Intro to JSON Web Token (JWT)

## What is JSON Web Token?

JSON Web Token (JWT) is an open standard ```RFC 7519``` that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.

## Most common ways JSON Web Tokens are used:

- Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access all area of the app or web app that are permitted with that token. Single Sign On is a feature that is widely used with JWT nowadays because of its small overhead and its ability to be used across different domains with ease.