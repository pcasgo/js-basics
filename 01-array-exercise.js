(() => {

    /**
    *   Return the second largest number in the array.
    *   @param {Number[]} nums - An array of numbers.
    *   @return {Number} The second largest number in the array.
    **/
    function getSecondLargest(nums) {
        
        const size = nums.length;

        if(size < 1){
            return "Invalid input";
        }
        
        nums.sort((a, b) => a - b);
        
        for(let i = size - 1; i >= 0; i--){
            if (nums[i] != nums[size - 1]) {
                return nums[i]
            }
        }
    }

    // Generate array with 10 random numbers
    const array = Array(10) // array size is 10
		              .fill()
		              .map(() => Math.floor(50 * Math.random()));

    getSecondLargest(arr);
})()
