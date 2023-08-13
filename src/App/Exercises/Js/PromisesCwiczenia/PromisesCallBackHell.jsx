export const PromisesCallBackHell = () => {
  // CALLBACK HEL???
  function a(callback) {
    setTimeout(() => {
      console.log('a');
      callback();
    }, 2000);
  }
  function b(callback) {
    setTimeout(() => {
      console.log('b');
      callback();
    }, 1000);
  }

  function c() {
    setTimeout(() => {
      console.log('c');
    }, 500);
  }

  a(() => {
    b(() => {
      c();
    });
  });

  return <div></div>;
};
