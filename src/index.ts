/**
 * 管理 location.hash 中的查询参数（即 # 后面 ? 之后的部分）
 * 示例：URL 为 `https://example.com#/page?id=123&lang=zh`
 * 则管理的是 `?id=123&lang=zh` 部分，路径 `/page` 保持不变
 *
 * AI: https://chat.qwen.ai/c/48cbb133-5895-49cf-9283-995319bb93e1
 */
class HashQuery {
  /**
   * 获取当前 hash 中的查询参数
   * @returns URLSearchParams 实例
   */
  get(): URLSearchParams {
    if (typeof window === 'undefined') {
      return new URLSearchParams();
    }

    const hash = window.location.hash.startsWith('#')
      ? window.location.hash.slice(1)
      : window.location.hash;

    const queryIndex = hash.indexOf('?');
    const queryString = queryIndex === -1 ? '' : hash.slice(queryIndex + 1);

    return new URLSearchParams(queryString);
  }

  /**
   * 设置 hash 查询参数
   * @param params 要设置的 URLSearchParams 对象
   * @param replace 是否使用 replaceState（默认 false，即 pushState）
   */
  set(params: URLSearchParams, replace: boolean = false): void {
    if (typeof window === 'undefined') return;

    const qs = params.toString();

    const currentHashRaw = window.location.hash || '';
    const currentHash = currentHashRaw.startsWith('#') ? currentHashRaw.slice(1) : currentHashRaw;

    const idx = currentHash.indexOf('?');
    const base = idx >= 0 ? currentHash.slice(0, idx) : currentHash;

    const newHash = `${base}${qs ? '?' + qs : ''}`;
    const newHashWithHash = `#${newHash}`;

    const { pathname, search } = window.location;
    const oldURL = pathname + search + currentHashRaw;
    const newURL = pathname + search + newHashWithHash;

    if (oldURL === newURL) return;

    if (replace) {
      window.history.replaceState(null, '', newURL);
    } else {
      window.history.pushState(null, '', newURL);
    }

    // 手动触发 hashchange（因为 pushState/replaceState 不会触发）
    window.dispatchEvent(new HashChangeEvent('hashchange', { oldURL, newURL }));
  }

  /**
   * 增量更新查询参数（merge）
   * @param partialParams 键值对对象，值为 null/undefined 表示删除该 key
   * @param replace 是否使用 replaceState
   */
  update(partialParams: Record<string, string | null | undefined>, replace = false): void {
    const current = this.get();

    // 应用更新
    for (const [key, value] of Object.entries(partialParams)) {
      if (value == null) {
        current.delete(key); // 删除 null/undefined 的 key
      } else {
        current.set(key, String(value)); // 覆盖或新增
      }
    }

    this.set(current, replace);
  }

  /**
   * 从普通 JavaScript 对象创建 URLSearchParams
   * @param json 键值对对象
   * @returns URLSearchParams 实例
   */
  fromJson(json: Record<string, string>): URLSearchParams {
    return new URLSearchParams(json);
  }

  /**
   * 将当前 hash 查询参数转换为普通 JavaScript 对象
   * 注意：若存在重复 key，只保留最后一个值
   * @returns Record<string, string>
   */
  toJson(): Record<string, string> {
    return Object.fromEntries(this.get());
  }
}

export default HashQuery;
