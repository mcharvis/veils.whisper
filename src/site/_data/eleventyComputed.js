// const { getGraph } = require("../../helpers/linkUtils");  // 🚫 Disable this
const { getFileTree } = require("../../helpers/filetreeUtils");
const { userComputed } = require("../../helpers/userUtils");

module.exports = {
  // graph: (data) => getGraph(data),  // already commented, good
  filetree: (data) => getFileTree(data),
  userComputed: (data) => userComputed(data)
};
