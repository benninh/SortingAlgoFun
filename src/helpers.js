/*
 Input: 
   arr: an array of integers
   first: the first index to be swapped
   second: the second index to be swapped
  Output: an array with value and 'first' and 'second' indices swapped
  Example:
    swap([1, 2, 3, 4, 5], 0, 4) should return [5, 2, 3, 4, 0] 
*/
function swap(arr, first, second) {
  // FIX ME
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
  
  return arr;
}

/*
  Input: two arrays of integers sorted in ascending order
  Output: A single sorted array with all the elements of both arrays
  Example: 
    merge([1, 3, 5], [2, 4, 6]) should return [1, 2, 3, 4, 5, 6]
*/
function merge(left, right) {
  // FIX ME
  var result = [];
  var leftIndex = 0;
  var rightIndex = 0;

  // left value < right value
  while (leftIndex < left.length || rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex] || rightIndex === right.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else if (left[leftIndex] > right[rightIndex] || leftIndex === left.length) {
      // left value > right value
      result.push(right[rightIndex]);
      rightIndex++;
    } 
  }

  return result;
}

/* 
  Input: 
    arr: an array of integers
    left: the starting index of the array to partition
    right: the ending index of the array to partition
  Output: The index of a pivot element. All elements to the left of the pivot are less than 
  or equal to it, and all elements to the right of it are greater than it 
  Example:
    var input = [4, 7, 6, 5, 3, 2, 1]
    partition(input), assuming we're using the first element as the pivot,
    should manipulate the input array to be [3, 1, 2, 4, 5, 6, 7]
    This will return 3, because all values left of index 3 are less than or equal to 4,
    and all values to the right of it are greater than 4        
*/
function partition(arr, left, right) {
  // FIX ME
  var pivotIndex = left;
  var pivotVal = arr[pivotIndex];

  while (left < right) {
    // continue moving until value at left index > pivot value
    while(arr[left] <= pivotVal) {
      // increment left counter;
      left++;
    }

    // if left > right, exit the loop
    if (left > right) {
      break;
    }

    while(arr[right] > pivotVal) {
      // decrement right counter
      right--;
    }
    
    if (left < right) {
      swap(arr, left, right);
    } else {
      break;
    }

  }
  
  swap(arr, right, pivotIndex);

  return right;
}

module.exports = {
  merge: merge,
  partition: partition,
  swap: swap
};
