
export const replaceEvery = (str, n, rep) => {
    let built = ''
    let counter = 1
    let idx = 0

    // Note: stupid V8 doesn't have a tail recursion optimization :(
    // must (like a caveman) resort to imperative programming T - T
    while (idx < str.length) {
        if (counter === n) {
            built += rep
            counter = 1
        } else {
            built += str[idx]
            counter++
        }

        idx++
    }

    return built
}
