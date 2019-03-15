function produceDrivingRange(n) {
  return function(from, to) {
    let parsedFrom = parseInt(from, 10)
    let parsedTo = parseInt(to, 10)

    let difference = parsedTo - parsedFrom

    if (n > difference) {
      return `within range by ${n - difference}`
    }
    else {
      return `${difference - n} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function (tip) {
    return tip * tipPercent
  }
}

function createDriver() {
  let driverId = 0
  return class Driver {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
