import React from "react";
import { useSelector } from "react-redux";
import "./Lista.css";

const Lista = (props) => {
    const contemItens = useSelector((state) => state.listaReducer.contemItem);
    const itens = useSelector((state) => state.listaReducer.itens);

    return (
        <div className="lista">
            <div className="lista__titulo">Lista</div>
            {itens.map((it, ix) => {
                return (
                    <div className="lista__item" key={ix}>
                        <p>E-mail: {it.campo1}</p>
                        <p>Número: {it.campo2}</p>
                        <p>Data: {it.campo3.split("-").reverse().join("/")}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Lista;
