var join = function (arr1, arr2) {
  const idMap = new Map();

  arr1.forEach((obj) => {
    idMap.set(obj.id, obj);
  });

  console.log(idMap);

  arr2.forEach((obj) => {
    if (idMap.has(obj.id)) {
      idMap.set(obj.id, { ...idMap.get(obj.id), ...obj });
    } else {
      idMap.set(obj.id, obj);
    }
  });

  return [...idMap.values()].sort((a, b) => a.id - b.id);
};