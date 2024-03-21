import { Counter } from '@/components/Common/Counter/Counter';
import { DataCard } from '@/components/Common/DataCard/DataCard';

import s from '../styles/pages/home.module.scss';

export default function Home() {
  return (
    <main className={s.root}>
      <div className={s.container}>
        <Counter />
        <DataCard />
      </div>
    </main>
  );
}
