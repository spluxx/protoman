function prepend(msg: string): string {
  return `Protobuf.js Error:\n${msg}`;
}

// https://github.com/protobufjs/protobuf.js/blob/5f2f62bcfd9bb69b34efbcfefffddf92daecf480/src/reader.js#L13
function indexOutOfRange(msg: string): string {
  function errMsg(pos: string, read: string, len: string): string {
    return `Index out of range: the reader was at position ${pos} and tried to read ${read} more (bytes), but the given buffer was ${len} bytes`;
  }

  const regex = /index out of range: ([0-9]+) \+ ([0-9]+) > ([0-9]+)/;

  const res = msg.match(regex);

  if (res) {
    const [matched, pos, read, len] = res;
    return msg.replace(matched, errMsg(pos, read, len));
  }

  return msg;
}

export function transformPBJSError(e: Error): Error {
  const transformers = [prepend, indexOutOfRange];

  const message = transformers.reduce((msg, transform) => transform(msg), e.message);

  return new Error(message);
}
