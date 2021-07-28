import { Button, Card } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


function lancercampagne() {
    return (
        <div className="listcampagne">
            <header className="header-lancercamp">
      <h1>LANCER UNE CAMPAGNE</h1>
      <p> Date lancement 2021 07 16  Ambassadeur Laura LalaChante,Aurore)</p>
       <h5><button class="btn btn-primary" type="button">Lien</button><button class="btn btn-primary" type="button">Lien</button> </h5>
      
      </header>
      
      
      
      {/*colonnes*/}
      <div class="containerlancer">
      <div class="row align-items-start">
        <h1>Campagne Stratégie</h1>
        <h3>Choix de la campagne</h3>
        <p>Choisir la campagne dans la liste</p>


        <div class="col">
        {/*liste des camps enregstrées*/}
          <p>Liste des campagnes enregistrées</p>        
          <table class="table">
            <thead>
              <tr>
                <th scope="col">NOM</th>
                <th scope="col">STATUT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>campagne a</td>
                <td>Validée</td>
              </tr>
              <tr>
                <td>campagne a</td>
                <td>en attente</td>
              </tr>
              <tr>
                <td>campagne a </td>
                <td>Prête</td>
              </tr>
              <tr>
                <td>campagne a </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

       {/*colonne : présention,obj*/}
       <div class="col">
        <div class="form-check">
           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
           <label class="form-check-label" for="flexCheckDefault">
             Présentation
           </label>
         </div>       
         <p>........................................................</p>
          <p>.........................................................
         </p>
         <div class="form-check">
           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
           <label class="form-check-label" for="flexCheckDefault">
             Objectifs
        </label>
         </div>
         <p>......................................................</p>
          <p>.......................................................</p>
       </div>
      




       {/*colonne point d'exp,..*/}
       <div class="col">
         <div class="form-check">
           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
           <label class="form-check-label" for="flexCheckDefault">
             Point expérimentation
           </label>
         </div>
         <p>......................................................</p>
         <p>.......................................................</p>
         <div class="form-check">
           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
           <label class="form-check-label" for="flexCheckDefault">
             Stratégie de segmenntation
           </label>
         </div>
         <p>......................................................</p>
         <p>.......................................................</p>

         <p>Choix des segments</p>
         <p>......................................................</p>
         <p>.......................................................</p>
         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
           <label class="form-check-label" for="flexCheckDefault">
             description des segments
           </label>
       </div>
      
      

       {/*définir KPI campagne*/}
       <div class="col">
         <div class="form-check">
           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
           <p><label class="form-check-label" for="flexCheckDefault">
             Lister objectifs
           </label></p>
         </div>
         <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Nom des segments</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nom :</td>
                <td>S1 - x groupe</td>
              </tr>
              <tr>
                <td>ID :</td>
                <td>S2 - x groupe</td>
              </tr>
              <tr>
                <td>Nbre groupe : </td>
                <td>S3 - x groupe</td>
              </tr>
              <tr>
                <td></td>
                <td>S4 - x groupe</td>
              </tr>
            </tbody>
          </table>
         <div class="form-check">
           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
           <label class="form-check-label" for="flexCheckDefault">
             Résultat attendu
           </label>
         </div>
         <p>......................................................</p>
         <p>.......................................................</p>
         <div class="form-check">
           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
           <label class="form-check-label" for="flexCheckDefault">
             KPI campagne
           </label>
         </div>
       </div>

       <div class="col">
         <div class="form-check">
           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
           <label class="form-check-label" for="flexCheckDefault">
             Post Campagne
           </label>
         </div>
         <p>......................................................</p>
         <p>.......................................................</p>
         <div class="form-check">
           <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
           <label class="form-check-label" for="flexCheckDefault">
             Ambassadeur Campagne
           </label>
         </div>
         Laura
         {/*1er carré*/}
         <p><div class="card">
          <div class="card-body">
            <p class="card-text"></p>
          </div>
        </div></p>
        Aurore
        {/*2ème carré*/}
        <p><div className="card2">
        <div class="card">
          <div class="card-body">
            <p class="card-text"></p>
          </div>
        </div>
        </div></p>
        
        
      </div>

     </div>
     </div>

     {/*POST,mere,partagé*/}
   
      <div class="container">
      <div class="row align-items-start">
        <h3>POSTE</h3>
       <div class="col">
         <h5>MERE</h5>
         <div class="card"className="cardlancercamp">
          <div class="card-body">
            <p class="card-text"></p>
          </div>
         </div>
         <div className="txt">
           <h7>POST Mère 1</h7>
         <p>........................................................</p>
          <p>.........................................................
         </p>
         </div>
        <div class="card">
          <div class="card-body">
            <p class="card-text"></p>
          </div>
        </div>
        <h7>POST Mère 2</h7>
         <p>......................................................</p>
          <p>.......................................................</p>
        
        <div class="card">
          <div class="card-body">
            <p class="card-text"></p>
          </div>
        </div>
        <h7>POST Mère 3</h7>
         <p>......................................................</p>
          <p>.......................................................</p>
       </div>
       




       {/*définir thème*/}
       <div class="col">
         <h5>Partagé</h5>
         <div class="card"className="cardlancercamp">
          <div class="card-body">
            <p class="card-text"></p>
          </div>
         </div>
         <div className="txt">
         <h7>POST partgé grp 1</h7>
         <p>........................................................</p>
          <p>.........................................................
         </p>
         </div>

          <div class="card">
            <div class="card-body">
              <p class="card-text"></p>
            </div>
          </div>
          <h7>POST partgé grp 2</h7>
          <p>......................................................</p>
            <p>.......................................................</p>
          
          <div class="card">
            <div class="card-body">
              <p class="card-text"></p>
            </div>       
          </div>
          <h7>POST partgé grp 3 et 4</h7>
          <p>......................................................</p>
            <p>.......................................................</p>
                  
        </div>
        
      
      

       {/*définir KPI campagne*/}
       <div class="col">
         <h7>Légende partagée Grp 1</h7>
         <p>......................................................</p>
         <p>.......................................................</p>
         
         <h7>Légende partagée Grp 1</h7>
         <p>......................................................</p>
         <p>.......................................................</p>
          
         <h7>Légende partagée Grp 1</h7>
         <p>......................................................</p>
         <p>.......................................................</p>

         <h7>Légende partagée Grp 1</h7>
         <p>......................................................</p>
         <p>.......................................................</p>
       </div>

       <div class="col">
       </div>

      {/*LANCEMENT POST CAMP*/}
       <h3>LANCEMENT POST CAMPAGNE</h3>
       <h6>LANCER LES SCRIPTS</h6>
        <div class="container">
          <div class="row align-items-start">
            <div class="col">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                  <button class="btn btn-primary" type="button">Suivi de partage des posts</button>
                </label>
                <p>Lancer script de partage dans les groupes</p>
              </div>              
                
          
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                  <button class="btn btn-primary" type="button">partager posts</button>
                </label>
                <p>Lancer script suivi de partage de post dans les groupes</p>
              </div>
              
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                <button class="btn btn-primary" type="button">Relevé score posts</button>
              </label>
              <p>Lancer script de relevé des posts dans les grorupes</p>
               </div>
              
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                <button class="btn btn-primary" type="button">nouveau relever des posts</button>
              </label>
              <p>Lancer post suivi des notifications</p>
              </div>
            
          </div>
        </div>

          <div className="suivcamp">
            <h3>Suivi Campagne</h3>
            <h6>Etape Conversationnel</h6>

            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  <label class="form-check-label" for="flexCheckDefault">
                    Suivi Conversationnel
                </label>
            <p>Lancer post suivi des notifications</p>

          </div>
        
        </div>
        

      
      

     </div>
     </div>

        </div>

    );
}

export default lancercampagne;