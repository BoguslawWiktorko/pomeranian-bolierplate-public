//Zadanie 1
//    dodajmy diva na napis
//    napisać useEffect'a oraz stworzyć Promise'a, który zostanie spełniony i wyświetli nam "I'm resolved :)"
//    użyjmy useState do zapisania odpowiedzi z promisa.

import { useEffect, useState } from 'react';

export const PromisesCwiczenie1 = () => {
  const [messege, setMessege] = useState('*');

  const messegeToShow = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("I'm resolved hehe :)"), 2000);
    });
  };
  useEffect(() => {
    messegeToShow().then((res) => setMessege(res));
  }, []);
  console.log(messege);
  let promiseResolve = Promise.resolve();
  console.log(promiseResolve);

  return <div>{messege}</div>;
};
