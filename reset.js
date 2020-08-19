/*
  清空formatted下所有的已格式化文件, 并将need_fmt下的所有源测试文件复制到formated文件夹下
*/
const path = require('path')
const fs = require("fs")

/**
 * 清空formated文件夹下的所有文件和文件夹
 */
function clearFormatedDir() {
  const p = path.resolve("formatted")
  const files = fs.readdirSync(p)
  files.forEach(f => {
    console.log(f)
  })
}

function copyNeedFmtFile() {
  const fmt_path = path.resolve("formatted")
  const unfmt_path = path.resolve("need_fmt")
  const fileList = fs.readdirSync(unfmt_path)
  fileList.forEach(f => {
    copy(unfmt_path, f, fmt_path)
  })
}

function copy(src, fileName, dest) {
  const fullPath = path.resolve(src, fileName)
  const destFullPath = path.resolve(dest, fileName)
  const stat = fs.statSync(fullPath)
  if (stat.isFile()) {
    fs.copyFileSync(fullPath, destFullPath)
  }
  if(stat.isDirectory()) {
    if (!fs.existsSync(destFullPath)) {
      fs.mkdirSync(destFullPath) // recursive: 直接创建多级目录 fs.mkdirSync("./pp/cc")可以连续创建两级目录
    }
    const fileList = fs.readdirSync(fullPath) 
    fileList.forEach(f => {
      copy(fullPath, f, destFullPath)
    })
  }
}

function remove(src) {
  
}

function run() {
  clearFormatedDir()
  copyNeedFmtFile()
}

run()