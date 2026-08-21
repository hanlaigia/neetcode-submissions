class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length===0){
            return 0;
        }
        nums.sort((a,b)=> a-b);
        let maxLength=1;
        let currentLength=1;
        for (let i=0; i<nums.length-1;i++){
            if (nums[i+1]-nums[i]===1){
                currentLength++;
            } else if (nums[i + 1] === nums[i]) {
                continue;
            } else {
                currentLength = 1;
            }
            maxLength = Math.max(maxLength, currentLength);
        }
        return maxLength;
    }
}
