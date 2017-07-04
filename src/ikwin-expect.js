export default (test, options) => {
    options = options || {}

    let {
        wait
    } = options

    wait = !isNaN(wait) ? wait : 100

    let tests = (Array.isArray(test) ? test : [test])
        .reduce((tests, test) => {
            let testFunc
            let testPromise;

            switch (typeof test) {
                case 'function':
                    testFunc = test
                    break
                case 'string':
                    testFunc = wrap(test)
                    break
                default:
                    testFunc = wrap('')
            }

            testPromise = new Promise((resolve, reject) => {
                const runTest = () => {
                    if (testFunc()) {
                        clearInterval(i)
                        resolve(test)
                    }
                }

                const i = setInterval(runTest, wait)

                runTest()
            })

            return tests.concat(testPromise)
        }, [])

    return Promise.all(tests)
}

function wrap(test) {
    switch (test.charAt()) {
        case '.':
            return () => document.getElementsByClassName(test.substring(1)).length > 0
        case '#':
            return () => document.getElementById(test.substring(1)) !== null
        default:
            return () => false
    }
}
