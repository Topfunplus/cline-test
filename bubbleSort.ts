/**
 * Bubble Sort Implementation in TypeScript
 * 
 * Time Complexity:
 * - Best Case: O(n) when the array is already sorted
 * - Average Case: O(n²)
 * - Worst Case: O(n²)
 * 
 * Space Complexity: O(1) - In-place sorting algorithm
 */

/**
 * Sorts an array of numbers using the bubble sort algorithm
 * @param arr The array to be sorted
 * @returns The sorted array
 */
function bubbleSort<T>(arr: T[]): T[] {
  // Create a copy of the array to avoid modifying the original
  const result = [...arr];
  const length = result.length;
  
  // Flag to optimize for already sorted arrays
  let swapped: boolean;
  
  // Outer loop - each pass places one more element in its final position
  for (let i = 0; i < length; i++) {
    swapped = false;
    
    // Inner loop - compare adjacent elements and swap if they're in the wrong order
    for (let j = 0; j < length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // Swap elements
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }
    
    // If no swapping occurred in this pass, the array is already sorted
    if (!swapped) {
      break;
    }
  }
  
  return result;
}

// Example usage
function demonstrateBubbleSort() {
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  console.log("Original array:", unsortedArray);
  
  const sortedArray = bubbleSort(unsortedArray);
  console.log("Sorted array:", sortedArray);
  
  // Test with strings
  const unsortedStrings = ["banana", "apple", "pear", "orange", "kiwi"];
  console.log("Original strings:", unsortedStrings);
  
  const sortedStrings = bubbleSort(unsortedStrings);
  console.log("Sorted strings:", sortedStrings);
}

// Run the demonstration
demonstrateBubbleSort();

export { bubbleSort };
