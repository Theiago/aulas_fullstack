import React, {useState, useEffect} from 'react';

export default function ApiLocal(){
    const [pessoas, setUsers] = useState([]);

    const getApiData = async () => {

        const response = await fetch(
            `http://localhost:5000/api/tasks/`
        ).then((response) => response.json());

        console.log(response)

        setUsers(response);
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div className="app">
            {pessoas && pessoas.map((pessoa) => (
                <div className="item-container">
                Nome: {pessoas.nome} - Idade: {pessoa.idade}
                </div>
            ))}
        </div>
    )

}