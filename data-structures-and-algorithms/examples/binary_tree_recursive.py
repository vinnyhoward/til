class Node(object):  # Similar to Linked List initial set-up
    def __init__(self, value):  # Constructor
        self.value = value
        self.left = None
        self.right = None


class BinaryTree(object):
    def __init__(self, root):
        self.root = Node(root)

    def print_tree(self, traversal_type):
        if traversal_type == "preorder":
            return self.preorder_print(tree.root, "")  # init
        elif traversal_type == "inorder":
            return self.in_order_print(tree.root, "")  # init
        elif traversal_type == "postorder":
            return self.post_order_print(tree.root, "")  # init
        else:
            print("Traversal type " + str(traversal_type) + "not valid")
            return False

    def preorder_print(self, start, traversal):
        # Root --> Left --> Right
        if start:
            traversal += (str(start.value) + "--")
            traversal = self.preorder_print(start.left, traversal)
            traversal = self.preorder_print(start.right, traversal)
        return traversal

    def in_order_print(self, start, traversal):
        # Very Left --> Root --> Very Right
        if start:
            traversal = self.in_order_print(start.left, traversal)
            traversal += (str(start.value) + '--')
            traversal = self.in_order_print(start.right, traversal)
        return traversal

    def post_order_print(self, start, traversal):
        # Very Left --> Very Right --> Root
        if start:
            traversal = self.post_order_print(start.left, traversal)
            traversal = self.post_order_print(start.right, traversal)
            traversal += (str(start.value) + '--')
        return traversal


"""Try doing Post-Order tomorrow"""

# Visualization of Current Tree
# Pre-Order Output: 1--2--4--9--10--11--5--3--6--7--8--
# In-Order Output: 11--10--9--4--2--5--1--6--3--7--8--
# Pre-Order Output: 11--10--9--4--5--2--6--8--7--3--1--
#             1
#          /    \
#         2      3
#       /  |   /  |
#      4   5  6   7
#     /            \
#     9              8
#   /
#  10
#  /
# 11

# Tree Set-Up

# Another implementation
# class BinaryTree(object):
#     def __init__(self, root):
#         self.root = Node(root)

#     def search(self, find_val):
#         return self.preorder_search(tree.root, find_val)

#     def print_tree(self):
#         return self.preorder_print(tree.root, "")[:-1]

#     def preorder_search(self, start, find_val):
#         if start:
#             if start.value == find_val:
#                 return True
#             else:
#                 return self.preorder_search(start.left, find_val) or self.preorder_search(start.right, find_val)
#         return False

#     def preorder_print(self, start, traversal):
#         if start:
#             traversal += (str(start.value) + "-")
#             traversal = self.preorder_print(start.left, traversal)
#             traversal = self.preorder_print(start.right, traversal)
#         return traversal


tree = BinaryTree(1)

tree.root.left = Node(2)
tree.root.right = Node(3)
tree.root.left.left = Node(4)
tree.root.left.right = Node(5)
tree.root.right.left = Node(6)
tree.root.right.right = Node(7)
tree.root.right.right.right = Node(8)
tree.root.left.left.left = Node(9)
tree.root.left.left.left.left = Node(10)
tree.root.left.left.left.left.left = Node(11)

# print(tree.print_tree("preorder"))
# print(tree.print_tree("inorder"))
print(tree.print_tree("postorder"))
