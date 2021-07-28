import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './listpostmere.css';

function listpostmere() {
    return (
        <div className="listpostmere">
            
        <header className="App-headerlpm">
        <h1 className="titre">Post mère</h1>
        {/*Link campgne-segment-group*/}
        <div className="lien">
        <a href="#" >    CAMPAGNE</a>
        <a href="#" >    SEGMENT</a>
        <a href="#" >    GROUPE</a>
        </div>
        <div className="créer">
        <p><a href="#" >Nouveau Post mère</a></p>
        <p><a href="#" >Analyser </a></p>
        <p><a href="#" >Rechercher des nouveaux posts</a></p>
        <p><a href="#" >FILTRER</a></p>
        <p><a href="#" >LISTER</a></p>
        </div>
      
        <div className="titres">
        <h2>Liste des posts mère</h2>
        <h4>Liste générale</h4><h1>Liste Campagne</h1>infos générales + infos globales</div>
      </header>

      <div className="tableaulpm">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">id_Post</th>
            <th scope="col">id_campagne</th>
            <th scope="col">Légende</th>
            <th scope="col">url_post</th>
            <th scope="col">portée</th>
            <th scope="col">Hashtag</th>
            <th scope="col">intéraction</th>
            <th scope="col">Titre</th>
            <th scope="col">Type_media</th>
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
      </div>

      {/*visualisation Post mère*/}
      
      <div class="container">
      <div class="row align-items-start">
      <h1>Visualisation post mère</h1>
      <h3>Nom du Post mère</h3>
      <small><a href="#" >Lien Post</a></small>

        <div class="col">
          <p>id du post</p>
          <p>Type_media</p>
          <p>un_post</p>
          <p>id_campagne</p>
          <p>Hashtag</p>
          <p>portée</p>
          <p>légende</p>
          
        </div>
        <div class="col">
          <h3>Nom du Post mère</h3>
          <p>clics sur publication</p>
          <p>Nbre-likes</p>
          <p>Nbre commentaires</p>
          <p>Nbre partages</p>
        </div>


        <div class='col'>
          <p><button class="btn btn-primary" type="button">Aller sur fiche</button></p>
          <p><button class="btn btn-primary" type="button">Modifier Fiche</button></p>
          <p><button class="btn btn-primary" type="button">Manuellement</button></p>
          <p><button class="btn btn-primary" type="button">Mettre à jour Automatique</button></p>
          <small><a href="#" >Recherche post mère ?</a></small>
                
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
        <h4>Post Mère</h4>
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
              <td colspan="2">Larry the Bird</td>
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

export default listpostmere;