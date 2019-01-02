# Total amount of points

# Our football team finished the championship. The result of each match look like "x:y". Results of all matches are
# recorded in the array.

# For example: ["3:1", "2:2", "0:1", ...]

# Write a function that takes such list and counts the points of our team in the championship. Rules for counting points
# for each match:

# if x>y - 3 points
# if x<y - 0 point if x=y - 1 point Notes: there are 10 matches in the championship 0 <=x <=4 0 <=y <=4


def points(games):
    score = 0
    for item in games:
        game = item.split(':')

        left = game[0]
        right = game[1]

        if left > right:
            score += 3
        if left == right:
            score += 1

    return score


points(
    ['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
# 30
points(
    ['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4'])
# 10
points(
    ['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4'])
# 0
points(
    ['1:0', '2:0', '3:0', '4:0', '2:1', '1:3', '1:4', '2:3', '2:4', '3:4'])
# 15
points(
    ['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:4'])
# 12
