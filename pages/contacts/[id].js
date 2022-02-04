import Head from 'next/head'
import ContactInfo from '../../components/Contactinfo'

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { contact: data },
  }
}

const Contact = ({ contact }) => (
  <>
    <Head>
      <title>Contact</title>
    </Head>
    <ContactInfo contact={contact} />
  </>
)

export default Contact
