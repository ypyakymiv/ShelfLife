import { API_URL } from './config';
import { update } from '../state/actions/credentials';
import { update_credentials } from './common';


class User {
  static index = () => {
    return {
      type: 'LOAD_USERS',
      payload: {
        request: {
          url: '/user'
        }
      }
    }
  }

  static sign_in = (email, password) => {
    return {
      type: 'SIGN_IN',
      payload: {
        request: {
          method: 'POST',
          url: '/auth/sign_in',
          data: JSON.stringify({
            email,
            password
          })
        }
      }
    }
  }

}

export default User;
