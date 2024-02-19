import styles from './experience.module.css'

export default function Experience() {
  return (
    <>
      <section id='experience'>
        <div className='container pt-10 lg:pt-60'>
          <h2 className='uppercase font-bold text-32 lg:text-48 text-white'>Experience</h2>
          <ul className={styles['timeline']}>
            <li className={styles['event']} data-date='12:30 - 1:00pm'>
              <h3>Registration</h3>
              <p>Get here on time, it&apos;s first come first serve. Be late, get turned away.</p>
              <p>Get here on time, it&apos;s first come first serve. Be late, get turned away.</p>
              <p>Get here on time, it&apos;s first come first serve. Be late, get turned away.</p>
            </li>
            <li className={styles['event']} data-date='2:30 - 4:00pm'>
              <h3>Opening Ceremony</h3>
              <p>
                Get ready for an exciting event, this will kick off in amazing fashion with MOP & Busta Rhymes as an
                opening show.
              </p>
            </li>
            <li className={styles['event']} data-date='5:00 - 8:00pm'>
              <h3>Main Event</h3>
              <p>
                This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!
              </p>
            </li>
            <li className={styles['event']} data-date='8:30 - 9:30pm'>
              <h3>Closing Ceremony</h3>
              <p>
                See how is the victor and who are the losers. The big stage is where the winners bask in their own
                glory.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
