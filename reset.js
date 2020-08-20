/*
  清空test下所有的已格式化文件, 并将src下的所有源测试文件复制到test文件夹下
*/
const path = require('path')
const fs = require("fs")

const src_path = path.resolve("src")
const test_path = path.resolve("test")
/**
 * 清空test文件夹下的所有文件和文件夹
 */
function clearTestDir() {
  const files = fs.readdirSync(test_path)
  files.forEach(f => {
    const fullPath = path.resolve(test_path, f)
    remove(fullPath)
  })
}

function copySrcFileToTest() {
  const fileList = fs.readdirSync(src_path)
  fileList.forEach(f => {
    copy(src_path, f, test_path)
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
      fs.mkdirSync(destFullPath) // recursive: true 直接创建多级目录 fs.mkdirSync("./pp/cc")可以连续创建两级目录
    }
    const fileList = fs.readdirSync(fullPath) 
    fileList.forEach(f => {
      copy(fullPath, f, destFullPath)
    })
  }
}

function remove(src) {
  const stat = fs.statSync(src)
  if (stat.isFile()) {
    fs.unlinkSync(src)
  }
  if (stat.isDirectory()) {
    const fileList = fs.readdirSync(src)
    fileList.forEach(f => {
      const fullPath = path.resolve(src, f)
      remove(fullPath)
    })
    fs.rmdirSync(src)
  }
}

function run() {
  clearTestDir()
  copySrcFileToTest()
}

run()