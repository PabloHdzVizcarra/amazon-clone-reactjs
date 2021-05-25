export function generatorID() {
  let one = Math.random().toString().slice(2, 6);
  let two = Math.random().toString().slice(2, 6);
  let three = Math.random().toString().slice(2, 6);
  let four = Math.random().toString().slice(2, 6);
  let array = [one, two, three, four];

  return array.join("-")
}
