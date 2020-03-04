import { Headers } from 'node-fetch';

export function convertHeaders(headers: ReadonlyArray<[string, string]>): Headers {
  return headers.reduce((h, [name, value]) => {
    if (name.length > 0) {
      h.append(name, value);
    }
    return h;
  }, new Headers());
}

export function unconvertHeaders(headers: Headers): ReadonlyArray<[string, string]> {
  const h: [string, string][] = [];
  headers.forEach((value: string, name: string) => h.push([name, value]));
  console.log(headers.get('set-cookie'));
  return h;
}

// https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Request_fields
export const COMMON_HEADER_NAMES = [
  'A-IM',
  'Accept',
  'Accept-Charset',
  'Accept-Datetime',
  'Accept-Encoding',
  'Accept-Language',
  'Access-Control-Request-Method',
  'Access-Control-Request-Headers',
  'Authorization',
  'Cache-Control',
  'Connection',
  'Content-Encoding',
  'Content-Length',
  'Content-MD5',
  'Content-Type',
  'Cookie',
  'Date',
  'Expect',
  'Forwarded',
  'From',
  'Host',
  'HTTP2-Settings',
  'If-Match',
  'If-Modified-Since',
  'If-None-Match',
  'If-Range',
  'If-Unmodified-Since',
  'Max-Forwards',
  'Origin',
  'Pragma',
  'Proxy-Authorization',
  'Range',
  'Referer',
  'TE',
  'Trailer',
  'Transfer-Encoding',
  'User-Agent',
  'Upgrade',
  'Via',
  'Warning',
  'Upgrade-Insecure-Requests',
  'X-Requested-With',
  'DNT',
  'X-Forwarded-For',
  'X-Forwarded-Host',
  'X-Forwarded-Proto',
  'Front-End-Https',
  'X-Http-Method-Override',
  'X-ATT-DeviceId',
  'X-Wap-Profile',
  'Proxy-Connection',
  'X-UIDH',
  'X-Csrf-Token',
  'X-Request-ID',
  'X-Correlation-ID',
  'Save-Data',
];
