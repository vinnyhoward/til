# Cloud CDN

The Google Cloud Content Delivery Network uses Google's global edge network to serve content closer to users, which accelerates your websites and applications.

The Cloud CDN content delivery network works with `HTTP(S) load balancing` to deliver content to your users. The HTTP(S) load balancer provides the frontend IP addresses and ports that receive requests and the backends that respond to the requests.

Cloud CDN content can be sourced from various types of backends:

-   Instance Groups

-   Zonal network endpoint groups (NEGs)

-   Internet network endpoint groups (NEGs)

-   Buckets in Google Cloud Storage

In Cloud CDN, these backends are also called origin servers. The following figure illustrates how responses from origin servers running on VM instances flow through an HTTP(S) load balancer before being delivered by Cloud CDN.

![load balancing](https://cloud.google.com/cdn/images/cdn-response-flow.svg?authuser=1 'Load Balancing')

# How Cloud CDN works

When a user requests content from an HTTP(S) load balancer, the request arrives at a `Google Front End` (GFE), which is located at the edge of Google's network as close as possible to the user.

If the load balancer's URL map routes traffic to a backend that has Cloud CDN configured, the GFE uses Cloud CDN.

## Cache hit

If the GFE looks in the Cloud CDN cache and finds a cached response to the user's request, the GFE sends the cached response to the user. This is called a cache hit. When a cache hit occurs, the GFE looks up the content by its cache key and responds directly to the user, shortening the round trip time and saving the origin server from having to process the request.

## Cache miss

The first time that a piece of content is requested, the GFE determines that it can't fulfill the request from the cache. This is called a cache miss.

When a cache miss occurs, The GFE might attempt to get the content from a nearby cache. If the nearby cache has the content, the GFE sends the content to the first cache via cache-to-cache fill. Otherwise, the GFE forwards the request to the HTTP(S) load balancer.

The load balancer then forwards the request to one of your backends. This backend is the origin server for the content.

When the cache receives the content, the GFE forwards the content to the user.

## Caching content

If the origin server's response to this request is cacheable, Cloud CDN stores the response in the Cloud CDN cache for future requests.

Data transfer from a cache to a client is called `cache egress`. Data transfer to a cache is called `cache fill`. As illustrated in the following figure, cache fill can originate from another Cloud CDN cache or from the origin server.

## Cache fill vs cache egress

On cache hits, you pay for `cache egress` bandwidth. On cache misses—including misses that resulted in cache-to-cache fill—you additionally pay for cache fill bandwidth. That means, all else being equal, cache hits cost less than cache misses. For detailed pricing information, refer to the pricing page.
