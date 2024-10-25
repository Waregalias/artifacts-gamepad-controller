'use client'

import {useRouter} from "next/navigation";

function Home() {
  const router = useRouter();
  router.replace('/home');

  return (
    <></>
  )
}

export default Home
