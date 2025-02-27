import React from 'react';
import data from './data';

const Card = ({ item }) => {
    return (
        <div style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <h3>{item.name}</h3>
            <p><strong>Hobbies:</strong> {item.hobbies}</p>
            <p><strong>Gender:</strong> {item.gender}</p>
            <p><strong>Address:</strong> {item.address}</p>
        </div>
    );
};

const App = () => {
    return (
        <div style={styles.app}>
            <h1>Super Super Idol</h1>
            <div style={styles.cardContainer}>
                {data.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const styles = {
    app: {
        textAlign: 'center',
        padding: '20px',
    },
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '10px',
        width: '200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100%',
        borderRadius: '8px',
    }
};

export default App;