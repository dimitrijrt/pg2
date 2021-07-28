import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './gestioncompt.css'



function gestioncompt() {
    return (
        <div className="gestioncompt">
            <header className="header-gestioncompt">
        {/*Link campgne-segment-group*/}
        <div className="liens"><a href="#" className="linkcamp">    CAMPAGNE</a>
        <a href="#" className="linksegment">    SEGMENT</a>
        <a href="#" className="linkgroupe">    GROUPE</a></div>
      </header>

      
      <h3>Accès Utilisateur Application</h3>
      <div className="liens2">
        <p><a href="#" >Creer un utilisateur</a></p>
        <p><a href="#" >Supprimer un utilisateur</a></p>
      </div>

      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Login</th>
            <th scope="col">Password</th>
            <th scope="col">Email récupération</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dimitri</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>Kamal</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>Tommy</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>Mady</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>Community</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
          
        </tbody>
      </table>

        </div>

    );
    }

    export default gestioncompt;