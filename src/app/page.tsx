'use client'

import {useRouter} from "next/navigation";

function Home() {
  const router = useRouter();
  router.replace('/controller');

  return (
    <>
    </>
  )
}

export default Home
