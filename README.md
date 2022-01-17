# Dashboard Chrome Extension
> A Momentum Style Dashboard Chrome Extension with a random Unsplash photo each time with the Time in the centre with a different Kanye quote every time and on the right is the weather details. On the left Crypto details & at the bottom details about the photographer who took the photo and below that details about where the photo was taken if it is available.


![Example1](dashboard_1.png)

![Example2](Dashboard_2.png)


#### Features
The Unsplash photo is random and is pulled with a Scrimba API based on the [Unplash API](https://unsplash.com/documentation#get-a-random-photo). Each time a new Unsplash photo is pulled out of random. At the bottom left of each photo is a hyperlink name of the photographer, below this is the details about the location of the photo if it is available. 

In the Centre is the Time using the `setInterval()` method along with the `new Date()` along with the `toLocaleTimeString()` method
