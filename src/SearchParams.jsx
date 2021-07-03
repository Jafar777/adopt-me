import { useState } from "react";

const ANIMALS = ["Tiger", "Lion", "Wolf", "Bear", "Rabbit"];


const SearchParams = () => {
    const [location, setLocation] = useState("Toshkent");
    const [animal, setAnimal] = useState("");
    return (
        <div className="search-params">
            <form>
                Location
                <label htmlFor="location">
                    <input 
                    id="location" 
                    value={location} 
                    placeholder="Location" 
                    onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <button>Submit</button>
                

                <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
            </form>
        </div>
    )
}


export default SearchParams;



