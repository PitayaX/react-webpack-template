export const SortType = {
  SORT_HOT: "HOT",
  sORT_NEW: "NEW",
  SORT_FOLLOW: "FOLLOW"
}

export const Actions = {
  SET_FILTER: "Set_Filter",
  SET_SORT: "Set_Sort"
}

export function SetSort ( typeName ) {
  return { type: Actions.SET_SORT, name: typeName }
}

export function SetFilter ( id ) {
  return { type: Actions.SET_FILTER, filterId: id }
}
