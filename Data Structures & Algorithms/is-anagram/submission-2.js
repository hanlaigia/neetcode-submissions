class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s1=s.split('').sort().join('');
        const t1=t.split('').sort().join('');
        if (s1===t1){
            return true;
        } else{
            return false;
        }
    }
}
