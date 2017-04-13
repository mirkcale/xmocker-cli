
module.exports.getAppProject = {
  pageSize: {
    type: 'number',
    required: true,
  },
  pageNo: {
    type: 'number',
    required: true,
  },
}

module.exports.addAppProject = {
  name: {
    type: 'string',
    required: true,
    noEmpty: true,
    cname: '项目名称',
  },
  shortcut: {
    type: 'string',
    noEmpty: true,
    cname: '项目简称，用于快捷启动',
  },
  member: {
    type: 'string',
    cname: '项目成员',
  },
  path: {
    type: 'string',
    cname: '项目路径',
  },
  port: {
    type: 'number',
    cname: '端口',
  },
  state: {
    type: 'string',
    cname: '项目状态',
  },
  error: {
    type: 'object',
    cname: '错误提示信息格式',
  },
  repeatTime: {
    type: 'number',
    cname: '重复次数',
  },
  proxyTable: {
    type: 'array',
    cname: '代理',
    child: {
      api: {
        type: 'string',
        required: true,
      },
      target: {
        type: 'string',
        reuqired: true,
      },
    },
  },
  staticPath: {
    type: 'array',
    cname: '静态资源路径',
  },
  urls: {
    type: 'array',
    cname: '常用url',
    child: {
      name: {
        type: 'string',
        required: true,
        cname: '链接名称',
      },
      url: {
        type: 'string',
        cname: '链接路径',
      },
      apis: {
        type: 'array',
      },
      list: {
        type: 'array',
      },
      path: {
        type: 'string',
        cname: '链接路径',
      },
      params: {
        type: 'object',
      },
    },
  },
  gulp: {
    type: 'object',
    cname: 'gulp信息',
    child: {
      path: {
        type: 'string',
        cname: 'gulp文件路径',
      },
      buildPath: {
        type: 'string',
        cname: 'gulp目标路径',
      },
      cmd: {
        type: 'string',
        cname: 'gulp任务',
      },
      params: {
        type: 'string',
        cname: '其他参数',
      },
      js: {
        type: 'string',
        cname: 'js文件夹路径',
      },
      css: {
        type: 'string',
        cname: 'js文件夹路径',
      },
      html: {
        type: 'string',
        cname: 'js文件夹路径',
      },
      image: {
        type: 'string',
        cname: 'js文件夹路径',
      },
      autoRefresh: {
        type: 'boolean',
        cname: '自动刷新',
      },
    },
  },
  webpack: {
    type: 'object',
    cname: 'webpack信息',
    child: {
      path: {
        type: 'string',
        cname: 'webpack文件路径',
      },
      cmd: {
        type: 'string',
        cname: 'webpack指令',
      },
    },
  },
}

module.exports.editAppProject = {
  id: {
    type: 'string',
    required: true,
    noEmpty: true,
  },
  name: {
    type: 'string',
    required: true,
    noEmpty: true,
    cname: '项目名称',
  },
  shortcut: {
    type: 'string',
    noEmpty: true,
    cname: '项目简称，用于快捷启动',
  },
  member: {
    type: 'string',
    cname: '项目成员',
  },
  path: {
    type: 'string',
    cname: '项目路径',
  },
  port: {
    type: 'number',
    cname: '端口',
  },
  state: {
    type: 'string',
    cname: '项目状态',
  },
  error: {
    type: 'object',
    cname: '错误提示信息格式',
  },
  repeatTime: {
    type: 'number',
    cname: '重复次数',
  },
  proxyTable: {
    type: 'array',
    cname: '代理',
    child: {
      api: {
        type: 'string',
        required: true,
      },
      target: {
        type: 'string',
        reuqired: true,
      },
    },
  },
  staticPath: {
    type: 'array',
    cname: '静态资源路径',
  },
  urls: {
    type: 'array',
    cname: '常用url',
    child: {
      name: {
        type: 'string',
        required: true,
        cname: '链接名称',
      },
      url: {
        type: 'string',
        cname: '链接路径',
      },
      apis: {
        type: 'array',
      },
      list: {
        type: 'array',
      },
      path: {
        type: 'string',
        cname: '链接路径',
      },
      params: {
        type: 'object',
      },
    },
  },
  gulp: {
    type: 'object',
    cname: 'gulp信息',
    child: {
      path: {
        type: 'string',
        cname: 'gulp文件路径',
      },
      buildPath: {
        type: 'string',
        cname: 'gulp目标路径',
      },
      cmd: {
        type: 'string',
        cname: 'gulp任务',
      },
      params: {
        type: 'string',
        cname: '其他参数',
      },
      js: {
        type: 'string',
        cname: 'js文件夹路径',
      },
      css: {
        type: 'string',
        cname: 'js文件夹路径',
      },
      html: {
        type: 'string',
        cname: 'js文件夹路径',
      },
      image: {
        type: 'string',
        cname: 'js文件夹路径',
      },
      autoRefresh: {
        type: 'boolean',
        cname: '自动刷新',
      },
    },
  },
  webpack: {
    type: 'object',
    cname: 'webpack信息',
    child: {
      path: {
        type: 'string',
        cname: 'webpack文件路径',
      },
      cmd: {
        type: 'string',
        cname: 'webpack指令',
      },
    },
  },
}

module.exports.deleteAppProject = {
  id: {
    type: 'string',
    required: true,
    noEmpty: true,
  },
}

module.exports.startAppProject = {
  id: {
    type: 'string',
    required: true,
    noEmpty: true,
  },
  force: {
    type: 'boolean',
  },
}

module.exports.stopAppProject = {
  id: {
    type: 'string',
    required: true,
    noEmpty: true,
  },
}

module.exports.setDefaultApiParam = {
  project: {
    type: 'string',
    required: true,
    noEmpty: true,
  },
  inputParam: {
    type: 'object',
  },
  outputParam: {
    type: 'object',
  },
  name: {
    type: 'string',
  },
}
