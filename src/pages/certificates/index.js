import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';

import styles from './Certificates.module.css';

const Certificates = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/list').then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <Container>
      <h1>Certificados</h1>
      <div className={styles.twoPerRow}>
        {data?.map(item => (
          <div key={item?.filename}>
            <h4>{item?.filename.slice(item?.filename, -4)}</h4>
            <img
              alt={item?.filename}
              src={item?.base64}
              className={styles.item}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Certificates;

// <>
// </>
