class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res={};
        for (const str of strs){
            let key = str.split('').sort().join('');
            if(!res[key]){
                res[key]=[];
            }
            res[key].push(str);
        }
        return Object.values(res);
    }
}
