import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Formulario.css";

const Formulario = (props) => {
    const funcDispatch = useDispatch();

    const [campo1, setCampo1] = useState("");
    const [campo2, setCampo2] = useState("");
    const [campo3, setCampo3] = useState("");
    const [emailEhValido, setEmailEhValido] = useState(true);
    const [senhaEhValida, setSenhaEhValida] = useState(true);

    const [campos, setCampos] = useState([]);

    //Todos useEffect() são disparados no 1º render

    // useEffect(() => {
    //     console.log("1ª renderização => componentDidMount()");
    // }, []);

    // useEffect(() => {
    //     console.log("Todas renderizações");
    // });

    // useEffect(() => {
    //     console.log("Quando a idade muda => componentWillUpdate()");
    //     return () => {
    //         console.log("Desmontou");
    //         setTimeout(() => {
    //             console.log("1 seg. depois");
    //         }, 1000);
    //     };
    // }, [campo1, campo2]);

    const mudaCampo1 = (event) => {
        setCampo1(event.target.value);
        setEmailEhValido(event.target.value.includes("@"));
        setCampos((prevState) => ({
            ...prevState,
            campo1: event.target.value,
        }));
    };

    const mudaCampo2 = (event) => {
        setCampo2(event.target.value);
        setSenhaEhValida(+event.target.value > 0);
        setCampos((prevState) => ({
            ...prevState,
            campo2: event.target.value,
        }));
    };

    const mudaCampo3 = (event) => {
        setCampo3(event.target.value);
        setCampos((prevState) => ({
            ...prevState,
            campo3: event.target.value,
        }));
    };

    const validaEmailHandler = (event) => {
        if (campo1.includes("@")) {
            setEmailEhValido(true);
        } else {
            setEmailEhValido(false);
        }
    };

    const validaSenhaHandler = (event) => {
        if (+campo2 > 0) {
            setSenhaEhValida(true);
        } else {
            setSenhaEhValida(false);
        }
    };

    const enviar = () => {
        console.log(campos);
        setCampo1("");
        setCampo2("");
        setCampo3("");
        funcDispatch({ type: "inserir", payload: campos });
    };

    return (
        <div className="formulario">
            <div
                className={`formulario__campo ${
                    emailEhValido === false ? "invalido" : ""
                }`}
            >
                <label htmlFor="campo1">E-mail</label>
                <input
                    id="campo1"
                    type="text"
                    value={campo1}
                    onChange={mudaCampo1}
                    onBlur={validaEmailHandler}
                ></input>
            </div>

            <div
                className={`formulario__campo ${
                    senhaEhValida === false ? "invalido" : ""
                }`}
            >
                <label htmlFor="campo2">Número</label>
                <input
                    id="campo2"
                    type="number"
                    value={campo2}
                    onChange={mudaCampo2}
                    onBlur={validaSenhaHandler}
                ></input>
            </div>

            <div className="formulario__campo">
                <label htmlFor="campo3">Data</label>
                <input
                    id="campo3"
                    type="date"
                    max="2022-12-31"
                    min="2021-01-31"
                    value={campo3}
                    onChange={mudaCampo3}
                ></input>
            </div>
            <div className="btns">
                <button
                    onClick={props.onCancelar}
                    className="btn-cancelar"
                    type="button"
                >
                    Cancelar
                </button>
                <button
                    className="btn-adicionar"
                    type="submit"
                    onClick={enviar}
                >
                    Adicionar
                </button>
            </div>
        </div>
    );
};

export default Formulario;
