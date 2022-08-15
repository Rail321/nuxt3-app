import useRequest from '@/use/request'
import apiRoles from '@/api-imitator/roles'

export default () => {
  const { loading, request } = useRequest( apiRoles )
  return {
    loading, request
  }
}