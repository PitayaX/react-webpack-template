export const SortType = {
  SORT_HOT: "HOT",
  sORT_NEW: "NEW",
  SORT_FOLLOW: "FOLLOW"
}

export const Actions = {
  SET_FILTER: "Set_Filter",
  SET_SORT: "Set_Sort"
}

export function SetSort ( code ) {
  return { type: Actions.SET_SORT, code }
}

export function SetFilter ( id ) {
  return { type: Actions.SET_FILTER, filterId: id }
}
