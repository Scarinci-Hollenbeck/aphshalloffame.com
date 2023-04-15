'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import MemberGallery from './MemberGallery'

const MemberGalleryQueryProvider = () => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <MemberGallery />
    </QueryClientProvider>
  )
}

export default MemberGalleryQueryProvider
