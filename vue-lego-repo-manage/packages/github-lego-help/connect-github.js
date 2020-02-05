import axios from 'axios';
import { Base64 } from 'js-base64';
const REPO_URL = 'https://api.github.com/repos/';

const findInfoByGitUrl = function(gitUrl) {
  return REPO_URL + gitUrl.match(/[^\\/]+\/[^\\/]+(?=[.+\\.])/)[0];
};

/**
 * javascript comment
 * @Author: xiangxiao3
 * @Date: 2020-02-03 14:57:31
 * @Desc: 获取repo信息
 */
const getRepo = async function(url) {
  try {
    let data = axios.get(findInfoByGitUrl(url));
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

/**
 * javascript comment
 * @Author: xiangxiao3
 * @Date: 2020-02-03 20:46:25
 * @Desc: 根据路径找到文件
 */
const getNodeByPath = async function(url, sha = 'master', path) {
  let node = { sha };
  for (let single of path) {
    let {
      data: { tree: nodes },
    } = await axios.get(url + '/git/trees/' + node.sha);
    node = nodes.find(val => val.path === single);
  }
  return node;
};

const getDepNodes = async function(url, pNode) {
  let arr = [];
  let {
    data: { tree: nodes },
  } = await axios.get(url + '/git/trees/' + pNode.sha);
  for (let node of nodes) {
    let temp = {
      label: node.path,
      sha: node.sha,
      url: node.url,
    };
    if (node.type === 'tree') {
      temp.children = await getDepNodes(url, node);
    }
    arr.push(temp);
  }
  return arr;
};

/**
 * javascript comment
 * @Author: xiangxiao3
 * @Date: 2020-02-03 14:57:56
 * @Desc: 获取git树
 */
const getRepoNodesByPath = async function(url, sha = 'master', path) {
  try {
    let gitUrl = findInfoByGitUrl(url);
    let node = await getNodeByPath(gitUrl, sha, path);
    let nodes = await getDepNodes(gitUrl, node);
    return nodes;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

const getFile = async function(url) {
  try {
    let {
      data: { content },
    } = await axios.get(url);
    return Base64.decode(content);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export { getRepo, getRepoNodesByPath, getFile };
