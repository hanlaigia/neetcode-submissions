class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let countZero=0;
        let res=[];
        let value=1;
        let index=-1;
        for (let i=0; i<nums.length;i++){
            if (nums[i]===0){
                countZero++;
                index=i;
            } else {
                value=value*nums[i];
            }
        }
        if (countZero===1){
            for (let i=0; i<nums.length;i++){
                if (i===index){
                    res.push(value);
                } else{
                    res.push(0);
                }
            }
        } else if (countZero>=2 ){
            for (let i=0; i<nums.length;i++){
                res.push(0);
            }
        } else if (countZero===0){
            for (let i=0; i<nums.length;i++){
                res.push(value/nums[i]);
            }
        }
        return res;
    }
}
