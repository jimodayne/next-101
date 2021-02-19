import { useRouter } from "next/router";
import Link from "next/link";

const Record = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <p className="mx-auto text-2xl font-bold">Record {id}</p>
      <Link href="/">
        <a className="mx-auto">Back to Home</a>
      </Link>
    </>
  );
};

export default Record;
