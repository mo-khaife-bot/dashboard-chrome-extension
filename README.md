# Dashboard Chrome Extension
> A Momentum Style Dashboard Chrome Extension with a random Unsplash photo each time with the Time in the centre with a different Kanye quote every time and on the right is the weather details. On the left Crypto details & at the bottom details about the photographer who took the photo and below that details about where the photo was taken if it is available.


![Example1](dashboard_1.png)

![Example2](Dashboard_2.png)


#### Features
The Unsplash photo is random and is pulled with a Scrimba API based on the [Unplash API](https://unsplash.com/documentation#get-a-random-photo). Each time a new Unsplash photo is pulled out of random. At the bottom left of each photo is a hyperlink name of the photographer, below this is the details about the location of the photo if it is available. 

In the Centre is the Time using the `setInterval()` method along with the `new Date()` along with the `toLocaleTimeString()` method.
Below the Time is a random Kanye quote from the [Kanye Quote API](https://api.kanye.rest).

On the left is Crypto details specific about Doge Coin from the [Coin Gecko API](https://www.coingecko.com/en/api/documentation). That pulls the thumbnail image of the specific crypto coin and the price that day in £ as well as the peak price and lowest price that date.

To the right are the weather details from the [Open Weather Map API](https://openweathermap.org/api). Longitude & Latitude details are pulled from the `Geolocation.getCurrentPosition()` method. An image from the 

