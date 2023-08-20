import { useState } from 'react';

export const TryCatchPrototype = () => {
  // try {
  //   ValidityState();
  // } catch (err) {
  //   console.log('wystapil blad');
  //   console.log(err.stack);
  //   console.log(err.messege);
  //   console.log(err.name);
  //   console.log(err);
  // }

  class CustomError extends Error {
    constructor(messege) {
      super(messege);
      this.message = 'ale jest błąd';
    }
  }

  function divide(a, b) {
    if (b === 0) {
      throw new CustomError('nie dziel przez zero ');
    }

    return a / b;
  }

  try {
    divide(1, 0);
  } catch (err) {
    console.log(err);
  }

  return <div>{}</div>;
};
