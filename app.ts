interface O {
  id: number;
  name: string;
}

const uniqueList = <T, K extends keyof T>(list: T[], key: K) => {
  const result: T[] = [];
  const cache: Record<any, any> = {};

  console.log(key);
  for (const [index, value] of list.entries()) {
    // @ts-ignore
    if (!cache[value[key]]) {
      // @ts-ignore
      cache[value[key]] = true;
      result.push(value);
    }
  }
  console.log(cache);
  return result;
};

const xs: O[] = [
  { id: 1, name: "🎅🏻" },
  { id: 2, name: "🌞" },
  { id: 2, name: "🐨" },
  { id: 1, name: "🐰" },
  { id: 2, name: "🙈" },
  { id: 3, name: "🎅♥️" },
  { id: 1, name: "⏰" },
];

// console.log(uniqueList(xs, "id"));

const fooo = <T, K extends keyof T>(object: T, key: K) => {
  return object[key];
};

console.log(fooo(xs[0], "name"));
