export default function selecionarAssento({ target }, { name, isAvailable }, selecionados, setSelecionados) {
        
    if (!selecionados.includes(name) && isAvailable) {

        target.classList.add(`selecionado`);
        setSelecionados([...selecionados, name]);

    } else if(selecionados.includes(name)) {

        target.classList.remove(`selecionado`);
        const index = selecionados.indexOf(name);
        let array = selecionados;
        array.splice(index, 1);
        setSelecionados(array);

    }
}