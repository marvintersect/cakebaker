import axios from "axios";
import Head from 'next/head';
import Image from "next/image";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import Cakelist from "../components/Cakelist";
import styles from "../styles/Home.module.css";

export default function Home({ cakeList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Cake Bakers</title>
        <meta name="description" content="Best Cakes Around" />
        <link rel="icon" href="/cakebakericon.png " />
      </Head>
      <Featured/>
      {<AddButton setClose={setClose} />}
      <Cakelist cakeList={cakeList} />
      {!close && <Add setClose={setClose} />}
      
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      cakeList: res.data,
      admin,
    },
  };
};
