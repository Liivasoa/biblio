import { useState } from "react";
import "../styles/formMembre.css";
import ListMember from "./ListMember";

const FormMembre = () =>{
 
   const [dataForms,setDataForms] = useState([]);
   const [name,setName] = useState('');
   const [firstName,setFirstName] = useState('');
   const [email,setEmail] = useState('');
   const [phone,setPhone] = useState('');
   const [adress,setAdress] = useState('');
  
    const handleSubmit = (event) => {
        event.preventDefault();

         //creer objet pour stocker les champs remplis
        const fieldsFilled = {name,firstName,email,phone,adress};
       
        //Ajouter objet à la liste des données formulaire
        setDataForms([...dataForms,fieldsFilled]);
 

        //Réinitialisé champs des formulaires
        setName('');
        setFirstName('');
        setEmail('');
        setPhone("");
        setAdress('');   
    };

    

    return(
       <div className="bloc-form">

            <form onSubmit={handleSubmit} className="formValidation">
                <h1 className="titre">Ajout d'un membre</h1>
                <label htmlFor="name" className="lab"> Nom : </label>
                <input type="text" id="name" name="name" value ={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Entrez le nom" maxLength={50} required /><br />

                <label htmlFor="firstname" className="lab"> Prénoms : </label>
                <input type="text" id="firstname" name="firstname" value ={firstName} onChange={(e)=>setFirstName(e.target.value)} className="form-control" placeholder="Entrez le prénom" maxLength={50} required /><br />

                <label htmlFor="email" className="lab">Email: </label>
                <input type="email" id="email" name="email" value ={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Entrez email" maxLength={50} required /><br />

                <label htmlFor="phone" className="lab"> Téléphone : </label>
                <input type="tel" id="phone" name="phone" value ={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder="Entrez le numéro" maxLength={50} required /><br />

                <label htmlFor="adress" className="lab"> Adresse : </label>
                <input type="text" id="adress" name="adress" value ={adress} onChange={(e)=>setAdress(e.target.value)} className="form-control" placeholder="Entrez l'adresse" maxLength={50} required /><br />

                <input type="submit" className="btn" value="Ajouter" /><br />


            </form>
            </div>
            
            
    );
};

export default FormMembre;