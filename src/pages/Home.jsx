import React, { useEffect, useState } from 'react'
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Iframe from 'react-iframe'

function Home() {

  let [ruta, setRuta] = useState('https://tutorah.tv')

  function cambia() {
    document.getElementById("iframe_id").src = 'https://nintendo.com'
  }

  useEffect(() => {
    console.log(document.getElementById("iframe_id").src)
  }, [])


  return (
    <IonPage>

      <IonContent fullscreen>

        <br /><br />

        <div className='nav'>
          <IonButton>back</IonButton>
          <IonButton>forward</IonButton>
          <IonButton onClick={() => { cambia() }}>reload</IonButton>
        </div>

        <iframe src="https://tutorah.tv" title="gsoeogle" id='iframe_id' className='frame'></iframe>


        {/* <Iframe url="http://tutorah.tv"
          width="450px"
          height="450px"
          id="myId"
          className="frame"
          display="initial"
          position="relative" /> */}

      </IonContent>
    </IonPage>
  );
};

export default Home;
