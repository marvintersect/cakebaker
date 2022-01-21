import Head from 'next/head';
import styles from "../styles/About.module.css";
import React,{ useState } from "react";

const about = () => {
        return (
          <div className={styles.container}>
              <Head>
                <title>About Us</title>
                <meta name="description" content="Best Cakes Around" />
                <link rel="icon" href="/cakebakericon.png " />
            </Head>
            <h1 className={styles.title}>The Best Cakes in Abuja</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
              in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. 
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
              corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
              similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
              cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, 
              omnis voluptas assumenda est, omnis dolor repellendus. 
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates 
              repudiandae sint et molestiae non recusandae. 
              Itaque earum rerum hic tenetur a sapiente delectus, 
              ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
            
          </div>
        );
      };


export default about;