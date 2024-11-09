import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Table.module.css';

const AssetTable = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = 'https://672f09d7229a881691f1a5ee.mockapi.io/api/v1/assets';

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        console.log('API Response:', response);  
        setAssets(response.data); 
        setLoading(false); 
      })
      .catch(error => {
        console.error("There was an error fetching the data:", error.response || error.message);
        setError("There was an error fetching the data"); 
        setLoading(false); 
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Scan History</h2>
        <p>Scan History</p>
      </div>
      
      <div className={styles.searchContainer}>
        <select className={styles.select}>
          <option>-- Select Date & Time --</option>
        </select>
        <button className={styles.searchButton}>Search</button>
      </div>

      <h3 className={styles.missedItemsTitle}>Missed Items</h3>

      {loading ? (
        <p>Loading...</p>  
      ) : error ? (
        <p>{error}</p>  
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Asset Name</th>
              <th>Created At</th>
              <th>Asset Number</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, index) => (
              <tr key={asset.id}>
                <td>{index + 1}</td>
                <td>{asset.name}</td>
                <td>{asset.createdAt}</td>
                <td>{asset.num}</td>
                <td><img src={asset.avatar} alt={`Avatar of ${asset.name}`} width="50" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AssetTable;
