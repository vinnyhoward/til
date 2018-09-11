# CORS

```Cross-Origin Resource Sharing``` or ```CORS``` is a mechanism that allows additional ```HTTP``` headers to grant a browser permission to access resources from a server at an origin different from its own.

An example of a ```Cross-Origin``` request is a web application server from ```http://mydomain.com``` that uses AJAX to make a request to said domain.

For security reasons, browsers restrict ```Cross-Origin``` HTTP requests initiated by Javascript. ```XMLHttpRequest``` and ```fetch``` allow the same-origin policy,
meaning a web application using those APIs can request ```HTTP``` resources from the same origin the application was accessed, unless the response from the other origin includes the correct ```CORS``` headers.

- ```CORS``` behaviour is not an error, its a security mechanism to protect users.

- ```CORS``` is designed to prevent a malicious website that user may unintentionally visit from making a request to a legitimate website to read their personal data or perform actions against their will.