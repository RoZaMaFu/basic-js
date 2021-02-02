const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length
    },
    addLink(value) {
        this.chain.push(value.toString())
        return this
    },
    removeLink(position) {
        this.chain.splice(position - 1, 1)
        return this
    },
    reverseChain() {
        this.chain.reverse()
        return this
    },
    finishChain() {
        return this.chain.map((component, i) => {
            return i === this.chain.length - 1 ? `( ${component} )` : `( ${component} )~~`
        }).join('')
    }
};

module.exports = chainMaker;
