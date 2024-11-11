
  export function createUsers(from = 0, to = 10000) {
    return Array.from({ length: to - from }, (_, i) => ({
      id: i + from,
      name: `User ${i + from}`,
    }));
  }