// __tests__/HashQuery.test.ts

import HashQuery from '../src';

describe('HashQuery', () => {
  beforeEach(() => {
    // 重置 URL 到干净状态 —— 使用 pushState，不触发 navigation
    window.history.pushState(null, '', '/test'); // pathname = /test, hash = ''
    jest.clearAllMocks();
  });

  beforeAll(() => {
    jest.spyOn(window.history, 'pushState');
    jest.spyOn(window.history, 'replaceState');
    jest.spyOn(window, 'dispatchEvent');
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('get()', () => {
    it('parses query from hash', () => {
      // ✅ 安全：只改 hash
      window.location.hash = '#/page?id=123&lang=zh';
      const hq = new HashQuery();
      expect(hq.get().get('id')).toBe('123');
    });
  });

  describe('set()', () => {
    it('updates hash query correctly', () => {
      // 设置初始状态
      window.history.pushState(null, '', '/app?ref=home#/view');

      const hq = new HashQuery();
      const params = new URLSearchParams({ id: '42' });
      hq.set(params);
      expect(window.history.pushState).toHaveBeenCalledWith(null, '', '/app?ref=home#/view?id=42');
    });
  });

  describe('static.toJson()', () => {
    it('returns plain object', () => {
      const params = new URLSearchParams('theme=dark');
      expect(HashQuery.toJson(params)).toEqual({ theme: 'dark' });
    });
  });

  describe('static.fromJson()', () => {
    it('creates URLSearchParams from plain object', () => {
      const obj = { a: '1', b: '2' };
      const params = HashQuery.fromJson(obj);
      expect(params.get('a')).toBe('1');
      expect(params.get('b')).toBe('2');
    });
  });

  describe('update()', () => {
    it('merges new params with existing ones', () => {
      window.location.hash = '#/?theme=light&lang=zh';
      const hq = new HashQuery();
      hq.update({ debug: 'true', lang: 'en' });

      // ✅ 正确期望：包含 #
      expect(window.history.pushState).toHaveBeenCalledWith(
        null,
        '',
        '/test#/?theme=light&lang=en&debug=true'
      );
    });

    it('deletes keys when value is null', () => {
      window.location.hash = '#/?a=1&b=2';
      const hq = new HashQuery();
      hq.update({ a: null, c: '3' });

      expect(window.history.pushState).toHaveBeenCalledWith(
        null,
        '',
        '/test#/?b=2&c=3' // ❌ 这里也错了！
      );
    });
  });
});