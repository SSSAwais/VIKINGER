import LeftSidebar from "@/layout/left-siderbar/LeftSidebar";
import style from "./page.module.css";
import HomePage from "./home-page/page";
export default function Home() {
  return (
    <main className={style.mian}>
      <LeftSidebar />
      <div className={style.content}>
        <HomePage />
      </div>
    </main>
  );
}
