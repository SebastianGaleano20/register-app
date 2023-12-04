import "./Form.css";

const Form = () => {
  return (
    <>
      <div className="contenedor">
        <form action="" className="formulario">
          &#11088;&#11088;&#11088;<h1>Hacete socio de la escaloneta </h1>
          &#11088;
          <label className="lab" htmlFor="Nombre">
            &#11088;Nombre:&#11088;
          </label>
          <input
            className="inp"
            type="text"
            id="Nombre"
            name="Nombre"
            placeholder="Ingrese su nombre"
          ></input>
          <br></br>&#11088;
          <label className="lab" htmlFor="Apellido">
            &#11088;Apellido:&#11088;
          </label>
          <input
            className="inp"
            type="text"
            id="Apellido"
            name="Apellido"
            placeholder="Ingrese su apellido"
          ></input>
          <br></br>&#11088;
          <label className="lab" htmlFor="Email">
            &#11088;Email:&#11088;
          </label>
          <input
            className="inp"
            type="email"
            id="Email"
            name="Email"
            placeholder="Ingrese su email"
          ></input>
          <br></br>&#11088;
          <label className="lab" htmlFor="Telefono">
            &#11088;Telefono:&#11088;
          </label>
          <input
            className="inp"
            type="number"
            id="Telefono"
            name="Telefono"
            placeholder="Ingrese su numero de telefono"
          ></input>
          <br></br>&#11088;
          <label className="lab" htmlFor="Contraseña">
            &#11088;Contraseña:&#11088;
          </label>
          <input
            className="inp"
            type="password"
            name="Contraseña"
            id="Contraseña"
            placeholder="Ingrese una contraseña"
          ></input>
          <br></br>&#11088;
          <label className="lab" htmlFor="ConfContraseña">
            &#11088;Confirmar contraseña:&#11088;
          </label>
          <input
            className="inp"
            type="password"
            name="ConfContraseña"
            id="ConfContraseña"
            placeholder="Ingrese nuevamente la contraseña"
          ></input>
            <br></br>
            <label htmlFor=""></label>
            <input className="boton" type="submit" value="Enviar"></input>
        </form>
      </div>
    </>
  );
};

export default Form;
