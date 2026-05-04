def rotate(matrix)
    n = matrix.length
    for i in 0..n-1
        for j in i..n-1
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        end
    end
    for i in 0..n-1
        matrix[i].reverse!
    end
    matrix
end

if __FILE__ == $PROGRAM_NAME
    puts rotate([[1,2,3],[4,5,6],[7,8,9]])
    puts rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])
end