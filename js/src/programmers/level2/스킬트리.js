function solution(skill, skill_trees) {
    const skillArr = skill.split('');
    let result = 0;

    for(let i=0; i<skill_trees.length; i++) {
        const treeArr = skill_trees[i].split('');
        const arr = new Array(skillArr.length).fill(0);
        let pos = true;

        for(let j=0;j<treeArr.length;j++) {
            const idx = skillArr.findIndex(e => treeArr[j] === e);

            if(idx !== -1) {
                if(idx === 0) {
                    arr[idx] = 1;
                } else {
                    if(arr[idx-1] === 0) {
                       pos = false;
                    } else {
                        arr[idx] = 1;
                    }
                }
            }
        }

        if(pos) result++;
    }

    return result;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);