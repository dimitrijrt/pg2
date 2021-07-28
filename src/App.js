import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import listpostmere from './pages/listpostmere';
import listpostpartag from './pages/listpostpartag';
import listecamp from './pages/listecamp';
import group from './pages/group';
import listamb from './pages/listamb';
import creercamp from './pages/creercamp';
import listseg from './pages/listseg';
import gestioncompt from './pages/gestioncompt';
import reportingcamp from './pages/reportingcamp';
import connexion from './pages/connexion';
import pageadmin from './pages/pageadmin';
import scrappauto from './pages/scrappauto';
import suivicamp from './pages/suivicamp';
import lancercampagne from './pages/lancercampagne';
import userlist from './pages/userlist';




function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Switch>
         <Route path='/listepostM' exact component={listpostmere}/>
         <Route path='/listepostP' exact component={listpostpartag}/>
         <Route path='/listecampagne' exact component={listecamp}/>
         <Route path='/pagegroupe' exact component={group}/>
         <Route path='/listamb' exact component={listamb}/>
         <Route path='/creercamp' exact component={creercamp}/>
         <Route path='/listesegment' exact component={listseg}/>
         <Route path='/suivicampagne' exact component={suivicamp}/>
         <Route path='/gestioncomptesI' exact component={gestioncompt}/>
         <Route path='/reportcamp'exact component={reportingcamp}/>
         <Route path='/connexion'exact component={connexion}/>     
         <Route path='/pageadmin'exact component={pageadmin}/>
         <Route path='/Scrapp'exact component={scrappauto}/>
         <Route path='/suividescampagnes'exact component={suivicamp}/>
         <Route path='/lancercampagne'exact component={lancercampagne}/>
         <Route path='/userliste'exact component={userlist}/>       
        </Switch>
      </Router>  
    </>
      
  );
}

export default App;
