import React, { useState } from "react";
import Formulario from "./Formulario";
import "./CardFormulario.css";

const CardFormulario = (props) => {
    const [digitando, setDigitando] = useState(false);

    const abrirHandler = () => {
        setDigitando(true);
    };

    const fecharHandler = () => {
        setDigitando(false);
    };

    return (
        <div className="card_formulario">
            {!digitando ? (
                <button onClick={abrirHandler}>Adicionar</button>
            ) : (
                <Formulario onCancelar={fecharHandler} />
            )}
        </div>
    );
};

export default CardFormulario;
