export default function selecionarAssento({ target }, { id, name, isAvailable },
    selecionados, setSelecionados, idSelecionados, setIdSelecionados) {

    if (!selecionados.includes(name) && isAvailable) {
        target.classList.add(`selecionado`);
        setSelecionados([...selecionados, name]);
        setIdSelecionados([...idSelecionados, id]);

    } else if (selecionados.includes(name)) {

        target.classList.remove(`selecionado`);
        const index = selecionados.indexOf(name);
        let arrayName = selecionados;
        let arrayId = idSelecionados;
        arrayName.splice(index, 1);
        arrayId.splice(index, 1);
        setSelecionados(arrayName);
        setIdSelecionados(arrayId);

    }
}