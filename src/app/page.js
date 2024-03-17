"use client"

import { useEffect } from "react";
import styles from "./page.module.css";
import Hero from "./components/hero/Hero";
import Partners from "./components/partners/Partners";
import LatestJobs from "./components/latestjobs/LatestJobs";

export default function Home() {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])
  return (
    <main className={styles.main}>
     <Hero />
     <Partners />
     <LatestJobs />
    </main>
  );
}
