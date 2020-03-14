
// You should implement your task here.

module.exports = function towelSort(matrix, reverse = false) {
    var result = [];
    if (!Array.isArray(matrix))
        return result;
    for (var i = 0; i < matrix.length; i++) {
        var index = reverse
            ? matrix.length - 1 - i
            : i;
        if (Array.isArray(matrix[i])) {            
            var local_result = towelSort(matrix[index], !reverse ^ i % 2 == 0);
            for (var j = 0; j < local_result.length; j++) {
                result.push(local_result[j]);
            }
        }            
        else
            result.push(matrix[index]);
    }
    return result;
}
