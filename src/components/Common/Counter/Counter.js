'use client';

import { useContext } from 'react';

import { StoreContext } from '@/context/store';

import s from './Counter.module.scss';

export function Counter() {
  const store = useContext(StoreContext);
  const { counter, setCounter } = store || {};

  return (
    <>
      <h1 className={s.heading}>Test counter: {counter}</h1>
      <div className={s.buttonsGroup}>
        <button
          className={`${s.button} ${s.primary}`}
          onClick={() => setCounter((prevState) => prevState + 1)}
        >
          Increase
        </button>
        <button
          className={`${s.button} ${s.secondary}`}
          onClick={() => setCounter((prevState) => prevState - 1)}
        >
          Decrease
        </button>
      </div>
    </>
  );
}
