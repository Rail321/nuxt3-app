export default sourceRequest => {
  const loading = ref( false )
  const request = async () => {
    loading.value = true
    const response = await sourceRequest()
    loading.value = false
    return response
  }

  return {
    loading,
    request
  }
}