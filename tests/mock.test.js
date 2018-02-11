import test from 'ava';

// always succeeds
const pass = (t) => {t.pass();};
pass.title = "Always succeeds";

// asyncronously succeed
const async = (t) => {
  return Promise.resolve('bar').then((val) => {
    t.is(val,'bar');
  });
};
async.title = "Async succeeds";
test([pass,async]);
