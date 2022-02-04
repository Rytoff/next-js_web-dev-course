import Head from 'next/head'
import Heading from '../components/Heading'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts List:" />
      <h2>Список постів:</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Purus faucibus
        ornare suspendisse sed nisi. Iaculis nunc sed augue lacus viverra vitae
        congue eu consequat. Egestas dui id ornare arcu odio. Quis enim lobortis
        scelerisque fermentum dui faucibus in ornare quam.
      </p>
    </>
  )
}
