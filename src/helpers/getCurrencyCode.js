export default function (data) {
    if (typeof data === 'object') {
        return data.map((item) => item.substring(0, 3));
    }
    else if (typeof data === 'string') {
        return data.substring(0, 3);
    }
}