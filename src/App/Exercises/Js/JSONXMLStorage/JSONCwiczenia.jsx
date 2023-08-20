export const JSONCwiczenia = () => {
  const obj = { name: 'John', surname: 'Doe' };

  const objJSON = JSON.stringify(obj);

  console.log(objJSON);

  const obj2 = JSON.parse(objJSON);
  console.log(obj2);

  const jsonBoolean = 'true';

  console.log(JSON.parse(jsonBoolean));

  return <div>sabdihasu</div>;
};
