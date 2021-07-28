import 'bootstrap/dist/css/bootstrap.min.css'
import './connexion.css';
import React from 'react';
import lg from './lg.svg';



function connexion() {
    return (
        <div className="connexion">
             <form>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />         
                </div>
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <h1 class="pco">Page de connexion</h1>
                <img src={lg} className = 'lg'/>
                <h4 className="soustitre">Team expérience lalachante</h4>
                <div className='Tm'>Team manager</div>
             

        </div>
    );
    }

    export default connexion;