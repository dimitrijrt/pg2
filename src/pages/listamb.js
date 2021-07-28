
import 'bootstrap/dist/css/bootstrap.min.css'
import './listamb.css';
import { DropdownButton,Dropdown  } from 'react-bootstrap';
import React from 'react';



function listamb() {
    return (
        <div className="listamb">
            <header className="App-headerlistamb">
        <h1 className="titrelistamb"> Ambassadeurs</h1>
        <p>Nbr 4</p>(F : 2  H : 2)
        {/*Link campgne-segment-group*/}
        <div className="lien">
        <a href="#" >    CAMPAGNE</a>
        <a href="#" >    SEGMENT</a>
        <a href="#" >    GROUPE</a>
        </div>
        <div className="créer">
        <p><a href="#" >Ajouter Ambassadeur</a></p>
        <p><a href="#" >Analyser score Ambassadeur</a></p>
        <p><a href="#" >Faire adhérer ambassadeur à liste groupe</a></p>
        <p><a href="#" >Filtrer les campagnes</a></p>
        </div>
        
        <h2>Liste comptes Ambassadeurs</h2>
        <h4>Liste générale</h4><h1>Liste Ambassadeurs</h1>infos générales + infos globales
      </header>

      <table class="table ">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Lien compte FB</th>
            <th scope="col">id</th>
            <th scope="col">Mdp</th>
            <th scope="col">id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Laura lalaChante</td>
            <td>......</td>
            <td></td>
          </tr>
          <tr>
            <td>LalaChante toulouse</td>
            <td>......</td>
            <td></td>
          </tr>
          <tr>
            <td >Aurore</td>
            <td>......</td>
            <td></td>
          </tr>
          
        </tbody>
      </table>

      {/*visualisation campagne*/}
      
      <div class="container">
      <div class="row align-items-start">
      <h1>Visualisation Ambassadeur</h1>
      <h3>Nom Campagne</h3>
      <small><a href="#" >Lien fihe camapagne</a> Date début Date fin</small>

        <div class="col">
          <p>informations personnes</p>
          <p></p>
          <p>Description Profil</p>
          
          
        </div>
        <div class="col">
          <p>Nbre de groupes</p>
          <p>Nbre likes</p>
          <p>Login :....</p>
          <p>mpd....</p>
          <p>id</p>
        </div>
        <div class="col">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Qui ?</th>
                <th scope="col">Date</th>
                <th scope="col">Lien</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Laura lalaChante</td>
                <td>21.04.05</td>
                <td>xxx</td>
              </tr>
              <tr>
                <td>laura lalaChante</td>
                <td>21.04.05</td>
                <td>xxxx</td>
              </tr>
            </tbody>
          </table>
          <div className="liens3">
          <p ><button class="btn btn-primary" type="button">Aller sur le compte Fb</button></p>
          <p><button class="btn btn-primary" type="button">Modifier Fiche</button></p>
          <p><button class="btn btn-primary" type="button">Mettre à jour Automatique</button></p>
          </div>
        </div>

      
        </div>
      </div>

      <div class="container">
        <div class="row align-items-start">
          <div class="col">
            Description profil
          </div>

          <div class="col">
            <p>Nbre ambassadeur</p>
            <p>Nbre de postes</p>
            <p>Nbre de paratges</p>
            <p>Score campagne</p>
            <p>Nbre de Black Liste</p>
          </div>
        </div>

        

     
      
    </div>

      


        </div>
    );
    }
    export default listamb;