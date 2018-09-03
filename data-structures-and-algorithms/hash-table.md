# Hash Table

a ```hash table``` (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A ```hash table``` uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

The hash function will assign each value a key that corresponds to a unique bucket. However most hash functions are imperfect and will have collisions where the hash function generates the same index for more than one key. 

In well-dimensioned ```hash tables```, the average cost for each look-up is independent of the number of elements store in the table. Many ```hash table``` designs also allow arbitrary insertions and deletions of key value pairs, at constant average cost per operation.

On average, hash tables turn out to be more efficient than ```search trees``` or any other type of ```table``` look-up structure. Because of this reason, they are widely used for computer software, such as associative arrays, ```database indexing```, ```caches```, and ```sets```.

## Hashing

```Hashing``` is to distribute the entries ```key/values pairs``` across an array of ```buckets```. Given a key, the algorithm will compute an index that suggests where the entry can be found.

### Choosing a hashing function

Good hash functions and their implementation algorithms are essential for good hash table performance. But may be difficult to achieve. 

Basic requirements of ```hash tables``` should provide a ```uniform distribution``` of hash values. 