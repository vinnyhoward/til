# Implement a function recursivly to get the desired
# Fibonacci sequence value.
# Your code should have the same input/output as the
# iterative code in the instructions.


def get_fib(position):
    if position == 0:
        return 0
    if position == 1:
        return 1
    else:
        print('postion - 1: ', position - 1)
        print('postion - 2: ', position - 2)
        print('postion sum: ', position - 1 + position - 2)
        return (get_fib(position - 1) + get_fib(position - 2))



# Test cases
print(get_fib(9))
# print(get_fib(11))
# print(get_fib(0))
