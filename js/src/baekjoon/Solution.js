let accountList = [];

const initAccount = async () => {
    accountList = await fetchList();
    const activeUserMap = await fetchActiveUsers(accountList);
    console.log(activeUserMap)
}

initAccount();

function fetchActiveUsers(users) {
    const accountActiveList = [];
    const iterator = users[Symbol.iterator]();
    iterator.next();

    return new Promise((resolve) => {
        users.forEach(async (sn, isn) => {
            const isActive = await fetchOnline(sn);
            accountActiveList[isn] = {isActive, sn};
            const next = iterator.next();
            if(next.done) resolve(accountActiveList);
        });
    })
}


function fetchList() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['a', 'b', 'c']);
        }, 1000)
    })
}

function fetchOnline(id) {
    return new Promise((resolve) => {
        let time;
        switch (id) {
            case 'a':
                time = 2000;
                break;
            case 'b':
                time = 500;
                break;
            case 'c':
                time = 1000;
                break;
        }


        setTimeout(() => {
            resolve(true);
        }, time)
    })
}
