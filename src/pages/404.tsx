import dynamic from "next/dynamic"

const NotFoundPage = dynamic(async () => import('@/ui/templates/not-found'), { ssr: false })

export default function Custom404 () {
  return <NotFoundPage />
}