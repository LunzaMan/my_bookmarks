export const SortTypesList = {
  newest: { createdAt: -1 },
  oldest: { createdAt: 1 },
  lastModified: { updatedAt: -1 },
  alphabetical: { title: 1 },
  descendingAlphabetical: { title: -1 },
};
