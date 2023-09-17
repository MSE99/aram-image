
export const replaceEvery = (str, n, rep, idx = 0, counter = 1) => {
    if (idx >= str.length) {
        return ''
    }

    const char = str.at(idx)

    if (counter === n) {
        return rep + replaceEvery(str, n, rep, idx + 1, 1)
    }

    return char + replaceEvery(str, n, rep, idx + 1, counter + 1)
}
