class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const count= new Map()
        for(const num of nums){

            if(count.has(num)){
                return true;
            }else{
                count.set(num,1)
            }
        }
        
        return false;
    }
}
