export const InputSeleccionar = ({
  titulo,
  opcion1,
  opcion2,
  opcion3,
  opcion4,
  opcion5,
  opcion6,
  opcion7,
  opcion8,
  opcion9,
  opcion10,
}) => {
  return (
    <div>
      <p3 className="titulo">{titulo}</p3>
      <select className="selector">
        <option>{opcion1}</option>
        <option>{opcion2}</option>
        <option>{opcion3}</option>
        <option>{opcion4}</option>
        <option>{opcion5}</option>
        <option>{opcion6}</option>
        <option>{opcion7}</option>
        <option>{opcion8}</option>
        <option>{opcion9}</option>
        <option>{opcion10}</option>
      </select>
    </div>
  );
};
