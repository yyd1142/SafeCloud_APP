/**
 * Created by enjoyzhou on 17-2-16.
 */
import { httpGet, httpPost } from './requestService'
import Conf from './conf'

export default {
  getJSON: httpGet('/repositories'),
  postJSON: httpPost('/api/home')
}
