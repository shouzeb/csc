import { Component, OnInit } from '@angular/core';
import { Country, State, City }  from 'country-state-city';

@Component({
  selector: 'app-csc',
  templateUrl: './csc.component.html',
  styleUrls: ['./csc.component.css']
})
export class CSCComponent implements OnInit {
  countries = Country.getAllCountries();
  states = [] 
  cities = [] 
  selectedCountryCode = null
  selectedStateCode = null
  nrSelect:string = "47" 
  
  constructor() {
    //console.log(JSON.stringify(this.countries))
   }

  ngOnInit() {
  }
  onCountrySelect(country){
    
    console.log("select country is "+(State.getStatesOfCountry(this.countries.find(data => data.name === country).isoCode)))
    this.selectedCountryCode  = this.countries.find(data => data.name === country).isoCode
    this.states = State.getStatesOfCountry(this.selectedCountryCode)
    this.cities = null
    console.log(JSON.stringify(this.states))
  }
  onStateSelect(state){
    //console.log("select country is "+(State.getStatesOfCountry(this.countries.find(data => data.name === country).isoCode)))
    //console.log("select state is "+(State.getStatesOfCountry(this.states.find(data => data.name === country).isoCode)))
    this.selectedStateCode = this.states.find(data => data.name === state).isoCode
    this.cities = City.getCitiesOfState(this.selectedCountryCode,this.selectedStateCode)
    //this.cities = City.getCitiesOfState((State.getStatesOfCountry(this.countries.find(data => data.name === country).isoCode)),)
  }
  onCitySelect(city){}
}
