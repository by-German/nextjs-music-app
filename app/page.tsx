import { Button } from "@nextui-org/react";
import { Header } from "./ui/header";
import { Player } from "./ui/player/player";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.grid_template}>
      <Header></Header>
      <div className="content" style={{ border: "1px solid yellow" }}></div>
      <Player></Player>
    </main>
  );
}
