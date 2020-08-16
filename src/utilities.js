export function getAllStorageData() {
    const values = [];
    const keys = Object.keys(localStorage).filter((key) => key !== 'loglevel:webpack-dev-server');
    let i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values.map((item) => JSON.parse(item));
}