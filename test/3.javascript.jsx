/** @format */

// 测试jsxSingleQuote
export function App() {
  const content1 = 'content1';
  const content2 = 'content2';
  return (
    <div name='prettier_demo'>
      <p id='content'>{content1}</p>
      <p id='content2'>{content2}</p>
    </div>
  );
}

// 测试jsxBracketSameLine
export function Panel() {
  return (
    <button
      className='prettier-class'
      id='prettier-id'
      onClick={this.handleClick}
    >
      Click Here
    </button>
  );
}
