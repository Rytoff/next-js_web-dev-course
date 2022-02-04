import Head from 'next/head'
import Heading from "../../components/Heading";

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text='Contacts Page' />
      <h2>Contacts List</h2>
      <ul>
        <li>John Doe</li>
        <li>Will Smith</li>
        <li>Ronald Reigan</li>
      </ul>
    </>
  )
}