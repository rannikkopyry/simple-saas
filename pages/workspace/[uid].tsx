import { useRouter } from 'next/router'

const Workspace = () => {
  const router = useRouter()
  const { uid } = router.query

  return <p>Post: {uid}</p>
}

export default Workspace