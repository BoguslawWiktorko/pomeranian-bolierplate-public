// -----------------------------------------------------------------------------
// COOKIES
// -----------------------------------------------------------------------------

export const CookieStorageCwiczenie = () => {
  const setCookie = () => {
    document.cookie = 'user=John Doe';
  };
  const getCookie = () => {
    const cookies = document.cookie;
  };

  return (
    <div>
      <p>cookies</p>
      <button onClick={setCookie}>Save</button>
      <button onClick={getCookie}>Get</button>
    </div>
  );
};
