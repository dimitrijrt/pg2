
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './pageadmin.css'

function pageadmin() {
    return (
        <div className="pageadmin">
            
    <header className="header-pageadmin">
      {/*Link campgne-segment-group*/}
      <a href="#" className="linkcamp">    CAMPAGNE</a>
      <a href="#" className="linksegment">    SEGMENT</a>
      <a href="#" className="linkgroupe">    GROUPE</a>
      <div className="mp"> My Profile : Mady</div>
      <h5 className="slt">Salut,tu veux faire quoi ?</h5>
      
    </header>


    {/*Bloc VOIR*/}
    <h5 className="voir">VOIR</h5>
    <div>
      <a href="#" className="voir">CAMPAGNE En cours</a>
    </div>
      <a href="#" className="voir">CAMPAGNE Terminés</a>
    <div>
      <a href="#" className="voir">CAMPAGNE Prévu</a>
    </div>
      <a href="#" className="voir">CAMPAGNE En idéation</a>
    <div>
    </div>

    {/*Bloc COMPARER*/}
    <h5 className="comparer">COMPARER</h5>
    <div>
      <a href="#" className="comparer">CAMPAGNE Terminées</a>
    </div>
      <a href="#" className="comparer"> Les segments</a>
    <div>
    <a href="#" className="comparer">Les Posts</a>
    </div>
      <a href="#" className="comparer">Les groupes</a>
    <div>
    </div>

    {/*Bloc relever*/}
    <h5 className="relever">RELEVER</h5>
    <div>
      <a href="#" className="relever">Les datas générales des groupes</a>
    </div>
      <a href="#" className="relever"> Les posts d'une campagne</a>
    <div>
      <a href="#" className="relever"> insight Page FB LLc</a>
    </div>
      <a href="#" className="relever">insights Site Google LLc</a>
    <div>
      </div>

    {/*Bloc CREER*/}
    <h5 className="creerpa">CREER</h5>
     <div>
       <a href="#" className="creerpa">Créer une campagne</a>
     </div>
       <a href="#" className="creerpa"> Rcherche de nouveaux groupes</a>
     <div>
       <a href="#" className="creerpa">Créer une nouvelle Segmentation</a>
     </div>
       <a href="#" className="creerpa">Créer des posts</a>
      <div>
      </div>

      {/*Bloc analyser*/}
      <h5 className="analyser">ANALYSER</h5>
     <div>
       <a href="#" className="analyser">Analyser les Campagnes</a>
     </div>
       <a href="#" className="analyser">Analyser les segments</a>
     <div>
       <a href="#" className="analyser">Analyser les Posts</a>
     </div>

     {/*Bloc Segmenter*/}
     <h5 className="segmenter">SEGMENTER</h5>
     <div>
       <a href="#" className="segmenter">Analyser les Campagnes</a>
     </div>
       <a href="#" className="segmenter">Analyser les segments</a>
     <div>
       <a href="#" className="segmenter">Analyser les Posts</a>
     </div>
       
        </div>
        
    );
}

export default pageadmin;