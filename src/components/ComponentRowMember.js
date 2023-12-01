const ComponentRowMember = ({ donnees, onEdit, onDelete }) => {
    const handleEdit = () => {
      // Logique pour la modification (utilisez onEdit)
      onEdit(donnees);
    };
  
    const handleDelete = () => {
      // Logique pour la suppression (utilisez onDelete)
      onDelete(donnees);
    }; 

    return (
        <tr>
          <td>{donnees.name}</td>
          <td>{donnees.firstName}</td>
          <td>{donnees.email}</td>
          <td>{donnees.phone}</td>
          <td>{donnees.adress}</td>
          <td>
            <button onClick={handleEdit}>Modifier</button>
            <button onClick={handleDelete}>Supprimer</button>
          </td>
        </tr>
      );
    };

    export default ComponentRowMember;