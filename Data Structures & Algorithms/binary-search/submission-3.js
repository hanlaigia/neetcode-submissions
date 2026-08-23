class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let r=nums.length-1;
        let l=0;
        while (l<=r){
            let i=Math.floor((r+l)/2)
            if (nums[i]<target){
                l=i+1;
            } else if (nums[i]>target){
                r=i-1;
            } else{
                return i;
            }
        }
        return -1;
    }
}
