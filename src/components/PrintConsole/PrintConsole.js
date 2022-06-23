function PrintConsole(obj) {
  return (
    <div>
      <div>
        <label>First Name: {obj.fname}</label>
      </div>
      <div>
        <label>Last Name: {obj.lastname}</label>
      </div>
      <div>
        <label>Email: {obj.email}</label>
      </div>
    </div>
  );
}
export default PrintConsole;
