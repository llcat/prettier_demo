/** @format */

// 测试singleQuote, prettier会将双引号格式化为单引号
const name = 'pino';
const name1 = 'dio';

// 测试noBracketSpacing
const student = { name: 'pino' };
const student1 = { name: 'pino' };
const student2 = { name: 'pino' };

// 测试proseWrap: 针对markdown文本进行处理, 针对换行敏感的markdown渲染器,如果你想依赖editor的软换行,请配置该项为'never'
