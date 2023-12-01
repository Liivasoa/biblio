import FormMembre from "./FormMembre";
const ListMember =({dataForms}) => {

    const handleEdit=(donnees)=>{
        console.log('Modifier',donnees);
    };

    const handleDelete=(donnees)=>{

    };
    return(
        <div>
            <h1 className="titre1">Liste des membres</h1>
            <table className="tableForm">  
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>Adresse</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataForms.map((donnees, index) => (
                        <tr key={index}>
                            <td>{donnees.name}</td>
                            <td>{donnees.firstName}</td>
                            <td>{donnees.email}</td>
                            <td>{donnees.phone}</td>
                            <td>{donnees.adress}</td>
                            <td><button onClick={handleEdit}>Edit</button><button onClick={handleDelete}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
</div>
    );
}

export default ListMember;
