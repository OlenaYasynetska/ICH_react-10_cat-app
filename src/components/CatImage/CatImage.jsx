import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CatImage.module.css';

const CatImage = () => {
  const [catUrl, setCatUrl] = useState('');
  const [error, setError] = useState('');

  const fetchCat = async () => {
    try {
      setError(''); // Очищаем предыдущие ошибки
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      setCatUrl(response.data[0].url);
    } catch (error) {
      setCatUrl(''); // Очищаем URL картинки при ошибке
      if (error.response) {
        setError(`Ошибка сервера: ${error.response.status}. Пожалуйста, попробуйте позже.`);
      } else if (error.request) {
        setError('Не удалось подключиться к серверу. Проверьте ваше интернет-соединение.');
      } else {
        setError('Произошла ошибка при загрузке изображения. Пожалуйста, попробуйте еще раз.');
      }
      console.error('Ошибка при загрузке изображения:', error);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Случайная кошка</h1>
      {error && <div className={styles.error}>{error}</div>}
      {catUrl && <img src={catUrl} alt="Случайная кошка" className={styles.image} />}
      <button className={styles.button} onClick={fetchCat}>Показать другую</button>
    </div>
  );
};

export default CatImage;
