'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MemberGallery from './MemberGallery'
const queryClient = new QueryClient()

const MemberGalleryQueryProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MemberGallery />
    </QueryClientProvider>
  )
}

export default MemberGalleryQueryProvider
