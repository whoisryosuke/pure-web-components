export function format(first: string, middle: string, last: string): string {
  return (
    (first || "") +
    (middle != null ? ` ${middle}` : "") +
    (last != null ? ` ${last}` : "")
  );
}
