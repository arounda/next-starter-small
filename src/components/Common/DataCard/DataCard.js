import { getData } from '@/api/getData';

import s from './DataCard.module.scss';

const API_URL = process.env.API_URL + '/starships/9';

export async function DataCard() {
  const data = await getData(API_URL);

  return (
    <div className={s.card}>
      {data ? (
        <>
          <h2 className={s.heading2}>SWAPI API test: get starship</h2>
          <div className={s.items}>
            <div className={s.item}>Name: {data.name}</div>
            <div className={s.item}>Model: {data.model}</div>
            <div className={s.item}>Manufactered: {data.manufacturer}</div>
          </div>
        </>
      ) : null}
    </div>
  );
}
