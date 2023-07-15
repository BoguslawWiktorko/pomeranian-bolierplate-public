import './styles.css';

import snowWolf from '../../../Images/snow-wolf.png';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export const Backgrounds = () => {
  return (
    <article>
      <h1>Tła</h1>

      <section>
        <div>
          image added using <code>img</code> element
        </div>

        <img src={snowWolf} alt="snow wolf" />

        <h2>CSS - Background property</h2>

        <ul className="backgrounds">
          <li className="background-color">background-color</li>

          <li>
            background-image <strong>*no alt attribute in div</strong>
            <div className="background-image-url" />
          </li>

          <li>
            background-position
            <div className="background-image-position" />
          </li>

          <li>
            background-repeat
            <div className="background-image-repeat" />
          </li>

          <li>
            background-size <div className="background-image-size" />
          </li>
        </ul>
      </section>

      <section>
        <h2>Sources:</h2>

        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background">
          CSS - background
        </a>
      </section>
      <section>
        <RoundImage size="100px" />
        <RoundImage size="150px" />
        <RoundImage size="200px" />
      </section>
    </article>
  );
};
