import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import'./userlist.css'



function userlist() {
    return (
        <div className="userlist">
            <header>
      <h1 className="titreuma">USER LISTE</h1>
        {/*Link campgne-segment-group*/}
        <div className="lienuma">
        <a href="#" >    CAMPAGNE</a>
        <a href="#" >    SEGMENT</a>
        <a href="#" >    GROUPE</a>
        </div>
        <div className="créeruma">
        <h5><p><a href="#" >Rechercher des Nouvelles users listes</a></p>
        <p><a href="#" >Nouveau Modérateur</a></p></h5>
        <p><a href="#" >Scrap  Modérateur Ambassadeur groupe</a></p>
        <p><a href="#" >Contacter modérateurs / administrateur</a></p>
        <h6><p><a href="#" >Scrap Profil</a></p>
        <p><a href="#" >Analyse Profil</a></p>
        <p><a href="#" >Analyser</a></p>
        <p><a href="#" >Liker des modérateurs / administrateur</a></p>   
        </h6>
        <p><a href="#" >Liker Post User Engagé</a></p>  
        <p><a href="#" >Happy BirthDay User / Modérateur</a></p>  
        </div>
        
        <h2>Les Users</h2>
        <h4>Liste générale</h4><h1>User / Ambassadeurs / Modérateurs</h1>infos générales + infos globales
      </header>

      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Nom</th>
            <th scope="col">prénom</th>
            <th scope="col">id_user</th>
            <th scope="col">Genre</th>
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
      
      <div class="containeruma">
      <div class="row align-items-start">
      <h1>visualisation individuelle segment</h1>
      <h3>User</h3>
      <small><a href="#" >Lien fihe </a>Lien compte</small>

        <div class="col">
          <p>id_user</p>
          <p>genre</p>
          <p>Description segment</p>
          <p>prénom_user</p>
          <p>Nom_user</p>

          <h3>Ambassadeur</h3>
          <p><small><a href="#" >Lien Modérateur </a></small></p>
          <p>id_utilisateur</p>
          <p>rôle</p>
          
        </div>

        <div class="col">
        <p><small><a href="#" >Lien Compte </a></small></p>
          
        
        </div>

        <div class='col'>
          <h5>Liste Groupe du User</h5>
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Connu</th>
                <th scope="col">Caché</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Groupe xxx.....</td>
                <td>xxx......</td>
              </tr>
              <tr>
                <td>Groupe xxx.....</td>
                <td>xxx......</td>      
              </tr>
              <tr>
                <td>Groupe xxx.....</td>
                <td>xxx......</td>
              </tr>
              <tr>
                <td>Groupe xxx.....</td>
                <td>xxx......</td>
              </tr>
            </tbody>
          </table>

        </div>


        <div class='col'>
          <h5>Type de User</h5>
          <p>Abonné groupe</p>
          <p>Admin groupe</p>
          <p>Modérateur groupe</p>
          <p>Follower Llc page</p>
          <p>Likeur Llc page</p>
          <p>Ambassadeur Llc</p>

          <p><a href="#" >Recherche User dans group </a></p>
          <p><a href="#" >Recherche Post User dans group </a></p>
          <p><a href="#" >Recherche Like User dans group</a></p>
          <p><a href="#" >Recherche Comment User dans group</a></p>
        </div>

        <div class='col'>
          <p><button class="btn btn-primary" type="button">Aller sur fiche</button></p>
          <p><button class="btn btn-primary" type="button">Modifier Fiche</button></p>
          <p><button class="btn btn-primary" type="button">Manuellement</button></p>
          <p><button class="btn btn-primary" type="button">Mettre à jour Automatique</button></p>
                
        </div>
        </div>
      </div>

      <h4>Activité</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Engagement User</th>
            <th scope="col">Engagement</th>
            <th scope="col">User</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Score</td>
            <td>....</td>
            <td>....</td>
          </tr>
          <tr>
            <td>Nbre de post</td>
            <td>....</td>
            <td>....</td>
          </tr>
          <tr>
            <td >Nbre de Likes</td>
            <td>....</td>
          </tr>
          <tr>
            <td >Nbre de commentaires</td>
            <td>....</td>
          </tr>
        </tbody>
      </table>

        </div>

    );
    }

export default userlist;