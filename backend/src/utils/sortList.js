const SortTypesList = {
  newest: { createdAt: -1 },
  oldest: { createdAt: 1 },
  lastModified: { updatedAt: -1 },
  alphabetical: { title: 1 },
  descendingAlphabetical: { title: -1 },
};

const alaphabeticalOrderList = {
  alphabetical: 1,
  descendingAlphabetical: -1,
};

const modelList = ["bookmark", "folder"];

export const sortList = (type, model) => {
  if (modelList.indexOf(model) == -1) throw new Error("InvalidModel");

  if (type == "alphabetical" || type == "descendingAlphabetical") {
    const alaphabeticalOrder = alaphabeticalOrderList[type];
    switch (model) {
      case "bookmark":
        return { title: alaphabeticalOrder };
      case "folder":
        return { name: alaphabeticalOrder };
      default:
        return { cant_be_run: 1 };
    }
  }

  if (!SortTypesList[type]) {
    return SortTypesList[lastModified];
  }

  return SortTypesList[type];
};
