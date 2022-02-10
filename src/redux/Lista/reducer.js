const INSERIR = "inserir";

const stateInicial = { contemItem: false, itens: [] };

const listaReducer = (state = stateInicial, action) => {
    switch (action.type) {
        case INSERIR:
            return {
                contemItem: true,
                itens: [...state.itens, action.payload],
            };
        default:
            return state;
    }
};

export default listaReducer;
