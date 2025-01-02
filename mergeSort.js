export function mergeSort(array) {
    if (array.length <= 1) return array;
 
    // Divide arrays in half 
    const mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
 
    // split until length is one, array is sorted  
    const leftNums = mergeSort(left);
    const rightNums = mergeSort(right);
 
    // merge two halfs
    return merge(leftNums, rightNums);
    // merge([3], [2])
    // merge([1, 2, 3, 13], [0, 1, 1, 5, 8])
    // 0, 1, 1, 2, 3, 8, 13
    function merge(left, right) {
     const result = [];
     let i = 0;
     let j = 0;
 
     // compare left and right
     while (i < left.length && j < right.length) {
         // if left is smaller, push left
         if (left[i] < right[j]) {
             result.push(left[i]);
             i++;
         // if right is smaller, push right    
         } else {
             result.push(right[j]);
             j++;
         }
     }
 
     // concatenate left and right to result 
     return result.concat(left.slice(i)).concat(right.slice(j));
    }
 }
