import React, { useContext, useState } from 'react';

import './Login.css';


import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {

  const [newUser,setNewUser] = useState(false);

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
    password: '',
    error : '',
    success : false
  });
      const [loggedInUser,setLoggedInUser] = useContext(UserContext);
      const history = useHistory();
      const location = useLocation();
      let {from} = location.state || {from: {pathname: "/"}};


  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignin = () => {

    firebase.auth().signInWithPopup(googleProvider)
      .then((result) => {
        var user = result.user;
        const { displayName, email, photoURL } = user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        console.log(user)
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);

      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

      });
  }


  const handleSignOut = () => {
    firebase.auth().signOut().
      then((res) => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          photo: ''
        }
        setUser(signedOutUser);
      }).catch((error) => {
       console.log(error)
      });
  }
 

 

  


  const handleInputField = (e) => {
    console.log(e.target.name, e.target.value)
    let isFormValid = true;

    if (e.target.name === 'email') {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      isFormValid = e.target.value.length > 7 && /\d{1}/.test(e.target.value);

    }
    if (e.target.name === 'confirmPassword') {
      isFormValid = e.target.value.length > 7 && /\d{1}/.test(e.target.value);

    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }

  }


  const handleSubmitUser = (e) => {
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = {...user};
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name)
        })
        .catch((error) => {
          const newUserInfo = {...user};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then((res) => {
    const newUserInfo = {...user};
    newUserInfo.error = '';
    newUserInfo.success = true;
    setUser(newUserInfo);
    setLoggedInUser(newUserInfo)
    history.replace(from);
  })
  .catch((error) => {
    const newUserInfo = {...user};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
  });
    }

    e.preventDefault();
  }


const updateUserName = name =>{
  const user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name,
  
 
}).then( () => {
  console.log('username update successfully')
}).catch((error) => {
  console.log(error)
});
}




  return (
    <div className="logIn-container">
     
      <div className="container">
        
        <div >

          <h3 component="h3" >
            {newUser?"Create an account":"Log In"}
        </h3>
          <form className="form-control" >
            <div className="container" >
              {
                newUser && <div >
                <textarea
                  autoComplete="name"
                  name="name"
                
                  id="Name"
                  label="Name"
                 
                  onBlur={handleInputField}

                />
              </div>
              }

              <div item xs={12}>
                <input
                 
                  id="email"
                  label="username or email"
                  name="email"
                  autoComplete="email"
                  onBlur={handleInputField}

                />
              </div>
              <div item xs={12}>
                <input
                
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onBlur={handleInputField}

                />
              </div>
              <div >
                <input
                 
                  
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                  onBlur={handleInputField}

                />
              </div>
             
            </div>
            <button
              type="submit"
              
              onClick={handleSubmitUser}

            >
             {newUser? 'Sign Up' : 'Login' } 
          </button>
            <div className="container flex-end" >
              <div >
                <a  >
                  {newUser?  "Already have an account?":"to create an account"}
                   <input onClick={()=>setNewUser(!newUser)} style={{border:'none',backgroundColor:'orange',padding:'5px', borderRadius:'5px', margin:'5px'}} 
                   type="button" value={newUser?'Login':'Sign up'}/>
              </a>
              </div>
            </div>
          </form>
          {
            user.success ? <p style={{color:'green'}}>Your account {newUser? 'created':'logged in'} successfullly</p>
            : <p style={{color:'red'}}>{user.error}</p>
          }
         
          {
            user.isSignedIn ? <button
              type="submit"
              
              onClick={handleSignOut}
            >
              Sign Out
             </button>

              : <button
                type="submit"
               
                onClick={handleGoogleSignin}
              >
                Sign in with Google
                        </button>
          }
        </div>


      </div>
      
    </div>

  );
};

export default Login;