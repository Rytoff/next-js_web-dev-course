import Head from 'next/head'
import Heading from '../../components/Heading'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { contacts: data },
  }
}

export default function Contacts({ contacts }) {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts Page" />
      <h2>Contacts List:</h2>
      <ul>
        {contacts &&
          contacts.map(({ id, name, email }) => (
            <li key={id}>
              <strong>{name}</strong>({email})
            </li>
          ))}
      </ul>
    </>
  )
}
