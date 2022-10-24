import { dadJoke } from "./joker";

export async function testDadJoke() {
  const joke = await dadJoke();
  const testPasses = Boolean(joke);
  console.log(joke);
  console.log('Dad Joke Test:', testPasses ? 'Passed' : 'FAILED');
  return testPasses;
}

testDadJoke();