# dufs-material-assets

[dufs](https://github.com/sigoden/dufs) 的 Material Design 风格自定义前端界面。

使用 Vue 3 + Vuetify 构建，部分设计参考 [Cloudreve](https://github.com/cloudreve/Cloudreve)，添加了一些额外的功能。

<picture>
    <source media="(prefers-color-scheme:dark)" srcset="">
    <img src="">
</picture>

## 已实现/适配的功能

标有✨的是原版前端界面未支持，在本项目中额外添加的功能。

* 文件列表
* URL 路径前缀
* 显示符号链接
* 打包下载
* 文件上传
    * 暂不支持拖拽和在线编辑
* 新建文件夹
* 移动/重命名/删除文件
* 搜索
* 深色模式
* 响应式设计✨
* 文本文件预览✨
    * 代码高亮（使用 [prism](https://prismjs.com) 实现）
    * 数学公式渲染（使用 https://i.upmath.me/ 的 API 实现）
    * 支持渲染 Markdown 文件（使用 [Marked](https://marked.js.org/) 实现）
* README 文件展示✨
    * 自动在文件列表下方展示当前目录的 `README.md`、`README.txt` 或 `README` 文件
* 图片查看器✨
* 视频播放器✨
* 音乐播放器✨
    * 同一目录下音频文件顺序/随机/循环播放
    * 解析并展示标题、艺术家、专辑名称、封面图等元数据（使用 [jsmediatags](https://www.npmjs.com/package/jsmediatags) 实现）
* 自定义页面标题和主题色✨

## 使用方法

从 []() 下载前端资源后，假定保存在 `dufs-material-assets` 目录，在启动 dufs 时添加参数 `--assets dufs-material-assets`。

也可以自己构建前端资源。由于 jsmediatags 存在一个[小问题](https://github.com/aadsm/jsmediatags/pull/150)暂未修复，在安装时需要额外打一个补丁，可以使用 [patch-package](https://www.npmjs.com/package/patch-package)，不过我选择使用 [pnpm](https://pnpm.io/) 一步到位：

```shell
pnpm install
pnpm run build
```

<details>

<summary>自定义页面标题和主题色</summary>

按照以下指引修改 `index.html` 的 `<script>` 部分：

```js
// 自定义标题
window.__CUSTOM_TITLE__ = 'Custom title';

// 自定义浅色和深色主题
window.__CUSTOM_THEME__ = {
    light: {
        primary: '#0288d1',
        secondary: '#00b0ff',
    },
    dark: {
        primary: '#026da7',
        secondary: '#008dcc',
    },
};

// 由dufs填充的页面内容，不要修改
window.__INITIAL_DATA__ = __INDEX_DATA__;
window.__DUFS_PREFIX__ = "__ASSERTS_PREFIX__";
```

</details>

## 截图

<details>

<summary>搜索/响应式设计</summary>

![]()

</details>

<details>

<summary>文本文件预览</summary>

![]()

</details>

<details>

<summary>图片查看器</summary>

![]()

</details>

<details>

<summary>视频播放器</summary>

![]()

</details>

<details>

<summary>音乐播放器</summary>

![]()

</details>