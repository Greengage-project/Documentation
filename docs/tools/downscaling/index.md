

# Downscaling


### Introduction

Downscaling is a numerical modeling tool that allows quantifying the level of pollution in cities. This tool is capable of integrating different data sources such as geospatial information, traffic data, COPERNICUS data, and regional atmospheric (WRF) and pollution (CHIMERE) models to calculate pollution levels in cities with high street-level resolution.

This tool assists administrations in decision-making and plays a crucial role in the era of digital transformation by creating digital twins of cities.


### Features of Low Emissions Zones

1. Multisources data integration.

The tool is capable of integrating traffic data from various cities, pollution data from COPERNICUS or satellite sources (SENTINEL 5 and 7), terrain elevation, building geometry, among other information.


<div style="text-align: center;">
  <img src="assets/munich_sources.png" alt="Differents kinds of sources that the tool are availabe to use." style="width: 650px;" />
  <figcaption>Differents kinds of sources that the tool are availabe to use</figcaption>
</div>


These input data are typically provided in netCDF file format for the model to recognize and integrate.


2. Advanced numerical model MUNICH.

Based on all received data sources, Downscaling tool utilizes *MUNICH* (Model of Urban Network of Intersecting Canyons and Highways), an advanced numerical model that calculates the concentration of pollutants such as CO, NO, CO2, O3, NO2, and particulate matter.


<div style="text-align: center;">
  <img src="assets/munich_diagram.png" alt="General diagram of downscaling superresolution architecture." style="width: 650px;" />
  <figcaption>General diagram of downscaling superresolution architecture.</figcaption>
</div>



<div style="text-align: center;">
  <img src="assets/MUNICH1.png" alt="Example of MUNICH pollutant calculation." style="width: 650px;" />
  <figcaption>Example of MUNICH pollutant calculation.</figcaption>
</div>

3. Geospatial analysis.

The tool enables spatial analysis of pollution, facilitating the identification of critical areas where high concentrations of pollutants are found to develop mitigation measures.


4. Real-time data.

Capable of generating and displaying real-time results, including simulations for the future and simulations over an extended period.


5. Outputs and Interactive Visualization.

The model provides results in netCDF files, which are subsequently processed to offer an interactive visualization showing the concentration of various pollutants in the city. Concentration values are displayed for each street.


<div style="text-align: center;">
  <img src="assets/diagrama1.png" alt="Workflow of the tool." style="width: 600px;" />
  <figcaption>Workflow of the tool.</figcaption>
</div>


### Use case

This is a case study in the city of Lindau (Germany) that illustrates how the tool operates, the results it produces, and the visualization it provides.

In this visualiser you can see the concentration level of each street, as well as apply different types of restrictions in the city to see the effect they have.


<div style="text-align: center;">
  <img src="assets/lindau_usecase.png" alt="Example of real use case in the city of Lindau" style="width: 850px;" />
  <figcaption>Example of real use case in the city of Lindau</figcaption>
</div>





    
