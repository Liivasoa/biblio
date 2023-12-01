import { useState } from "react";
import "../styles/formMembre.css"

const FormBook= () =>{

 
   const [dataForms,setDataForms] = useState([]);
   const [title,setTitle] = useState('');
   const [summary,setSummary] = useState('');
   const [editor,setEditor] = useState('');

  
    const handleSubmit = (event) => {
        event.preventDefault();

         //creer objet pour stocker les champs remplis
        const fieldsFilled = {title,summary,editor};
       
        //Ajouter objet à la liste des données formulaire
        setDataForms([...dataForms,fieldsFilled]);
 

        //Réinitialisé champs des formulaires
        setTitle('');
        setSummary('');
        setEditor('');

    };

    const handleEdit=(donnees)=>{
        console.log('Modifier',donnees);
    };

    const handleDelete=(donnes)=>{

    }

    return(
       <div className="bloc-form">

            <form onSubmit={handleSubmit} className="formValidation">
            
                <h1 className="titre">Ajout d'un livre</h1>
                <label htmlFor="title" className="lab"> Titre: </label>
                <input type="text" id="title" name="title" value ={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" placeholder="Entrez le titre" maxLength={50} required /><br />

                <label htmlFor="summary" className="lab"> Résumé : </label>
                <textarea id="summary" name="summary" value ={summary} onChange={(e)=>setSummary(e.target.value)} rows={4} cols={40} className="form-control" placeholder="Résumé du livre" maxLength={600} required /><br />

                <label htmlFor="editor" className="lab">Editeur: </label>
                <input type="text" id="editor" name="editor" value ={editor} onChange={(e)=>setEditor(e.target.value)} className="form-control" placeholder="Editeur du livre" maxLength={20} required /><br />


                <input type="submit" className="btn" value="Ajouter" /><br />


            </form>

       
            <h1 className="titre1">Liste des livres</h1>
                <table className="tableForm">  

                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Résumé du livre</th>
                            <th>Editeur</th>
                            <th>Action</th>
                         </tr>   
                    </thead>
                    <tbody>
                        {dataForms.map((donnees, index) => (
                            <tr key={index}>
                                <td>{donnees.title}</td>
                                <td>{donnees.summary}</td>
                                <td>{donnees.editor}</td>
                                <td><button onClick={handleEdit}>Edit</button><button onClick={handleDelete}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
    );
};

export default FormBook;