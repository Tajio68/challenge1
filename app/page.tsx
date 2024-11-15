import Present from "./components/Present";
import Who from "./components/Who";

export default function Home() {
  return (
    <div className="flex flex-col justify-center space-y-14 m-4 items-center h-full">
      <h1 className="text-4xl text-orange-400">HomeDev</h1>
      <Present />
      <Who />
    </div>
  );
}
