import './suivicamp.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './suivicamp.css'



function suivicamp() {
    return (
        <div className="suivicamp">
             <header className="header-suivicamp">
       <h1>Campagne</h1>
       <h4>Listegénéral</h4>    
      </header>

     

    {/*Montrer,filtrer*/}
    <table class="table table-borderless">
      <thead>
        <tr>
          <th scope="col">MONTRER CACHER</th>
          <th scope="col">FILTRER LES CAMPAGNES</th>
          <th>{/*Link dark*/}
          <div className="newcamp">
          <h1> Nouvelle Campagne</h1>
          <h1>segmentation</h1>
          <a href="#" className="linknewcamp">Créer une nouvelle Campagne</a>
          <div>
          <button>Mettre à jour</button>
          </div></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> <div>Données générales <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></div></td>
          <td> <div>Meilleur engagement <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></div></td>
        </tr>
        <tr>
          <td><div>Data groupe <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></div></td>
          <td> <div>Meilleure conversion <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></div></td>
        </tr>
        <tr>
          <td><div>performances<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></div></td>
          <td><div>Meilleure portée <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></div></td>
        </tr>
        <tr>
          <td><div>Page LaLachante <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></div></td>
          <td> <div>Le + de j'aime Llc page <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></div></td>
        </tr>
        <tr>
          <td><div>site web <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></div></td>
          <td> <div>Le + de site web visité <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></div></td>
        </tr>
        <tr>
          <td> <div>Données segment <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></div></td>
          <td> <div> Le Meilleur ROI<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></div></td>
        </tr>
      </tbody>
    </table>

   

    {/*tableau*/}
    <div className="tableau1"><table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Liste campagnes</th>
          <th scope="col">...</th>
          <th scope="col">...</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>campagne xxx</td>
          <td>.....</td>
          <td>.....</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>campagne xxx</td>
          <td>.....</td>
          <td>.....</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>campagne xxx</td>
          <td>.....</td>
          <td>.....</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>campagne xxx</td>
          <td>.....</td>
          <td>.....</td>
        </tr><tr>
          <th scope="row">5</th>
          <td>campagne xxx</td>
          <td>.....</td>
          <td>.....</td>
        </tr><tr>
          <th scope="row">6</th>
          <td>campagne xxx</td>
          <td>.....</td>
          <td>.....</td>
        </tr>
      </tbody>
    </table>
    </div>


    {/*deuxième tableau*/}
    <div className="tableau2"><table class="table">
      <thead>
        <tr>
          <th scope="col">Date brut</th>
          <th scope="col">Date brut</th>
          <th scope="col">Date brut</th>
          <th scope="col">Data tri</th>
          <th scope="col">Data tri</th>
          <th scope="col">Date calculé</th>
          <th scope="col">Date brut</th>
          <th scope="col">Date brut</th>
          <th scope="col">Date brut</th>
          <th scope="col">Date brut</th>
          <th scope="col">Date calculé</th>
          <th scope="col">Date calculé</th>
          <th scope="col">Date calculé</th>
          <th>......</th>
          <th>......</th>
          <th scope="col">Moyenne likes</th>
          <th scope="col">Moyenne commentaires</th>
          <th scope="col">Moyenne likes</th>
          <th scope="col">Moyenne commentaires</th>
          <th scope="col">Moyenne likes</th>
          <th scope="col">Moyenne commentaires</th>
          <th scope="col">Moyenne likes</th>
          <th scope="col">Moyenne commentaires</th>
          <th scope="col">Moyenne likes</th>
          <th scope="col">Moyenne commentaires</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>nouvelle campagne</td>
          <td>Date</td>
          <td>Relevé</td>
          <td>nbr groupe</td>
          <td>nbr groupe partagé</td>
          <td>Tx d'acceptation</td>
          <td>Portée</td>
          <td>nombre de likes</td>
          <td>nombre de commentaires</td>
          <td>Clics publication</td>
          <td>Mentions j'aime</td>
          <td>abonnés</td>
          <td>Vues</td>
          <td>Visites</td>
          <td>....Session</td>
        </tr>
        <tr>
          <td>J'imagine</td>
          <td>20/01</td>
          <td>48h</td>
        </tr>
        <tr>
          <td>Bonne année</td>
          <td >04 / 01</td>
          <td>5j</td>
        </tr>
        <tr>
          <td>Bonne année</td>
          <td >04 / 01</td>
          <td>5j</td>
        </tr>
        <tr>
          <td>Bonne année</td>
          <td >04 / 01</td>
          <td>5j</td>
        </tr>
      </tbody>
    </table>
    </div>

        
    

        </div>

    );
}
export default suivicamp;