function receivesAFunction(cbfunction) {
    cbfunction();
}

function returnsANamedFunction() {
    return function namedFunction() {

    }
}

function returnsAnAnonymousFunction() {
    return function () {

    }
}