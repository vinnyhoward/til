# Express

## These are topics that are touched upon in the UtahNodeJS meet up
Some topics will be revisited and reviewed in my TIL repo so you may see some of the same information provided

Express is the most popular ```Node``` web framework and is the most used framework for RESTful APIs.

- Write handlers for requests with different HTTP verbs at different URL paths (routes).

- Integrate with "view" rendering engines in order to generate responses by inserting data into templates.

- Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response.

- Add additional request processing "middleware" at any point within the request handling pipeline.

While ```Express``` itself is fairly minimalistic, the community has created a plethora of compatible middleware packages that compliment and address almost any web development problem that is out there. There are libraries out there that can help with topics such as ```cookies```, ```sessions```, ```authentication```, ```URL parameters```, ```POST data```, ```security headers```, and that is just the tip of the ice berg. You can find a list of middleware packages maintained by the express team on their website.

## Opinionated vs Un-opinionated

Opinionated software and frameworks are those with opinions about how to handle a particular task the "right" way. They often support rapid development in a particular domain or environment. The positive outlook on this is that the "right" way is usually well-understood and documented, the negative side is that there is not alot of flexibility at solving certain issues outside their main domain.

However, un-opinionated frameworks and software are more open and free, giving you a wide range of possibilities on how to solve a particular problem, ExpressJS is in this category. With a downside of more maintenance how a chance of certain methods may lack documentation are not understood very well. 