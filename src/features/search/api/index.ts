// 게시물 검색
export const searchPosts = async () => {
  if (!searchQuery) {
    fetchPosts()
    return
  }
  setLoading(true)
  try {
    const response = await fetch(`/api/posts/search?q=${searchQuery}`)
    const data = await response.json()
    setPosts(data.posts)
    setTotal(data.total)
  } catch (error) {
    console.error("게시물 검색 오류:", error)
  }
  setLoading(false)
}
