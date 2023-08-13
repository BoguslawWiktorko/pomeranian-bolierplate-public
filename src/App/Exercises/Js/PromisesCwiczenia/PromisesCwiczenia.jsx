import { useEffect, useState } from 'react';
import { PromisesCwiczenie1 } from './PromisesCwiczenie1';
import { PromisesCallBackHell } from './PromisesCallBackHell';

export const PromisesCwiczenia = () => {
  function loadUserDetails(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: userId, age: 30, country: 'Poland' });
      }, 2000);
    });
  }
  function loadUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ id: 1, name: 'John Doe' }), 2000);
    });
  }

  const loadAllUserData = (userId, callback) => {
    callback();
  };

  return (
    <div>
      <PromisesCwiczenie1 />
      <PromisesCallBackHell />
    </div>
  );
};
