# Lists (Similar to ```Arrays``` in Javascript)

Lists ordered sequences that can hold a variety of object types

They use [] brackets and commas to separate objects in the list
```[1,2,3,4,5]```

Lists support indexing and slicing. Lists can be nested and also have a variety of useful methods that can be called off of them.
Examples of its flexibility:
```
my_list = [1,2,3]

my_list["string", 100, 23.2]
```
You can also use ```index slicing``` to remove and add objects
```
my_list = ['one','two','three']

my_list[0]

Output: 'one'

my_list[1:]

Output: ['two','three']

```
Unlike ```Strings```, Strings within a ```list``` are ```mutable``` 
```
my_list = ['one','two','three']

my_list[0] = 'HELLO PEOPLE'

Output: ['HELLO PEOPLE','two','three']
```
You can add or ```append()``` objects to the end of the list. (The variable will be changed)
```
my_list = ['one','two','three']

my_list.append(3000)

Output: ['one','two','three', 3000]
```
You can remove or ```pop()``` objects from the end of the list by default, or remove it by index ```pop(3)``` (The variable will be changed and will return object)
```
my_list = ['one','two','three', 3000]

my_list.pop()

Output: 3000
```
You can also sort ```lists```
```
new_list = ['a','b','c','d']

num_list = [1,2,3,4]

new_list.sort()

Output: Although it doesn't return anything, it will have sorted the lost by alphabetical order

num_list.reverse()

Output: Although it doesn't return anything, it will have sorted the list by reverse order
```