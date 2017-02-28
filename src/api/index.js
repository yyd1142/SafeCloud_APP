import { httpGet, httpPost } from './requestService'

export default {
  // 报警记录
  alarmRecordsData: httpGet('alarmRecords'),
  // 设备列表
  devicesListData: httpGet('devices'),
  //任务总表-管理员
  adminMissionList:httpGet(''),
}
