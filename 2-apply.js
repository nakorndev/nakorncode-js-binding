function getSum(a, b) {
    return `${this.label}: ${a + b}`
}

console.log(getSum(4, 2))

// .call(this, ...args)
// .apply(this, [...args])
console.log(getSum.call({ label: 'ผลลัพธ์' }, 4, 2))
console.log(getSum.apply({ label: 'ผลลัพธ์' }, [4, 2]))

const nums = [2, 4, 1, 5, 3]
console.log(Math.min(...nums))
console.log(Math.min.apply({}, nums))
