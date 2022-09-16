import React, { useEffect } from 'react'
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Iframe from 'react-iframe'

function Home() {

  // useEffect(() => {
  //   console.log(document.getElementById("iframe_id").contentWindow.location.href)
  // }, [])


  return (
    <IonPage>

      <IonContent fullscreen>




        <div className='nav'>
          <IonButton>back</IonButton>
          <IonButton>forward</IonButton>
          <IonButton>reload</IonButton>
        </div>

        {/* <iframe src="https://tutorah.tv" title="gsoeogle" id='iframe_id' className='frame'></iframe> */}


        <Iframe url="http://tutorah.tv"
          width="450px"
          height="450px"
          id="myId"
          className="frame"
          display="initial"
          position="relative" />

      </IonContent>
    </IonPage>
  );
};

export default Home;
