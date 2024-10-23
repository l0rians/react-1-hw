"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

const API_KEY = "YVO9oUJ03S3vNkU6c0YMQ36VgqbmQs7q4iZl7t4h";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <>
      <div className={styles.roverPhoto}>
        <h3>{roverName}</h3>
        <p>{date}</p>
        <img className={styles.nasaPicOfTheDay} src={src} />
      </div>
    </>
  );
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json()
      );
      setRoverPhoto(roverPhotoResponse);
    };
    const fetchDailyImage = async () => {
      const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay).then(
        (response) => response.json()
      );
      setDailyImg(dailyImgResponse);
    };

    fetchRoverPhotos();
    fetchDailyImage();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          <div className={styles.nasaContainer}>
            {dailyImg.url && (
              <img
                className={styles.nasaPicOfTheDay}
                src={dailyImg.url}
                alt={dailyImg.title}
              />
            )}
            <>
              <h3>{dailyImg.title}</h3>
              <p>{dailyImg.explanation}</p>
              <img src={dailyImg.url} alt={dailyImg.title} />
            </>
          </div>
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          <div className={styles.roverPhotoContainer}>
            {roverPhoto?.photos?.length ? (
              roverPhoto.photos.map((photo) => (
                <RoverPhoto
                  key={photo.id}
                  src={photo.img_src}
                  date={photo.earth_date}
                  roverName={photo.rover.name}
                />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
