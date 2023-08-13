import { useEffect, useState } from 'react';
import './styles.css';
// import { useEffect, useState } from 'react';

export const JsSlidingBanner = () => {
  const [bannerText, setBannerText] = useState('');

  const text = 'I love JS';
  const textArray = [...text];

  function slider() {
    let id = setInterval(() => {
      const popArray = textArray.pop();
      textArray.unshift(popArray).toString();
    }, 2000);
    setBannerText(textArray);
    return () => clearInterval(id);
  }

  useEffect(slider, []);

  return (
    <div>
      <h1>Slider</h1>

      <div>{bannerText}</div>
    </div>
  );
};
