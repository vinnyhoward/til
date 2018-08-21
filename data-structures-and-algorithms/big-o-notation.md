# Big O Notation O(n)

```N``` represents the length of the input to your function.

## O(n) Basics


### Basic Pseudo Code Example with O(n)
```
function decode(input):
  create output sting <= O(1)
  for each letter in input  <= O(2n)
    get new_letter from letter location in cipher
    add new_letter to output 
  return output <= O(1)
```

The pseudo code example above would be ```O(2n + 2)```
the amount of time needed to run this function depends on this line of code ``` get new_letter from letter location in cipher``` where ```cipher ``` would be anywhere from just 10 to 10 million list checks.


### Simple Test Cases
  |               |               | 
  | ------------- |:------------- |
  | n = 10        | n = 1,000,000 | 
  | 29(10) + 2    | 29(10<sup>6</sup>) + 2  | 
  | 292           | 29,000,000    | 


## Worst Case and Approximation 
Always include worst case and average case approximation when writing your function. 
Approximations with the pseudo code above for say an input of say, the alphabet is: 

Average Case:
```O((13 + 3)n + 2) -> O(16n + 2)```

Worst Case:
```O((26 + 3)n + 2) -> O(29n + 2)```

### Intermediate Pseudo Code Example with O(n)
input manatees: a list of "manatees", where one manatee is represented by a dictionary
a single manatee has properties like "name", "age", et cetera
n = the number of elements in "manatees"
m = the number of properties per "manatee" (i.e. the number of keys in a manatee dictionary)


```
def example1(manatees):
    for manatee in manatees:
        print manatee['name']

def example2(manatees):
    print manatees[0]['name']
    print manatees[0]['age']

def example3(manatees):
    for manatee in manatees:
        for manatee_property in manatee:
            print manatee_property, ": ", manatee[manatee_property]

def example4(manatees):
    oldest_manatee = "No manatees here!"
    for manatee1 in manatees:
        for manatee2 in manatees:
            if manatee1['age'] < manatee2['age']:
                oldest_manatee = manatee2['name']
            else:
                oldest_manatee = manatee1['name']
    print oldest_manatee
```