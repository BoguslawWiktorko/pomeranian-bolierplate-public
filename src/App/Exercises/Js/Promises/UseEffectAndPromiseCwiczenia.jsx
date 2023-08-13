//Zadanie 1
//    dodajmy diva na napis
//    napisać useEffect'a oraz stworzyć Promise'a, który zostanie spełniony i wyświetli nam "I'm resolved :)"
//    użyjmy useState do zapisania odpowiedzi z promisa.

import { useEffect, useState } from 'react';

export const UseEffectAndPromiseCwiczenia = () => {
  function loadUserDetails(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: 1, age: 30, country: 'Poland' });
      }, 4000);
    });
  }
  loadUserDetails().then((response) => {
    console.log(response);
  });

  return <div>Wiadomość</div>;
};
