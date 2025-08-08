const starPattern1 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      row += '*'
    }
    console.log(row)
  }
}

starPattern1(5)

console.log('-------------------------------------------')

const starPattern2 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < i + 1; j++) {
      row += '*'
    }
    console.log(row)
  }
}

starPattern2(5)

console.log('-------------------------------------------')

const starPattern3 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < i + 1; j++) {
      row += `${j + 1}`
    }
    console.log(row)
  }
}

starPattern3(5)

console.log('-------------------------------------------')

const starPattern4 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < i + 1; j++) {
      row += `${i + 1}`
    }
    console.log(row)
  }
}

starPattern4(5)

console.log('-------------------------------------------')

const starPattern5 = (n) => {
  for (let i = n; i > 0; i--) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row += `${j + 1}`
    }
    console.log(row)
  }
}

starPattern5(5)

const starPattern5Alt = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n - i; j++) {
      row += `${j + 1}`
    }
    console.log(row)
  }
}
starPattern5Alt(5)

console.log('-------------------------------------------')

const starPattern6 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n - i; j++) {
      row += `*`
    }
    console.log(row)
  }
}
starPattern6(5)

console.log('-------------------------------------------')

const starPattern7 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = n; j > 0; j--) {
      if (j <= i + 1) {
        row += `*`
      } else {
        row += ' '
      }
    }
    console.log(row)
  }
}
starPattern7(5)

const starPattern7Alt = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n - (i + 1); j++) {
      row += ' '
    }
    for (let k = 0; k < i + 1; k++) {
      row += '*'
    }
    console.log(row)
  }
}
starPattern7Alt(5)

console.log('-------------------------------------------')

const starPattern8 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < i + 1; j++) {
      if (j % 2 === 0) {
        row += '1'
      } else {
        row += '0'
      }
    }
    console.log(row)
  }
}
starPattern8(6)

const starPattern8Alt = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    let toggle = 1
    for (let j = 0; j < i + 1; j++) {
      row = row + toggle;
      if (toggle === 1) {
        toggle = 0
      } else {
        toggle = 1
      }
    }
    console.log(row)
  }
}
starPattern8Alt(6)

console.log('-------------------------------------------')

const starPattern9 = (n) => {
  let toggle = 1
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < i + 1; j++) {
      row = row + toggle;
      if (toggle === 1) {
        toggle = 0
      } else {
        toggle = 1
      }
    }
    console.log(row)
  }
}
starPattern9(6)