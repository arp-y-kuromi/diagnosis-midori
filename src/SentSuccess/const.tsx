// trackSentSuccess.ts などの最上部
declare const fbq: (...args: any[]) => void;

// tracking.ts または utils.ts に保存
export const trackSentSuccess = () => {
  const PV = "phv3eb4tk4gk";
  const KEYS: Record<string, [string, string, string]> = {
    cid: ["CL_", "ACT_", "cid_auth_get_type"],
  };
  let turl = `https://s13.aspservice.jp/in3/track.php?p=${PV}`;

  // Cookieを取得してRecord<string, string>に変換
  const cks: Record<string, string> = document.cookie
    .split("; ")
    .reduce((ret, s) => {
      const kv = s.split("=") as [string, string];
      if (kv[0] && kv[1]) ret[kv[0]] = kv[1];
      return ret;
    }, {} as Record<string, string>);

  // KEYSの各項目に基づいてURLを組み立てる
  turl = Object.keys(KEYS).reduce((url, k) => {
    const vk = `${KEYS[k][0]}${PV}`;
    const tk = `${KEYS[k][1]}${PV}`;
    let v = "",
      t = "";

    if (cks[vk]) {
      v = cks[vk];
      if (cks[tk]) t = cks[tk];
    } else if (localStorage.getItem(vk)) {
      v = localStorage.getItem(vk) as string;
      t = "ls";
    }

    if (v) url += `&${k}=${v}`;
    if (t) url += `&${KEYS[k][2]}=${t}`;
    return url;
  }, turl);

  // 非同期リクエストを送信
  const xhr = new XMLHttpRequest();
  xhr.open("GET", turl);
  xhr.send();
  // Meta Pixel – Lead
  if (typeof fbq === "function") {
    fbq("track", "Lead");
  }
};
