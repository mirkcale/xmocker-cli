'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getProject = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
    var finalParams, size, no, skip, list, total, res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            finalParams = ctx.finalParams;
            size = ~~finalParams.pageSize;
            no = ~~finalParams.pageNo;
            skip = ~~(size * no);


            delete finalParams.pageSize;
            delete finalParams.pageNo;

            list = void 0, total = void 0;
            _context.prev = 7;
            _context.next = 10;
            return Project.count(finalParams);

          case 10:
            total = _context.sent;
            _context.next = 13;
            return Project.cfind(finalParams).sort({ name: 1 }).skip(skip).limit(size).exec();

          case 13:
            list = _context.sent;
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context['catch'](7);
            return _context.abrupt('return', ctx.respond.error('查询项目信息出错', { e: _context.t0 }));

          case 19:

            list.forEach(function (d) {
              var id = d._id;
              var proc = processList.find(function (proc) {
                return proc.id === id;
              });
              if (proc) {
                d.status = proc.status;
              }
            });

            res = {
              list: list,
              pagination: {
                total: total,
                pageCnt: Math.ceil(total / size),
                pageNo: no
              }
            };

            ctx.respond.success('获取项目信息成功', res);

          case 22:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[7, 16]]);
  }));

  return function getProject(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getRunningProject = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, next) {
    var finalParams, ids, list;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            finalParams = ctx.finalParams;
            ids = (finalParams.id || '').split(',');
            list = [];

            ids.forEach(function (id) {
              var proc = processList.find(function (proc) {
                return proc.id === id;
              });
              if (proc && proc.status) {
                list.push({ name: proc.proj.name, id: id, shortcut: proc.proj.shortcut });
              }
            });

            ctx.respond.success('获取运行信息成功', { list: list });

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getRunningProject(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var addProject = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(ctx, next) {
    var finalParams, result;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            finalParams = ctx.finalParams;
            result = void 0;
            _context3.prev = 2;

            finalParams._uid = uid();
            finalParams._mt = +new Date();
            _context3.next = 7;
            return Project.insert(finalParams);

          case 7:
            result = _context3.sent;
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](2);
            return _context3.abrupt('return', ctx.respond.error('添加项目出错', { e: _context3.t0 }));

          case 13:

            ctx.respond.success('添加成功', { result: result });

          case 14:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[2, 10]]);
  }));

  return function addProject(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var editProject = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(ctx, next) {
    var finalParams, id, option, result, info, _proc;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            finalParams = ctx.finalParams;
            id = finalParams.id;

            delete finalParams.id;
            option = { type: 'project', id: id };
            result = void 0;
            _context4.prev = 5;

            finalParams._mt = +new Date();
            _context4.next = 9;
            return Project.cfindOne({ _id: id }).exec();

          case 9:
            info = _context4.sent;

            if (info && finalParams.gulp) {
              if (!isEqual(info.gulp, finalParams.gulp)) option.force = true;
            }
            _context4.next = 13;
            return Project.update({ _id: id }, { $set: finalParams });

          case 13:
            result = _context4.sent;
            _context4.next = 19;
            break;

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4['catch'](5);
            return _context4.abrupt('return', ctx.respond.error('编辑项目出错', { e: _context4.t0 }));

          case 19:

            if ((0, _keys2.default)(finalParams).length === 2 && finalParams.proxyType != null) {
              _proc = getProcById(id);

              if (_proc) _proc.setProxyMode(finalParams.proxyType);
            } else {
              restartBackground(option);
            }

            ctx.respond.success('编辑成功', { result: result });

          case 21:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[5, 16]]);
  }));

  return function editProject(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var deleteProject = function () {
  var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(ctx, next) {
    var finalParams, ids, apis, aids;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            finalParams = ctx.finalParams;
            ids = finalParams.id.split(',');
            _context5.prev = 2;
            _context5.next = 5;
            return Project.remove({ _id: { $in: ids } }, { multi: true });

          case 5:
            _context5.next = 7;
            return ApiBase.cfind({ _id: { $in: ids } }).exec();

          case 7:
            apis = _context5.sent;
            aids = apis.map(function (api) {
              return api._id;
            });
            _context5.next = 11;
            return ApiModel.remove({ baseid: { $in: aids } }, { multi: true });

          case 11:
            _context5.next = 13;
            return ApiBase.remove({ _id: { $in: ids } }, { multi: true });

          case 13:
            _context5.next = 18;
            break;

          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5['catch'](2);
            return _context5.abrupt('return', ctx.respond.error('删除项目出错', { e: _context5.t0 }));

          case 18:
            ctx.respond.success('删除成功');

          case 19:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[2, 15]]);
  }));

  return function deleteProject(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var startProject = function () {
  var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(ctx, next) {
    var finalParams, data, ids, procNum, procInfo, err, i;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            finalParams = ctx.finalParams;

            if (!isServer) {
              _context6.next = 3;
              break;
            }

            return _context6.abrupt('return', ctx.respond.error('抱歉，当前服务只能查看服务信息，不能开启子进程。'));

          case 3:
            data = void 0;
            ids = finalParams.id.split(',');
            _context6.prev = 5;
            _context6.next = 8;
            return Project.cfind({ _id: { $in: ids } }).exec();

          case 8:
            data = _context6.sent;
            _context6.next = 14;
            break;

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6['catch'](5);
            return _context6.abrupt('return', ctx.respond.error('启动项目出错', { e: _context6.t0 }));

          case 14:
            if (!(!data || !data.length)) {
              _context6.next = 17;
              break;
            }

            ctx.respond.error('没有需要启动的项目');
            return _context6.abrupt('return');

          case 17:
            procNum = 0;
            procInfo = void 0;
            err = '';
            i = 0;

          case 21:
            if (!(i < data.length)) {
              _context6.next = 35;
              break;
            }

            _context6.prev = 22;
            _context6.next = 25;
            return proc.addToRestart(data[i], { force: finalParams.force });

          case 25:
            procInfo = _context6.sent;
            _context6.next = 31;
            break;

          case 28:
            _context6.prev = 28;
            _context6.t1 = _context6['catch'](22);

            err += _context6.t1.message;

          case 31:
            if (procInfo) procNum++;

          case 32:
            i++;
            _context6.next = 21;
            break;

          case 35:
            ctx.respond.success('成功启动' + procNum + '个应用,' + err);

          case 36:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this, [[5, 11], [22, 28]]);
  }));

  return function startProject(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var stopProject = function () {
  var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(ctx, next) {
    var finalParams, data, ids, procNum, i;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            finalParams = ctx.finalParams;
            data = void 0;
            ids = finalParams.id.split(',');
            _context7.prev = 3;
            _context7.next = 6;
            return Project.cfind({ _id: { $in: ids } }).exec();

          case 6:
            data = _context7.sent;
            _context7.next = 12;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7['catch'](3);
            return _context7.abrupt('return', ctx.respond.error('停止项目出错', { e: _context7.t0 }));

          case 12:
            if (!(!data || !data.length)) {
              _context7.next = 15;
              break;
            }

            ctx.respond.error('没有需要停止的项目');
            return _context7.abrupt('return', next());

          case 15:
            procNum = 0;
            i = 0;

          case 17:
            if (!(i < data.length)) {
              _context7.next = 30;
              break;
            }

            _context7.prev = 18;
            _context7.next = 21;
            return proc.stop(data[i], { force: finalParams.force });

          case 21:
            procNum++;
            _context7.next = 27;
            break;

          case 24:
            _context7.prev = 24;
            _context7.t1 = _context7['catch'](18);

            console.error(_context7.t1);

          case 27:
            i++;
            _context7.next = 17;
            break;

          case 30:
            ctx.respond.success('成功停止' + procNum + '个应用');

          case 31:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this, [[3, 9], [18, 24]]);
  }));

  return function stopProject(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

var setDefaultApiParam = function () {
  var _ref8 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(ctx, next) {
    var finalParams, project, keys, result, apis, i, apiId, j, key, query, sets;
    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            finalParams = ctx.finalParams;
            project = finalParams.project;

            delete finalParams.project;

            keys = (0, _keys2.default)(finalParams);
            result = 0;
            _context8.prev = 5;
            _context8.next = 8;
            return ApiBase.cfind({ project: project }).exec();

          case 8:
            apis = _context8.sent;
            i = 0;

          case 10:
            if (!(i < apis.length)) {
              _context8.next = 28;
              break;
            }

            apiId = apis[i]._id;
            j = 0;

          case 13:
            if (!(j < keys.length)) {
              _context8.next = 25;
              break;
            }

            key = keys[j];
            query = { baseid: apiId };

            query[key] = { $exists: false };
            sets = {};

            sets[key] = finalParams[key];
            _context8.next = 21;
            return ApiModel.update(query, { $set: sets }, { multi: true });

          case 21:
            result += _context8.sent;

          case 22:
            j++;
            _context8.next = 13;
            break;

          case 25:
            i++;
            _context8.next = 10;
            break;

          case 28:
            _context8.next = 33;
            break;

          case 30:
            _context8.prev = 30;
            _context8.t0 = _context8['catch'](5);
            return _context8.abrupt('return', ctx.respond.error('设置默认api出错', { e: _context8.t0 }));

          case 33:
            restartBackground({ type: 'project', id: project });
            ctx.respond.success('设定成功', { result: result });

          case 35:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this, [[5, 30]]);
  }));

  return function setDefaultApiParam(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = require('../database');
var Project = db.project;
var ApiModel = db.apiModel;
var ApiBase = db.apiBase;

var uid = require('../util/common').uid();
var service = require('../service');
var getProcById = service.proc.getProcById;
var proc = service.proc;
var processList = service.proc.state.proc;
var isEqual = require('lodash').isEqual;
var restartBackground = service.ctrlProc.restart.add;
var argv = require('minimist')(process.argv.slice(2));
var isServer = argv.isServer;

module.exports = {
  getProject: getProject,
  getRunningProject: getRunningProject,
  addProject: addProject,
  editProject: editProject,
  deleteProject: deleteProject,
  startProject: startProject,
  stopProject: stopProject,
  setDefaultApiParam: setDefaultApiParam
};