import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import CityService from "../services/cityService";

export default function Cities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();

    cityService.getCities().then((result) => setCities(result.data.data));
  });

  cities.map(city=>city.value=city.id)
  cities.map(city=>city.text=city.city)

  return ( 
    <Dropdown key={cities.id}
    placeholder='Şehirler' fluid multiple selection options={cities} 
    />
  )
}


