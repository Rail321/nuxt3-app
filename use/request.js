export default request => {
  const ready = ref( false )
  const loading = ref( false )
  const error = ref( null )
  
  const requestHard = async () => {
    let response
    error.value = null
    loading.value = true
    try {
      response = await request()
      ready.value = true
    }
    catch( requestError ) {
      error.value = requestError
    }
    finally {
      loading.value = false
    }
    return response
  }
  const requestSoft = async () => {
    error.value = null
    if ( !( ready.value ) ) return await requestHard()
  }

  return {
    ready,
    loading,
    error,
    requestHard,
    requestSoft
  }
}