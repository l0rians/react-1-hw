"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import PlanetWishlistItem from "@/components/destination/PlanetWishlistItem";
import AddWishlistItem from "@/components/destination/AddWishlistItem";

const PlanetCard = ({
  name,
  description,
  thumbnail,
  isSelected,
  onAddOrRemovePlanet,
}) => {
  return (
    <div className={styles.planetCard}>
      <img className={styles.planetThumbnail} src={thumbnail} />
      <div className={styles.planetDescription}>
        <h2>
          {name} {isSelected ? " - SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button className="roundButton" onClick={() => onAddOrRemovePlanet(name)}>
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
};

export const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);

  let isPlanetSelected = false;
  let numberOfPlanets = 0;

  const listOfPlanets = [
    {
      name: "Europa",
      description:
        "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
      thumbnail: "/destination/image-europa.png",
    },
    {
      name: "Mars",
      description:
        "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
      thumbnail: "/destination/image-mars.png",
    },
    {
      name: "Moon",
      description:
        "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
      thumbnail: "/destination/image-moon.png",
    },
    {
      name: "Titan",
      description:
        "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
      thumbnail: "/destination/image-titan.png",
    },
  ];

  const onAddOrRemovePlanet = (name, index) => {
    if (!selectedPlanets.includes(name)) {
      onAddPlanet([...selectedPlanets, name]);
    }
    if (selectedPlanets.includes(name)) {
      onAddPlanet(selectedPlanets.filter((planet) => planet !== name));
    }
    numberOfPlanets = selectedPlanets.length;

    console.log(
      `You seleceted the following planet: ${name}, with the index of ${index}`
    );
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          <p>
            {selectedPlanets.length === 0
              ? "No planets in wishlist :("
              : `You have ${selectedPlanets.length} planet(s) in your wishlist`}
          </p>

          <AddWishlistItem
            onAddWishlistItem={(newItem) => {
              onAddPlanet([...selectedPlanets, newItem.name]);
            }}
          />

          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {selectedPlanets.map((planet, index) => (
              <PlanetWishlistItem
                key={planet}
                name={planet}
                onRemove={() => onAddOrRemovePlanet(planet, index)}
                thumbnail={
                  listOfPlanets.find((p) => p.name === planet)?.thumbnail
                }
              />
            ))}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>

          {listOfPlanets.map((planet, index) => {
            return (
              <PlanetCard
                key={planet.name}
                name={planet.name}
                description={planet.description}
                thumbnail={planet.thumbnail}
                isSelected={selectedPlanets.includes(planet.name)}
                onAddOrRemovePlanet={(name) => onAddOrRemovePlanet(name, index)}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
