import { DropdownButton,Dropdown  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './listseg.css'



function listseg() {
    return (
        <div className="listseg">
            <div className="App">
      <header>
      <h1 className="titre">Liste Segments</h1>
        {/*Link campgne-segment-group*/}
        <div className="lien">
        <a href="#" >    CAMPAGNE</a>
        <a href="#" >    SEGMENT</a>
        <a href="#" >    GROUPE</a>
        </div>
        <div className="créer">
        <p><a href="#" >nouveau segment</a></p>
        <p><a href="#" >nouvelle segmentation</a></p>
        <p><a href="#" >Analyser les segments</a></p>
        <p><a href="#" >Recherche des nouveaux segments</a></p>
        </div>
        
        <h2>Segment</h2>
        <h4>Liste générale</h4><h1>Liste Segment</h1>infos générales + infos globales
      </header>

      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Nom</th>
            <th scope="col">id_segmentation</th>
            <th scope="col">id_segment</th>
            <th scope="col">Date_début/ Date_fin</th>
            <th scope="col">Caractéristiques</th>
            <th scope="col">Type</th>
            <th scope="col">Thème segment</th>
            <th scope="col">Description segment</th>
            <th scope="col">Nbres likes</th>
            <th scope="col">Nbre comments</th>
            <th scope="col">Nbre partages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Segment xx</td>
            <td>......</td>
            <td></td>
          </tr>
          <tr>
            <td>Segment xx</td>
            <td>......</td>
            <td></td>
          </tr>
          <tr>
            <td >Segment xx</td>
            <td>......</td>
            <td></td>
          </tr>
          <tr>
            <td >Segment xx</td>
            <td>......</td>
            <td></td>
          </tr>
          <tr>
            <td >Segment xx</td>
            <td>......</td>
            <td></td>
          </tr>
          <tr>
            <td >Segment xx</td>
            <td>......</td>
            <td></td>
          </tr>
          <tr>
            <td >Segment xx</td>
            <td>......</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      {/*visualisation campagne*/}
      
      <div class="container">
      <div class="row align-items-start">
      <h1>visualisation individuelle segment</h1>
      <h3>Nom Segment</h3>
      <small><a href="#" >Lien fihe Segment</a> Date début Date fin</small>

        <div class="col">
          <p>id-segmentation</p>
          <p>bilan</p>
          <p>Description segment</p>
          <p>id_segment</p>
          <p>Nbre likes</p>
          <p>Nbre partages</p>
          <p>Nbre commentaires</p>
          
        </div>
        <div class="col">
        
        </div>

        <div class='col'>
          <h5>DATA Reporting Campagne</h5>
          <p>Nbre-likes</p>
          <p>Nbre commentaires</p>
          <p>Nbre partages</p>
          <p>Portée</p>
          < p>score</p>
        </div>

        <div class='col'>
          <p><button class="btn btn-primary" type="button">Aller sur fiche</button></p>
          <p><button class="btn btn-primary" type="button">Modifier Fiche</button></p>
          <p><button class="btn btn-primary" type="button">Manuellement</button></p>
          <p><button class="btn btn-primary" type="button">Mettre à jour Automatique</button></p>
                
        </div>
        </div>
      </div>

      <h4>Campagne de Segment</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Post en attente</th>
            <th scope="col">Engagement</th>
            <th scope="col">User</th>
            <th scope="col">Segment</th>
            <th scope="col">Groupes</th>
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
);
}

export default listseg;

            