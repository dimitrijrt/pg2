
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './scrappauto.css'


function scrappauto() {
    return (
        <div className="scrappauto">
            <header className="header-scrapp">
        <h1 className="titrescrapp">LANCEMENT DES SCRIPT</h1>
        {/*Link dark*/}
        <a href="#" className="linkcamp">    CAMPAGNE</a>
        <a href="#" className="linksegment">    SEGMENT</a>
        <a href="#" className="linkgroupe">    GROUPE</a>
      </header>


      {/*Script de publication*/}
      <h5 className="soustitrescrapp"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> 
        Script de Publication</h5>
      <div class="container">
        <div class="row align-items-start">

          {/*1ère colonne*/}
          <div class="col">
            Voir la liste des publications <button type="button" class="btn btn-light btn-sm ">GO</button>
            <div></div>
            <div>Voir la liste de publications et poste partagés <button type="button" class="btn btn-light btn-sm">GO</button></div>
            <div></div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              Partager Post Mère <button type="button" class="btn btn-light btn-sm">GO</button>
            </div>
          </div>


          {/*2ème colonne*/}
          <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              Prenom de l'ambasssadeur de partage 
            <button type="button" class="btn btn-light btn-sm">Prénom</button>
            <div><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> id de la campagne </div>
            <button type="button" class="btn btn-light btn-sm">Prénom</button>
          </div>
          </div>


          {/*3ème colonne*/}
          <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              Nom de l'ambassadeur de partage
              <button type="button" class="btn btn-light btn-sm">Nom</button>
              <div><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />id de segment</div>
              <button type="button" class="btn btn-light btn-sm">id_segment</button>
            </div>
          </div>


          {/*4ème colonne*/}
          <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              id du post contenant le message personnalisé
              <div>
              <button type="button" class="btn btn-light btn-sm">lienMessage</button>
              </div>
              <div><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />Numéro de groupe de début de partage </div>
              <button type="button" class="btn btn-light btn-sm">numéro_groupe</button>
            </div>
          </div>



        {/*script recherche de post*/}
        <h5><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Script de Recherche Posts</h5>

        <div class="container">
          <div class="row align-items-start">
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Chercher Post Partage <button type="button" class="btn btn-light btn-sm">GO</button>
            </div>
            
            {/*1ère c */}
            <div class="col">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Prénom de l'ambassadeur de recherche
              <div><button type="button" class="btn btn-light btn-sm">Prénom</button></div>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                id de la campagne
              <div><button type="button" class="btn btn-light btn-sm">id_campagne</button></div>
            </div>


            {/*2ème c */}
            <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              Nom de l'ambassadeur de partage
              <button type="button" class="btn btn-light btn-sm">Nom</button>
              <div><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />id de segment</div>
              <button type="button" class="btn btn-light btn-sm">id_segment</button>
            </div>
            </div>

            {/*3ème c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Mots clés de recherche
              <div><button type="button" class="btn btn-light btn-sm">contenu 1</button>
              <button type="button" class="btn btn-light btn-sm">contenu 2</button>
              </div>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Numéro de groupe de recherche ( facultatif )
              <div><button type="button" class="btn btn-light btn-sm">numéro_groupe</button></div>
            </div>



          {/*Script de Scrapp Post Mere*/}
          <h5><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Script de Scrapp Post Mere</h5>

          <div class="container">
          <div class="row align-items-start">
            
            {/*1ère c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Scrapper Post Mere <button type="button" class="btn btn-light btn-sm">GO</button>
            </div>
            {/*2ème c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              Prénom de l'ambassadeur de Scrappe 
              <div><button type="button" class="btn btn-light btn-sm">Prénom</button></div>
            </div>
            {/*3ème c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              Mots clés de recherche
              <div><button type="button" class="btn btn-light btn-sm">contenu1</button>
              <button type="button" class="btn btn-light btn-sm">contenu2</button>
              </div>
            </div>
            {/*4ème c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              id de la campagne 
              <div><button type="button" class="btn btn-light btn-sm">id_campagne</button></div>
            </div>
          </div>
          </div>






          {/*Script de Relever Posts Partages*/}
          <h5><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Script de Relever Posts Partages
          </h5>

          <div class="container">
          <div class="row align-items-start">
            {/*1ère c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
               Relever Posts Partages <button type="button" class="btn btn-light btn-sm">id_campagne</button>
            </div>
            {/*2ème c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              Prénom de l'ambassadeur de relever
              <div><button type="button" class="btn btn-light btn-sm">Prénom</button></div>
            </div>
            {/*3ème c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              id de la campagne
              <div><button type="button" class="btn btn-light btn-sm">id_campagne</button></div>
            </div>
            {/* 4ème c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              Numéro de post de début de Relever ( facultatif)
              <div><button type="button" class="btn btn-light btn-sm">numéro_post</button></div>
            </div>
          </div>
          </div>


          {/* Script de Scrapp groupe FB*/}
          <h5><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Script Scrapp de Groupes FB
          </h5>

          <div class="container">
          <div class="row align-items-start">
            {/*1ère c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
               Scrapp Groupes FB<button type="button" class="btn btn-light btn-sm">GO</button>
            </div>
            {/*2ème c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              Prénom de l'ambassadeur de Scrapp
              <div><button type="button" class="btn btn-light btn-sm">Prénom</button></div>
            </div>
            {/*3ème c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              Lien de Goocle Sheet
              contenant les id des groupes
              <div><button type="button" class="btn btn-light btn-sm">lienGoogleSheet</button></div>
            </div>
            {/*4ème c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              la colonne des id des groupes
              <div><button type="button" class="btn btn-light btn-sm">colonne</button></div>
            </div>
          </div>
            <div className="basssfb"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            ligne de début de scrappe des groupes <button type="button" class="btn btn-light btn-sm">id_segment</button></div>
          </div>
          </div>
          </div>

           {/*Script de ReScrapp Groupes FB*/}
           <h5><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Script de Rescrapp Groupes FB
          </h5>

          <div class="container">
          <div class="row align-items-start">
            {/*1ère c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
               Rescrapp Groupes FB <button type="button" class="btn btn-light btn-sm">GO</button>
            </div>

            {/*2ème c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              Prénom de l'ambassadeur de Rescrapp
              <div><button type="button" class="btn btn-light btn-sm">Prénom</button></div>
            </div>

            {/*3ème c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              id de segment
              <div><button type="button" class="btn btn-light btn-sm">id_segment</button></div>
            </div>

            {/* 4ème c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              Numéro de groupe de début de Rescrapp ( facultatif)
              <div><button type="button" class="btn btn-light btn-sm">numéro_groupe</button></div>
            </div>
          </div>
          </div>

          {/*Script de relever Page LLc */}
          <h5><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Script de Relever Page LLC
          </h5>

          <div class="container">
          <div class="row align-items-start">

            {/*1ère c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
               Relever Page LLC <button type="button" class="btn btn-light btn-sm">GO</button>
            </div>

            {/* 2ème c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              Prénom de l'ambassadeur de Relever
              <div><button type="button" class="btn btn-light btn-sm">Prénom</button></div>
            </div>
          </div>
          </div>


          {/*Script Traitement notifications */}
          <h5><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          Script Traitement de Notifications
          </h5>

          <div class="container">
          <div class="row align-items-start">

            {/*1ère c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
               Traiter notifications <button type="button" class="btn btn-light btn-sm">GO</button>
            </div>

            {/*2ème c  */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              Prénom de l'ambassadeur de Scrappe (ou de Partage )
              <div><button type="button" class="btn btn-light btn-sm">Prénom</button></div>
            </div>

            {/*3ème c */}
            <div class="col">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              Nom de l'ambassadeur de Scrappe (ou de Partage )
              <div><button type="button" class="btn btn-light btn-sm">Nom</button></div>
            </div>

            {/*Script de adhérer groupes FB */}
              <h5><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              Script de Adhérer Groupes FB
              </h5>

              <div class="container">
              <div class="row align-items-start">

                {/*1ère c */}
                <div class="col">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  Adhérer Groupes FB <button type="button" class="btn btn-light btn-sm">GO</button>
                </div>

                {/*2ème c */}
                <div class="col">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  Prénom de l'ambassadeur d'adhésion
                  <div><button type="button" class="btn btn-light btn-sm">Prénom</button></div>
                </div>

                {/* 3ème c */}
                <div class="col">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  id de segment
                  <div><button type="button" class="btn btn-light btn-sm">id_segment</button></div>
                </div>

                {/* 4ème c */}
                <div class="col">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  Numéro de groupe de début d'Adhésion ( falcultatif )
                  <div><button type="button" class="btn btn-light btn-sm">numéro_groupe</button></div>
                </div>


          </div>
          </div>
          </div>
          </div>






        </div>
      </div>


        </div>
    );
    }

    export default scrappauto;
            