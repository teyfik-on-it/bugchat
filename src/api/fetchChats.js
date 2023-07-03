const CHAT_LIST = [
  { id: 1, title: 'Lorem ipsum', history: ['Lorem ipsum, dolor sit'] },
  { id: 2, title: 'dolor sit', history: [' amet consectetur adipisicing'] },
  { id: 3, title: 'amet consectetur', history: [' elit. Perspiciatis'] },
  { id: 4, title: 'adipisicing elit', history: ['doloribus rem, suscipit'] },
  { id: 5, title: 'Dignissimos illo', history: [' aliquid error consequatur'] },
  {
    id: 6,
    title: 'consequatur expedita',
    history: [' quam soluta, voluptate'],
  },
  {
    id: 7,
    title: 'consectetur dignissimos',
    history: ['voluptates vitae reiciendis'],
  },
  { id: 8, title: 'Alias repudiandae', history: [' vero in veritatis fugit'] },
  { id: 9, title: 'modi recusandae', history: [' omnis cum possimus'] },
  { id: 10, title: 'sit vitae', history: ['ipsum dolor sit amet'] },
  { id: 11, title: 'atque ducimus', history: [' consectetur adipisicing'] },
  { id: 12, title: 'nulla optio', history: [' elit. Amet beatae, id'] },
  {
    id: 13,
    title: 'dignissimos mollitia',
    history: ['suscipit, magnam porro'],
  },
  { id: 14, title: 'Lorem ipsum', history: [' similique blanditiis'] },
  { id: 15, title: 'dolor sit', history: [' eum recusandae quod'] },
  { id: 16, title: 'amet consectetur', history: [' tempora nulla'] },
  {
    id: 17,
    title: 'adipisicing elit',
    history: ['At hic neque enim possimus'],
  },
  { id: 18, title: 'ipsum voluptates', history: [' tempore quidem sed'] },
  { id: 19, title: 'sunt qui', history: ['. Lorem ipsum dolor sit'] },
  { id: 20, title: 'Illum culpa', history: ['consectetur adipisicing'] },
];

const DEFAULT_MS = 3000;

/**
 * Example for throwing an error
 * ```js
 * fetchChats(true);
 * ```
 *
 * Example for waiting up to 5 seconds
 * ```js
 * fetchChats(5000);
 * ```
 *
 * Example for waiting up to 2 seconds and throwing an error
 * ```js
 * fetchChats(2000, true);
 * ```
 *
 * @param {number} ms Duration in milliseconds that function should wait
 * @param {boolean} shouldThrow If the function should throw an error
 * @returns
 */
export default function fetchChats(ms = DEFAULT_MS, shouldThrow = false) {
  if (typeof ms === 'boolean') {
    return fetchChats(DEFAULT_MS, ms);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(CHAT_LIST), ms);
  });
}
