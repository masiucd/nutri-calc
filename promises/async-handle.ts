interface AsyncHandle<T> {
  ok: boolean
  data?: T
  err?: Error
}

export const asyncHandele = <T>(p: Promise<T>): Promise<AsyncHandle<T>> =>
  p.then(data => ({ ok: true, data })).catch(err => Promise.resolve({ ok: false, err }))

const getUsers = async () => {
  const { ok, data, err } = await asyncHandele(fetch("https://jsonplaceholder.typicode.com/users"))
  if (ok) {
    return data?.json()
  } else {
    return err
  }
}

// const users = getUsers()
//   .then(r => console.log(r))
//   .catch(err => {
//     console.log(err)
//   })

type To<T, E = Error> = Promise<{ ok: boolean; data?: T; err?: E }>
const to = <T, E = Error>(p: Promise<T>, errorBox?: Record<string, boolean | string>): To<T, E> => {
  return p
    .then<{ ok: boolean; data: T }>(data => ({ ok: true, data }))
    .catch<{ ok: boolean; err: E }>(err => {
      if (errorBox) {
        Object.assign(err, errorBox)
      }
      return Promise.resolve({ ok: false, err })
    })
}

export function to2<T, U = Error>(
  promise: Promise<T>,
  errorExt?: object,
): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        Object.assign(err, errorExt)
      }

      return [err, undefined]
    })
}

// type Cb = (msg: string) => { msg: string; data?: Record<string, any> }
type Cb = (msg: string) => void
const getUsers2 = async (cb: Cb) => {
  let err, user
  ;[err, user] = await to2(fetch("https://jsonplaceholder.typicode.com/users"))
  if (!user || err) {
    return cb("noo user")
  }
  return user.json()
}

const partial = (msg: string) => console.log(msg)
getUsers2(partial).then(r => console.log(r))
