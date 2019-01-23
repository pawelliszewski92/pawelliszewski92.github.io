import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const indexNumber = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(indexNumber)
    .take(pageSize)
    .value();
}
