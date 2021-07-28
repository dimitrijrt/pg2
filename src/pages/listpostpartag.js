
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { DropdownButton,Dropdown  } from 'react-bootstrap';
import './postpartag.css'





function listpostpartag() {
    return (
        <div className="listpostpartag">

            <header className="header-listpostpartag">
                <h1 className="titrepostpartag">Les Posts partagés</h1>
                {/*Link campgne-segment-group*/}
                <div className="lien">
                <a href="#" >    CAMPAGNE</a>
                <a href="#" >    SEGMENT</a>
                <a href="#" >    GROUPE</a>
                </div>
                <div className="créer">
                <p><a href="#" >Nouvelle liste</a></p>
                <p><a href="#" >Analyser </a></p>
                <p><a href="#" >Rechercher des nouvelles listes</a></p>
                <p><a href="#" >FILTRER</a></p>
                <p><a href="#" >LISTER</a></p>
                </div>
            
                <h2>Les posts partagés</h2>
                <h4>Liste générale</h4><h1>Liste des posts paratgés</h1>infos générales + infos globales
            </header>

      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">id_Post</th>
            <th scope="col">id_utilisateur</th>
            <th scope="col">Légende</th>
            <th scope="col">url_post</th>
            <th scope="col">portée</th>
            <th scope="col">Hashtag</th>
            <th scope="col">intéraction</th>
            <th scope="col">Titre</th>
            <th scope="col">Type_media</th>
            <th scope="col">Statut</th>
            <th scope="col">accepte_supprime</th>
            <th scope="col">Message perso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Post xx</td>
            <td>......</td>
            <td></td>
          </tr>
          <tr>
            <td>Post xx</td>
            <td>......</td>
            <td></td>
          </tr>
          <tr>
            <td >Post xx</td>
            <td>......</td>
            <td></td>
          </tr>
          <tr>
            <td >Post xx</td>
            <td>......</td>
            <td></td>
          </tr>
          <tr>
            <td >Post xx</td>
            <td>......</td>
            <td></td>
          </tr>
          <tr>
            <td >Post xx</td>
            <td>......</td>
            <td></td>
          </tr>
          <tr>
            <td >Post xx</td>
            <td>......</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      {/*visualisation Post mère*/}
      
      <div class="container">
      <div class="row align-items-start">
      <h1>Visualisation post partagé</h1>
      <h3>Nom du Post </h3>
      <small><a href="#" >Lien Post</a></small>

        <div class="col">
          <p>id du post</p>
          <p>url_post</p>
          <p>Titre du post</p>
          <p>Hashtag</p>
          <p>légende</p>
          <p>Message perso</p>
          
        </div>
        <div class="col">
          <h3>id_utilisateur</h3>
          <p>id_groupe</p>
          <p>id_campagne</p>
          <p>accepte_supprime</p>
          <p>Statut</p>
        </div>


        <div class='col'>
          <p><button class="btn btn-primary" type="button">Aller sur fiche</button></p>
          <p><button class="btn btn-primary" type="button">Modifier Fiche</button></p>
          <p><button class="btn btn-primary" type="button">Manuellement</button></p>
          <p><button class="btn btn-primary" type="button">Mettre à jour Automatique</button></p>
          <small><a href="#" >Recherche post partagé ?</a></small>
                
        </div>
        </div>
      </div>

     
      <div class="container">
      <div class="row align-items-start">
        <h3>Visualisation Post</h3>   
        <div class="col">
          <div class="card" >
          <div class="card-body">        
            <p class="card-text">Post</p>       
          </div>
         </div>
          <h5>Titre Post / idéation</h5>
          <p>....................</p>
          <p>....................</p>
        </div>


        <div class="col">
        <h4>Campagne et Post partagé</h4>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Post en attente</th>
              <th scope="col">Engagement</th>
              <th scope="col">User</th>    
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3 meilleurs</td>
              <td>....</td>
              <td>....</td>
            </tr>
            <tr>
              <td>3 + mauvaises</td>
              <td>....</td>
              <td>....</td>
            </tr>
            <tr>
              <td colspan="2"></td>
              <td>....</td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
        
      </div>


    </div>

    );
}
export default listpostpartag;