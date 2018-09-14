class node:
    def __init__(self, value=None):
        self.value = value
        self.left_child = None
        self.right_child = None

# "Delete" in-progress


class binary_search_tree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if self.root == None:
            self.root = node(value)
        else:
            self._insert(value, self.root)

    def _insert(self, value, cur_node):
        if value < cur_node.value:
            if cur_node.left_child == None:
                cur_node.left_child = node(value)
            else:
                self._insert(value, cur_node.left_child)
        elif value > cur_node.value:
            if cur_node.right_child == None:
                cur_node.right_child = node(value)
            else:
                self._insert(value, cur_node.right_child)
        else:
            print('Value Currently In Tree')

    def print_tree(self):
        if self.root != None:
            self._print_tree(self.root)

    def _print_tree(self, cur_node):
        if cur_node != None:
            self._print_tree(cur_node.left_child)
            print(str(cur_node.value))
            self._print_tree(cur_node.right_child)

    def height(self):
        if self.root != None:
            return self._height(self.root, 0)
        else:
            return 0

    def _height(self, cur_node, cur_height):
        if cur_node == None:
            return cur_height

        left_height = self._height(cur_node.left_child, cur_height + 1)
        right_height = self._height(cur_node.right_child, cur_height + 1)

        return max(left_height, right_height)

    def search(self, value):
        if self.root != None:
            return self._search(value, self.root)
        else:
            return False

    def _search(self, value, cur_node):
        # print('_search:', value)
        # print('_cur_node:', cur_node.value)

        if value == cur_node.value:
            return True
        elif value < cur_node.value and cur_node.left_child != None:
            return self._search(value, cur_node.left_child)
        elif value > cur_node.value and cur_node.right_child != None:
            return self._search(value, cur_node.right_child)

        return False


def fill_tree(tree, num_elems=100, max_int=1000):
    from random import randint
    for _ in range(num_elems):
        cur_elem = randint(0, max_int)
        tree.insert(cur_elem)
    return tree


tree = binary_search_tree()
# tree = fill_tree(tree)

tree.insert(5)
tree.insert(3)
tree.insert(2)
tree.insert(10)
tree.insert(11)
tree.insert(2)
tree.insert(0)
tree.insert(4)
tree.insert(7)

tree.print_tree()
print("Tree Height: ", str(tree.height()))

print('Search:', tree.search(10))
print('Fail Search:', tree.search(30))

# class BST(object):
#     def __init__(self, root):
#         self.root = Node(root)

#     def insert(self, new_val):
#         self.insert_helper(self.root, new_val)

#     def insert_helper(self, current, new_val):
#         if current.value < new_val:
#             if current.right:
#                 self.insert_helper(current.right, new_val)
#             else:
#                 current.right = Node(new_val)
#         else:
#             if current.left:
#                 self.insert_helper(current.left, new_val)
#             else:
#                 current.left = Node(new_val)

#     def search(self, find_val):
#         return self.search_helper(self.root, find_val)

#     def search_helper(self, current, find_val):
#         if current:
#             if current.value == find_val:
#                 return True
#             elif current.value < find_val:
#                 return self.search_helper(current.right, find_val)
#             else:
#                 return self.search_helper(current.left, find_val)
#         return False
