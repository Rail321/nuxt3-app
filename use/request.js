export default request => {
  const ready = ref( false )
  const loading = ref( false )
  
  const requestHard = async () => {
    loading.value = true
    const response = await request()
    loading.value = false
    ready.value = true
    return response
  }
  const requestSoft = async () => {
    if ( !( ready.value ) ) return await requestHard()
  }

  return {
    ready,
    loading,
    requestHard,
    requestSoft
  }
}