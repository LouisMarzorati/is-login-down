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

        <div className={styles.envSection}>
          <h2>
            Dev
          </h2>
            
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

        <div className={styles.envSection}>
          <h2>
            Test
          </h2>
            {process.env.NEXT_PUBLIC_IS_DOWN_TEST && 
              <h2 className={styles.yes}>
                Yes
              </h2>
            }
            {!process.env.NEXT_PUBLIC_IS_DOWN_TEST && 
              <h2 className={styles.no}>
                No
              </h2>
            }
        </div>
      </main>

    </div>
  )
}
