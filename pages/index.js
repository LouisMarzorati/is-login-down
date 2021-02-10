import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PHMP Login</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Is login down?
        </h1>

        <div>
            {process.env.NEXT_PUBLIC_IS_DOWN && 
              <h2 className={styles.yes}>
                Yes
              </h2>
            }
            {!process.env.NEXT_PUBLIC_IS_DOWN && 
              <h2 className={styles.no}>
                No
              </h2>
            }
        </div>
      </main>

    </div>
  )
}
