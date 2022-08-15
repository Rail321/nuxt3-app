import roles from '@/store/roles'
import request from '@/api-imitator/roles'

class Roles {

  static async fetch() {
    roles.value = await request()
  }

  static get() {
    return roles.value
  }

}

export default Roles