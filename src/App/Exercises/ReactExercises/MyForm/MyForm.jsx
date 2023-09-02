import './styles.css';
import { useForm } from 'react-hook-form';

export const MyForm = () => {
  const handleSubmit = () => {
    console.log('submit');
  };
  return (
    <div>
      <h2>Formularz do cwiczen</h2>
      <input type="text" />
      <br />
      <label htmlFor="ssaki"></label>
      <select name="ssaki" id="ssaki">
        <option value="kot">kot</option>
        <option value="pies">pies</option>
      </select>

      <br />
      <label htmlFor="agree"></label>
      <input type="checkbox" name="agree" id="agree" />
      <br />
      <label htmlFor="perosnNo">wybierz liczbe osób</label>
      <input type="radio" name="perosnNo" id="pe1" value="1" />
      <span>jedna</span>
      <input type="radio" name="perosnNo" id="pe2" value="2" />
      <span>dwie</span>
      <form onSubmit={handleSubmit()}>
        <button type="submit">Wyslij dane</button>
      </form>
    </div>
  );
};
