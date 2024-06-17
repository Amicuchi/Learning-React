import { useEffect, useState } from "react";
import axios from "axios";

// Hook customizado para fazer requisições GET com axios
function useAxiosGet(url) {

    // Estado para gerenciar a requisição
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    });

    useEffect( () => {
        setRequest({
            loading: true,
            data: null,
            error: false,
        });

        // Faz a requisição GET para a URL fornecida
        axios
            .get(url)
            .then(response => {
                // Atualiza o estado com os dados da resposta
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch( () => {
                // Atualiza o estado em caso de erro
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            });
    }, [url]);  // O efeito é executado novamente se a URL mudar

    return request
}

export default useAxiosGet;