![Grass is Greener Logo](https://i.imgur.com/85Oqxtp.png)
### Grass is Greener App
Find the area to live or visit that suits your lifestyle 

### Description

Users will take a fun survey about where they live, and about where they visit. The app will gather the data and generate an average consensus of the area. Using this data, users can decide where to live, vacation, or hang out, based on what's important to them. The data will "soft data" --  fun, useful, and unique, and most importantly, things that are not currently searchable on Google.

---

### How?

An app to show and log the "feel" or "vibe" of an area, based on user inputs through survey questions. The survey is a list of ever-growing tags that users are contributing to. Users can choose the tags that suit the area that they are visiting, across three categories. After submission, Grass is Greener will display the crowdsourced tags based on criteria set by the user -- such as searching zip codes by tag category, distance from the user, displaying the  zip code's most-chosen tags, ranking the zip codes by tag, etc.

### Purpose

The goal is to gather fun, unique, and useful data for users to decide where to visit, hang out, or move. Using crowdsourced data, Grass is Greener aims to show activities, places, events, etc. that is tailor-made to a user's searches or preferences. 

When it comes to partnering with businesses or other developers, Grass is Greener aims to work with restaurants, bars, businesses to draw customers to them. Through documenting our API and creating widgets, we aim to provide our unique, fun and useful data to developers such as Yelp, AirBnB, Uber, Google, etc. 

---

### Sketch
![Grass is Greener Mockup](https://i.imgur.com/xBluOdI.png)

---

### APIs Used

* Google Maps
* Google Places
* Firebase

---

### Tasks

* Establish a database that has tables to hold user tables, answer tables, and a question table.
* Create a table for answers that is capable of holding values in a "category" column (allowing users to potentially input their own tags.
* Create a starting array of tags for users to assign to various area codes.
* User authentication and sign up. 
* Use Google Maps API to assign pins to various area codes. When they are clicked, they grab relevant information on from our database about the zip code. 
* Rank the chosen tags of an indiviual zip code, based on user criteria (category, distance from home zip code, etc).
* POSTING user survey answers to respective zip codes. 
* GETTING the survey answers in chosen zip code, and displaying the information in a ranked/sorted order.
* Making the app mobile responsive
---

### 
