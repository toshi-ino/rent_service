import Head from "next/head";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { listsState } from "../src/hooks/listsState";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [lists, setLists] = useRecoilState(listsState);

  return (
    <div className={styles.container}>
      <Head>
        <title>Rent Service App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/create">
        <button>Add</button>
      </Link>

      <ul>
        {lists.map((list) => {
          return (
            <li key={list.id}>
              {list.id},{list.address},{list.type},{list.description}
              <Link href={`/rents/${list.id}`}>
                <button>Detail</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
