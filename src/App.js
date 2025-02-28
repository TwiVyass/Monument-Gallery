// src/App.js
import React, { useState } from "react";
import "./App.css";

const MonumentGallery = () => {
    const [monuments, setMonuments] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const addMonument = () => {
        const name = prompt("Enter Monument Name:");
        const description = prompt("Enter Description:");
        const city = prompt("Enter City:");
        const imageUrl = prompt("Enter Image URL:");
        if (name && description && city && imageUrl) {
            setMonuments([...monuments, { name, description, city, imageUrl }]);
        }
    };

    const editMonument = (index) => {
        const updatedMonuments = [...monuments];
        updatedMonuments[index].name = prompt("Edit Name:", updatedMonuments[index].name);
        updatedMonuments[index].description = prompt("Edit Description:", updatedMonuments[index].description);
        updatedMonuments[index].city = prompt("Edit City:", updatedMonuments[index].city);
        updatedMonuments[index].imageUrl = prompt("Edit Image URL:", updatedMonuments[index].imageUrl);
        setMonuments(updatedMonuments);
    };

    const deleteMonument = (index) => {
        if (window.confirm("Are you sure you want to delete this monument?")) {
            setMonuments(monuments.filter((_, i) => i !== index));
        }
    };

    const filteredMonuments = monuments.filter((m) =>
        m.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container">
            <div className="controls">
                <button onClick={addMonument}>Add Monument</button>
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="gallery">
                {filteredMonuments.map((monument, index) => (
                    <div className="monument" key={index}>
                        <img src={monument.imageUrl} alt={monument.name} onClick={() => editMonument(index)} />
                        <h1>{monument.name}</h1>
                        <p>{monument.description}</p>
                        <p><strong>{monument.city}</strong></p>
                        <button onClick={() => deleteMonument(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MonumentGallery;
