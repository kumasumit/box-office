import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../../api-config/config';

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
      setDetail(results);
    });
  }, [id]);

  console.log('detail', detail);

  return <div>This is the details page.</div>;
};

export default Detail;
