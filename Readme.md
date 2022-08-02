<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.  

**[PROJECT PHILOSOPHY](https://github.com/JeanPaul-AbiZeid/SOS#-project-philosophy) • [WIREFRAMES](https://github.com/JeanPaul-AbiZeid/SOS#-wireframes) • [TECH STACK](https://github.com/JeanPaul-AbiZeid/SOS#-tech-stack) • [IMPLEMENTATION](https://github.com/JeanPaul-AbiZeid/SOS#-impplementation) • [HOW TO RUN?](https://github.com/JeanPaul-AbiZeid/SOS#-how-to-run)**

</div>

<br><br>


<img src="./readme/title2.svg"/>

> The SOS app is an emergency app is a user friendly app that helps him/her reach out for help fast when a certain emergency comes up.

> The app sends the location of the person in need of help and connects him/her with the nearest specialist or expert to come for help.

### User Stories
- As a user, I ask for help with a click of a button to connect me to the nearest expert.
- As a user, I want to start a phone call with my emergency contact.
- As a user, I want to notify all the remaining users of a certain case.
- As a expert, I recieve the call for help and get the location of the person in need to reach out.

<br><br>

<img src="./readme/title3.svg"/>

> This design was planned before on paper, then moved to Figma app for the fine details.
Note that i didn't use any styling library or theme, all from scratch and using pure css modules

| Landing  | Home/Search  |
| -----------------| -----|
<!-- | ![Landing](https://github.com/julescript/spotifyndr/blob/master/demo/Landing_Page.jpg) | ![Home/Search](https://github.com/julescript/spotifyndr/blob/master/demo/Search_Page.jpg) | -->

| Artists results  | Artist's Albums  |
| -----------------| -----|
<!-- | ![Artists results](https://github.com/julescript/spotifyndr/blob/master/demo/Artists_Page.jpg) | ![Artist's Albums](https://github.com/julescript/spotifyndr/blob/master/demo/Albums_Page.jpg) | -->


<br><br>

<img src="./readme/title4.svg"/>

Here's a brief high-level overview of the tech stack the Well app uses:

- This project uses the [React Native](https://reactnative.dev/). React Native is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications.
- To send local push notifications, the app uses the [Firebase](https://rnfirebase.io/messaging/notifications) which supports Android and iOS.

<br><br>
<img src="./readme/title5.svg"/>

> Using the above mentioned tech stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app

| Landing  | Home/Search  |
| -----------------| -----|
<!-- | ![Landing](https://github.com/julescript/spotifyndr/blob/master/demo/Landing_Page.jpg) | ![Home/Search](https://github.com/julescript/spotifyndr/blob/master/demo/Search_Page.jpg) | -->


<br><br>
<img src="./readme/title6.svg"/>


> This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

<!-- This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ``` -->

### Installation

Clone the repository
   ```sh
    git clone https://github.com/JeanPaul-AbiZeid/SOS.git
   ```
Switch to the server repo folder
   ```sh
    cd SOS-server
   ```
Install all the dependencies using composer
   ```sh
    composer install
   ```
Copy the example env file and make the required configuration changes in the .env file
   ```sh
    cp .env.example .env
   ```
Generate a new application key
   ```sh
    php artisan key:generate
   ```
Generate a new JWT authentication secret key
   ```sh
    php artisan jwt:generate
   ```
Run the database migrations (**Set the database connection in .env before migrating**)
   ```sh
    php artisan migrate
   ```
Start the local development server
   ```sh
    php artisan serve --host=YOUR IP ADDRESS
   ```
Open a new terminal

Switch to the frontend repo folder
   ```sh
    cd SOS-ReactNative
   ```
Install NPM packages
   ```sh
    npm install
   ```
Go to [Expo](https://expo.dev/) and create an account. If you aleady have an account, sign in using: 
   ```sh
    expo login
   ```
Create a .env file and put your google API key (ex: API_KEY="YOUR API KEY") for the map to work


