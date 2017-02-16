'use strict'
const db = require('../db')
const ApiModel = db.apiModel
const ApiBase = db.apiBase

const util = require('../util')
const uid = require('../util/common').uid()
const setError = util.setError
const reloadDatabase = require('./communication').reloadDatabase

module.exports = {
  getApiModel: getApiModel,
  addApiModel: addApiModel,
  editApiModel: editApiModel,
  deleteApiModel: deleteApiModel,

}

async function getApiModel (ctx, next) {
  let finalParams = ctx.finalParams

  let data
  try {
    data = await ApiModel.cfind(finalParams).exec()
  } catch (e) {
    return setError({ctx: ctx, next: next, err: '查询api分支信息出错', e: e})
  }

  ctx.body = {
    code: 0,
    data: {
      list: data,
    },
  }
  return next()
}

async function addApiModel (ctx, next) {
  let finalParams = ctx.finalParams

  let data
  try {
    finalParams._uid = uid()
    finalParams._mt = +new Date()
    await ApiBase.update({ _id: finalParams.baseid }, { $set: { _mt: +new Date() } })
    data = await ApiModel.insert(finalParams)
  } catch (e) {
    return setError({ctx: ctx, next: next, err: '添加api分支信息出错', e: e})
  }
  reloadDatabase({ apiModel: data._id })

  ctx.body = {
    code: 0,
    data: {
      result: data,
      tip: '添加api分支成功',
    },
  }
  next()
}

async function editApiModel (ctx, next) {
  let finalParams = ctx.finalParams

  let id = finalParams.id
  delete finalParams.id

  let data
  try {
    finalParams._mt = +new Date()
    data = await ApiModel.update({ _id: id }, { $set: finalParams }, { returnUpdatedDocs: true })

    data = data[1]
    await ApiBase.update({ _id: data.baseid }, { $set: { _mt: +new Date() } })
  } catch (e) {
    return setError({ctx: ctx, next: next, err: '编辑api分支信息出错', e: e})
  }
  reloadDatabase({ apiModel: id })

  ctx.body = {
    code: 0,
    data: {
      result: data,
      tip: '编辑api分支成功',
    },
  }
  next()
}

async function deleteApiModel (ctx, next) {
  let finalParams = ctx.finalParams

  let data
  try {
    data = await ApiModel.remove({ _id: finalParams.id })
  } catch (e) {
    return setError({ctx: ctx, next: next, err: '删除api分支信息出错', e: e})
  }

  ctx.body = {
    code: 0,
    data: {
      result: data,
      tip: '删除成功',
    },
  }
  next()
}
