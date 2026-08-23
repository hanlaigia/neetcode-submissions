class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n<3) return n;
        let first=1;
        let second=2;
        // let third=0;
        for (let i=3; i<=n;i++){
            let third= first+second;
            first = second;
            second = third;
        }
        return second;
    }
}
