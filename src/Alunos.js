import React, {useState, useEffect} from 'react';

export default function Alunos(){
    const [clientes, setUsers] = useState();

    const getApiData = async() => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        ).then((response) => response.json());

        setUsers(response);
    };

    useEffect(() => {
        getApiData();
      }, []);

    return (
        <div className="app">
            {clientes && clientes.map((cliente) => (
                <div className="item-container">
                Id: {cliente.id} - Title: {cliente.title}
                </div>
            ))}
        </div>
    )

}