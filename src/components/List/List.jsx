export const List = ({ data }) => {
  return (
    <div className="list-table">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Fecha de nacimiento</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((person) => {
              return (
                <tr key={person.name}>
                  <td>{person.name}</td>
                  <td>{person.tel}</td>
                  <td>{person.date}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No hay datos para mostrar</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
