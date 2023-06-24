## Steps to make 

# WeatherApp
Weather app with particles background and arcText for zip code text

## How I got the background working
Create a new folder in vscode
Open terminal
npx create-react-app your_app --template particles
I can go to https://particles.js.org/ and export the preset and copy the presets, then go inside the src/particles.json, remove what is already in there and paste what I have from the preset download.  After that I need to stop/start npm 
Cd to your app

## Challenges
At first, I forgot to type in the - - template particles.  If you forget one of the – in front of template particles the particles.json will not be in the src.
Once I copied the json preset found on particles.js.org and pasted it in the package.json. This made my npm start error out.
I wasn’t able to get the particles background working with the Weather app Day-3 exercise we did in class.  So I had to create a new react app that also installed the particles template.  If I want to change the appearance with another particles background, I can update the package.json to one that can be found on https://particles.js.org/.
My original code could only show me weather for my useState default, because my useEffect hook had an empty dependency array, that tells the variable that the effect depends on. Which caused it to only display the forecast of the default useState.  So I changed the empty array in my useEffect hook to zipCode, so that every time this changes the getForecast function will be called.
I ran into another issue where the getForecast function would be called before I could put in the full zip code, then It would get Uncaught runtime errors: Cannot read properties of undefined(reading ‘forecastday’) TypeError: Cannot read properties of undefined (reading ‘forecastday’). So, I had to put an if state in the useEffect hook stating if the zip length is equal to 5 call the getForecast function.
In order to make the h1 zip arc like I want, I had to install arcText with npm i arc-text --save, import ArcText from ‘arc-text’, and put a script on the page (<script src=”arc-text.js”></script>.
I also imported useRef from react because I to reference the h1 element and manipulated it directly.
useRef is used to create a ref object called h1Ref. h1Ref is then assigned to h1. Do this will hold a reference to DOM of h1. Later in the useEffect hook, the h1Ref.current is used to access the current value of ref that is referring to the h1 element. The reference is then passed to the ArcText constructor to create a new ArcText and apply the arc text effect to the h1 element.
I was also a challenge to get my first React project on Github







