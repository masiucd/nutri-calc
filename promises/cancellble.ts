const delay = (delay: number, value: any) => {
  let id: number | null
  let reject: null | ((reason?: any) => void) = null
  const promise = new Promise((resolve, reject) => {
    reject = reject
    id = setTimeout(resolve, delay, value)
  })
  return {
    promise,
    cancel() {
      if (!id) {
        clearTimeout(id as number)
        id = null
        if (typeof reject === "function") {
          reject()
        }
        reject = null
      }
    },
  }
}

const delayed = delay(2000, "Legia")

delayed.promise
  .then(res => console.log(res))
  .catch(err => {
    console.error(err)
  })

delayed.cancel()
