function solution(nums) {
    const set = new Set();
    nums.map((data) => {
        set.add(data);
    });
    
    if(nums.length/2 < set.size) {
        return nums.length/2;
    } else {
        return set.size;
    }
}