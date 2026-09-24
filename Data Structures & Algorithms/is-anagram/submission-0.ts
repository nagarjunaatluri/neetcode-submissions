class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const count = new Map();
        if(s.length == 0 || t.length == 0 || s.length != t.length){
            return false;
        }
        for (let ch of s) {

            count.set(ch,(count.get(ch) || 0) + 1);
        }
         for(let ch1 of t){
            const currentCount = count.get(ch1);

         if (currentCount === undefined || currentCount === 0) {
                return false;
            }

            count.set(ch1, currentCount - 1);
         }
         return true;
         
        
    }
}
