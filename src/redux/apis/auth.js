import { apiPost } from '@utils';

export function signupAPI(data) {
  let formData = new FormData();

  return apiPost('', data);
}




