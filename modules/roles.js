import useRequest from '@/use/request'
import apiRoles from '@/api-imitator/roles'
import roles from '@/store/roles'

const apiRolesModified = async () => {
  const response = await apiRoles()
  roles.value = response
  return response
}

const {
  ready,
  loading,
  error,
  requestHard,
  requestSoft
} = useRequest( apiRolesModified )

const data = computed( () => roles.value )

export {
  data,
  ready,
  loading,
  error,
  requestHard,
  requestSoft
}

export default reactive( {
  data,
  ready,
  loading,
  error,
  requestHard,
  requestSoft
} )