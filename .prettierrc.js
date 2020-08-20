// 如有进一步的需求, 请查阅官方文档https://prettier.io
module.exports = {
  /*--- global ---*/
  // 每行代码的最大长度, 默认80
  // 这个并不是指硬性的达到某个长度就给你截断, 会根据实际情况截取合适的长度宣誓
  // 设置120导致jsx的多行属性格式化为一行
  printWidth: 80,
  // 缩进距离
  tabWidth: 2,
  // 是否用/t表示缩进, 默认false, 使用空格表示缩进
  useTabs: false,

  /*--- common ---*/
  // 是否所有的字符串都用单引号, 默认为true, 所有的使用单引号, 若为false, 所有的使用双引号
  singleQuote: true,
  // Object对象括号前后是否需要一个空格, 默认为true, 需要空格{ name: 'pino' }, 如果为false,允许为 {name: 'pino'}
  bracketSpacing: true,
  // 针对markdown文本进行处理, 针对换行敏感的markdown渲染器,如果你想依赖editor的软换行,请配置该项为'never', 默认为'preserve'
  proseWrap: 'preserve',

  /*--- javascript ---*/
  // 默认为true, 会对每个state语句后添加分号, eg: const a='aa' -> const a = 'aa'; 若为false, 或去掉所有state语句后面的分号
  semi: true,
  // 'as-needed' || 'consistent' || 'preserve'
  // 默认'as-needed', 必要时才在在Object的key上加引号
  // consistent: 有一个key加了引号, 其他的也全部加引号
  // preserve: 与输入的样式保持一致
  quoteProps: 'as-needed',
  // 'always' || 'avoid'
  // 默认'always': 无论箭头函数有几个参数都是用括号包裹
  // avoid: 在只有一个参数时不使用括号包裹
  arrowParens: 'always',
  // 'es5' || 'none' || 'all'
  // 默认es5: 在符合es5语法的情况下, 给对象的最后添加一个',' 并清除不符合语法的','
  // none: 永远不在尾部添加','
  // all: 在所有地方最后添加','. 包括函数的入参，eg function test(a, b,)
  trailingComma: 'es5',
  // 在jsx中是否使用单引号, 默认使用双引号, 仅限jsx部分
  jsxSingleQuote: true,
  /*
    在jsx中对于多行属性的元素, '>'是否需要换行显示, 默认false, 需要换行
    eg:
    <div
      id='pp'
      class='cc'
      data-name='pino'
    >
  */
  jsxBracketSameLine: false,

  /*--- html ---*/
  // 'css' || 'strict' || 'ignore'
  htmlWhitespaceSensitivity: 'css',
  // 在*.vue的script和style标签中是否需要开头的缩进,默认是不要, 但社区的部分开发者想要与template中保持一致有开头的缩进
  vueIndentScriptAndStyle: false,

  /*--- other ---*/
  /**
   * 上面已经包含了prettier中playground中常见的配置说明呢
   * 还有一些配置项, 一般情况下是不需要指明的, 这里列举出来, 不做过多介绍
   * endOfLine: 'lf'  2.0后默认换行符'lf'
   * parser: 不需要指定, 根据文件类型prettier会选择合适的parser
   * rangeStart, rangeEnd: 顾名思义, 格式化指定范围的内容
   * requirePragma: 这个配置可以仅格式化头部注释包含@prettier or @format 的文件, 其他的不格式化
   * insertPragma: 这个配置可以向已经格式化的文件头部插入@format 的注释, 默认false, 不插入注释
   */
};