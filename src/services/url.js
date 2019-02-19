export default {
  login: '/api/admin/login', // 用户登录
  area: '/api/public/area',
  areaAll: '/api/public/areaAll',
  uploads: '/api/public/uploads', //上传
  verificationCode: '/api/admin/verificationCode', //验证码
  attr: '/api/public/attr', //获取类目
  news: '/api/admin/news', //资讯
  accountList: '/api/admin/accountList', //获取用户
  banner: '/api/admin/banner', //轮播列表
  newsState: '/api/admin/newsState', //资讯状态切换
  bannerState: '/api/admin/bannerState', //轮播状态切换
  getToken: '/api/public/getUploadToken', // 七牛云token获取
  newsTop: '/api/admin/newsTop', //置顶,
  group: '/api/admin/group', //队伍列表
  feedTop: '/api/admin/feedTop', //队伍置顶
  groupState: '/api/admin/groupState', //队伍启用禁用
  sportFeed: '/api/admin/sportFeed', //运动圈管理
  feedback: '/api/admin/feedback', // 意见反馈
  userList: '/api/admin/userList', //用户管理列表
  userFavorites: '/api/admin/userFavorites',
  userInfo: '/api/admin/userInfo', //用户详情
  userState: '/api/admin/userState', //用户启禁用
  accountList: '/api/admin/accountList', //账号列表
  setAccount: '/api/admin/setAccount', //账号编辑
  addAccount: '/api/admin/addAccount', //账号添加
  account: '/api/admin/account', //账号
  role: '/api/admin/role', //角色
  menu: '/api/admin/menu', //获取系统权限列表
  comment: '/api/admin/comment',
  getAccount: '/api/admin/getAccount', //获取用户列表
  GroupQr: '/api/admin/GroupQr', //获取二维码
  setVip: '/api/admin/setVip', //vip设置
  /**
   * 赛事
   */

  competition: '/api/admin/competition', // 赛事列表、删除、添加、编辑、详情
  competitionState: '/api/admin/competitionState', //赛事上下线
  competitionMatch: '/api/admin/competitionMatch', // 赛程列表、添加、编辑、删除
  soccerMatch: '/api/admin/soccerMatch', // 单个赛程编辑，删除
  maxTeamNumEdit: '/api/admin/maxTeamNumEdit', //编辑参赛队伍上限
  groupTeam: '/api/admin/groupTeam', // 淘汰赛小组队伍列表
  competitionMatchInfo: '/api/admin/competitionMatchInfo', // 赛程列表、添加、编辑、删除
  soccerMatchState: '/api/admin/soccerMatchState', // 赛程上下线
  competitionMatchGroup: '/api/admin/competitionMatchGroup', // 赛程阵容、编辑
  competitionMatchResult: '/api/admin/competitionMatchResult', //赛程赛况、编辑
  competitionMaterial: '/api/admin/competitionMaterial', // 赛事素材列表、添加、详情、编辑、删除
  competitionMaterialState: '/api/admin/competitionMaterialState', // 赛事素材上下线,
  competitionMaterialRecom: '/api/admin/competitionMaterialRecom', // 赛事素材推荐，
  competitionMaterialTop: '/api/admin/competitionMaterialTop', // 赛事素材置顶
  exportCompetitionEnlist: '/api/admin/exportCompetitionEnlist', // 导出报名数据
  competitionGroup: '/api/admin/competitionGroup', // 赛事队伍
  competitionAudit: '/api/admin/competitionAudit', // 赛事队伍审批
  competitionGroupMember: '/api/admin/competitionGroupMember', //赛事队伍成员
  createCompetitionQr: '/api/admin/createCompetitionQr', // 生成二维码
  statisticsCompetitionList: '/api/admin/statisticsCompetitionList', // 统计 赛事列表
  groupNoList: '/api/admin/groupNoList', //统计 当前赛事小组组号
  matchTurnList: '/api/admin/matchTurnList', // 统计 当前赛事小组赛组号列表
  shooterList: '/api/admin/shooterList', // 统计 射手榜
  assists: '/api/admin/assists', // 统计 助攻榜
  leagueTable: '/api/admin/leagueTable', //统计 积分榜
  bookings: '/api/admin/bookings', //统计 红黄榜
  competitionMaterialVisit: '/api/admin/competitionMaterialVisit', //赛事素材的热度自由加减
  rankRiseRose: '/api/admin/rankRiseRose', // 一键生成晋级之路
  turnList: '/api/admin/turnList', // 赛程列表-轮次列表（筛选条件)
  getGroupNoList: '/api/admin/groupNoList', // 赛程列表-组别列表（筛选条件）
  statisticsCount: '/api/admin/statisticsCount', // 统计赛事数据 数量
  groupMember: '/api/admin/groupMember', // 队伍新增列表

  /**
   * 首页
   */
  statistics: '/api/admin/statistics', // 首页数据查看

  /**
   * 官网列表管理
   */
  webCompetition: '/api/admin/webCompetition', // 官网管理列表  详情 新增 删除 编辑
  webCompetitionState: '/api/admin/webCompetitionState', //官网赛事上下线
  sortEdit: '/api/admin/sortEdit', //官网赛事列表排序自由加减

  /**
   * 约动管理
   */
  movement: '/api/admin/movement', // 约动队伍列表
  movementState: '/api/admin/movementState', // 约动队伍列表上下线切换
  organizeMovement: '/api/admin/organizeMovement', //组织者约动
  organizeMember: '/api/admin/organizeMember', //组织者约动成员列表

  /**
   * 用户审核
   */
  userAudit: '/api/admin/userAudit', //审核列表，审核详情，用户审核
  message: '/api/admin/message', //消息列表，审核详情，用户审核
  version: '/api/public/version', //版本说明 (版本说明传的public里面是为了全局)
};
