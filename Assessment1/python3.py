n = 4
def display_rotated(matrix):
    for i in range(n):
        a = []
        for j in range(n):
            a.append(matrix[j][i])
        a.reverse()
        print(a)


matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 16]]
display_rotated(matrix)