
# Sheffield Weather App

A weather forecast app that shows the weather forecast for the week. The Dashboard presents a basic description of the weather of each day of the week using the OpenWeather API to retrieve forecast information. 

## Functionality

The weather app includes the following functionality:
- A single page application.
- A summary of the weather for the next seven days for a fixed location i.e. Sheffield.
- The information for each day includes:
  - The date and day of the week
  - A picture indicating the weather conditions
  - The maximum and minimum temperatures
  - The wind speed.
- The information for each day are presented in a consistent manner.
- Each day appears seperately by usung the same component to display the data (passed using props).


### Installing

1.  clone the repository
2.  run `npm install` in the repository directory

### Build and Run

`react-native run-ios`

or

`react-native run-android`

## Screenshot(s)
<img width="960" alt="weekly" src="https://user-images.githubusercontent.com/40723510/103010833-d50bd000-4530-11eb-92df-02f9f3211639.png">


## Future extensions
The app could be extended by allowing the user to click on the summary forecast to get more detailed information for that day. (this data could again come from the OpenWeather API). It could also have option for user to change location and get the weather forecast of the chosen location. 
