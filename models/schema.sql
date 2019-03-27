
DROP DATABASE IF EXISTS grass_is_greener_db;
CREATE DATABASE grass_is_greener_db;
USE grass_is_greener_db;

CREATE TABLE area(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  zip_code INTEGER(11),
  live_music BOOLEAN DEFAULT FALSE,
  unique_bars BOOLEAN DEFAULT FALSE,
  great_shopping BOOLEAN DEFAULT FALSE,
  dog_walking_clubs BOOLEAN DEFAULT FALSE,
  many_young_people BOOLEAN DEFAULT FALSE,
  too_crowded BOOLEAN DEFAULT FALSE,
  feels_safe BOOLEAN DEFAULT FALSE,
  feels_dangerous BOOLEAN DEFAULT FALSE,
  kind_of_empty BOOLEAN DEFAULT FALSE,
  friendly_people BOOLEAN DEFAULT FALSE,
  too_many_hipsters BOOLEAN DEFAULT FALSE,
  snobby_people BOOLEAN DEFAULT FALSE,
  scenic_tours BOOLEAN DEFAULT FALSE,
  historical_markers BOOLEAN DEFAULT FALSE,
  lots_of_wildlife BOOLEAN DEFAULT FALSE,
  old_houses BOOLEAN DEFAULT FALSE,
  outdoor_murals BOOLEAN DEFAULT FALSE,
  sculpture_garden BOOLEAN DEFAULT FALSE,
  modern_buildings BOOLEAN DEFAULT FALSE,
  beautiful_sunsets BOOLEAN DEFAULT FALSE,
  distinct_skyline BOOLEAN DEFAULT FALSE,
  many_wildflowers BOOLEAN DEFAULT FALSE,
  bland BOOLEAN DEFAULT FALSE,
  needs_upkeep BOOLEAN DEFAULT FALSE,
  smells_bad BOOLEAN DEFAULT FALSE,
  industrial_area BOOLEAN DEFAULT FALSE,
  undeveloped_land BOOLEAN DEFAULT FALSE,
  lots_of_graffiti BOOLEAN DEFAULT FALSE,
  annual_aparade BOOLEAN DEFAULT FALSE,
  bike_trails BOOLEAN DEFAULT FALSE,
  fireworks_show BOOLEAN DEFAULT FALSE,
  community_car_show BOOLEAN DEFAULT FALSE,
  weekly_volunteering_events BOOLEAN DEFAULT FALSE,
  monthly_craft_fairs BOOLEAN DEFAULT FALSE,
  guided_tours BOOLEAN DEFAULT FALSE,
  many_gyms BOOLEAN DEFAULT FALSE,
  pedestrian_friendly BOOLEAN DEFAULT FALSE,
  rock_climbing BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);

