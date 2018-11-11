# Mutations

In REST, and request might end up causing some side-effects on the server, but by convention it is suggested that it is bad practice to use a ```GET``` request to modify data. GraphQl is similar, technically any ```query``` could be used to cause a data write. Its useful to establish a best practice that any data that is manipulated should be sent explicitly using a ```mutation```.

Similar to ```queries```, if the ```mutation``` field return an object type, you can ask for nested fields. This can be used for fetching new state of an object after a new update.

mutation function ```CreateReviewForEpisode```:
```
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}
```

````
{
  "ep": "JEDI",
  "review": {
    "stars": 5,
    "commentary": "This is a great movie!"
  }
}
````

Data Outputted:

```
{
  "data": {
    "createReview": {
      "stars": 5,
      "commentary": "This is a great movie!"
    }
  }
}
```