import roles from '@/store/roles'
import ready from '@/store/roles/ready'
import request from '@/api-imitator/roles'

class Roles {

  static async fetchHard() {
    roles.value = await request()
    ready.value = true
  }

  static async fetchSoft() {
    if ( !( ready.value ) ) await this.fetchHard()
  }

  static get() {
    return roles.value
  }

}

export default Roles