import "./InputSeleccionar.css";
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
    <>
      <p3 className="inputSelector_Titulo">{titulo}</p3>
      <select className="inputSelector_Selector">
        <option className="input-option ">{opcion1}</option>
        <option className="input-option">{opcion2}</option>
        <option className="input-option">{opcion3}</option>
        <option className="input-option">{opcion4}</option>
        <option className="input-option">{opcion5}</option>
        <option className="input-option">{opcion6}</option>
        <option className="input-option">{opcion7}</option>
        <option className="input-option">{opcion8}</option>
        <option className="input-option">{opcion9}</option>
        <option className="input-option">{opcion10}</option>
      </select>
    </>
  );
};
