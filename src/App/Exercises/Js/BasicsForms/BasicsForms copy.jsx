import './styles.css';
import React from 'react';

export const BasicsForms = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Wybierz produkt</h3>
        <label htmlFor="product">
          <select id="product" name="product">
            {' '}
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </label>
        <h3>Wybierz formę płatności</h3>

        <label htmlFor="blik">Blik</label>
        <input type="radio" name="blik" id="blik" />
        <label htmlFor="paypal">Paypal</label>
        <input type="radio" name="paypal" id="paypal" />
        <label htmlFor="przelew">Przelew</label>
        <input type="radio" name="przelew" id="przelew" />

        <h3>Opcje dodatkowe do zamówienia</h3>
        <label htmlFor="ustawienia">ustawienie środowiska</label>
        <input type="checkbox" name="ustawienia" id="ustawienia" />
        <label htmlFor="github">intro do Git Hub</label>
        <input type="checkbox" name="github" id="github" />
        <label htmlFor="materialy">materiały dodatkowe</label>
        <input type="checkbox" name="materialy" id="materialy" />

        <h2>DANE DO REALIZACJI ZAMÓWIENIA</h2>
        <h3>Imie i nazwisko*</h3>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="wpisz swoje imię i nazwisko"
        />

        <h3>Pseudonim</h3>
        <label htmlFor="nick"></label>
        <input type="text" name="nick" id="nick" placeholder="Wojtek" />
        <p className="name-warning">
          Taka nazwa użytkownika już istnieje. Spróbuj innej.
        </p>

        <h3>Adres do wysylki</h3>
        <label htmlFor="address"></label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="adres, na który mamy wysłać zamówienie"
        />

        <h3>E-mail</h3>
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="jan.kowalski@gmail.com"
        />

        <h3>Numer kontaktowy*</h3>
        <label htmlFor="phone"></label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="+48 888 888 888"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />

        <h3>Dodatkowe uwagi do zamówienia</h3>
        <label htmlFor="additional"></label>
        <textarea
          type="textarea"
          name="additional"
          id="additional"
          rows="4"
          cols="50"
          placeholder="Jeśli masz jakieś uwagi, wpisze je tutaj..."
        ></textarea>
        <h2>ZAKŁADANIE KONTA</h2>
        <h3>Chcę założyć konto razem z zamówieniem</h3>

        <input type="checkbox" name="potwierdzenie" id="potwierdzenie" />
        <label htmlFor="potwierdzenie">zakładam konto</label>
        <h3>Moje haslo</h3>
        <label htmlFor="password"></label>
        <input type="password" name="password" id="password" />
        <h3>Potwierdz haslo</h3>
        <label htmlFor="password2"></label>
        <input type="password" name="password2" id="password2" />

        <h2>ZGODY I NEWSLETTER</h2>
        <h3>Realizując zamówienie, akceptujesz regulamin naszego sklepu</h3>
        <input type="checkbox" name="accept" id="accept" />
        <label htmlFor="accept">akceptuję regulamin*</label>

        <p>*pole obowiazkowe</p>

        <h3>Dołącz do naszego newslettera z promocjami dla naszych klientów</h3>
        <input type="checkbox" name="newsletter" id="newsletter" />
        <label htmlFor="newsletter">zapisuję się na listę mailingową</label>

        <hr />
        <input
          className="btn-submit"
          type="submit"
          value="Składam zamowienie"
        />
      </form>
    </div>
  );
};
