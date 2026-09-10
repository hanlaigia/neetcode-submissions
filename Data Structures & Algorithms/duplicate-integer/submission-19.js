class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let i=0;
        nums.sort((a,b)=> a-b);
        while(i<nums.length){
            let j=i+1;
            if (nums[i]===nums[j]){
                return true;
            }
            i++;
        }
        return false;
    }
}
