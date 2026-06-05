import Link from "next/link";
import { EntryList } from "../components/entry-list";


export default async function Home() {
  return (
    <div>
      <EntryList />
    </div>
  );
}