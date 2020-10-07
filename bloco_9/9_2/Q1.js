const samplePromise = () => new Promise ((resolve , reject) => {
  const arr = [...Array(10).keys()]

  arr.forEach((e,index) => arr[index] = Math.ceil(Math.random()*51)**2)
  const sumTotal = arr.reduce((soma, actual) => soma + actual)
  if ( sumTotal > 8000) {
    return reject(sumTotal)
  }
  resolve([2,3,5,10].map(element => sumTotal/element))
})
.then(solve => solve)
.catch(solve => solve + ' É mais de 8000')

imprimeSample = async () => {
  const msg = await samplePromise()
  console.log(msg)
}

imprimeSample()