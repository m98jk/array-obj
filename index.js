function arr2obj(opt) {
  let alls = [];
  arr = opt.arr;
  id = opt.Uid;
  arr.map((nd) => {
    let Needs = {
      status: opt.status,
      name: `${nd}`,
      Uid: id,
    };
    alls.push(Needs);
    id++;
  });
  return alls;
}

module.exports.arr2obj = arr2obj;
