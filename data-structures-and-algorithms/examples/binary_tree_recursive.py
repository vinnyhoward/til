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


"""Try doing Post-Order tomorrow"""

# Visualization of Current Tree
# Pre-Order Output: 1--2--4--9--10--11--5--3--6--7--8--
# In-Order Output: 11--10--9--4--2--5--1--6--3--7--8--
#             1
#          /    \
#         2      3
#       /  |   /  |
#      4   5  6   7
#     /            \
#     9              8
#   /  |
#  10
#  /
# 11

# Tree Set-Up


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
print(tree.print_tree("inorder"))
