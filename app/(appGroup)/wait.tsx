export function wait(sec: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("s");
    }, sec * 1000);
  });
}
