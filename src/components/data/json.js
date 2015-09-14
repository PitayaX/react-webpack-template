export const articalsData = [ { _id: 0, title: "这个是标题哦", url: "http://www.baidu.com",
  image: "http://reactjs.cn/react/img/logo.svg", "abstract": "这是摘要哦。。。。。。。。。。。", content: "文章内容",
  publishedOn: "2015-01-01", publishedBy: { _id: 0, name: "abc" },
  tags: [ { _id: 0, text: "React" } ], status: 2, viewCount: 200 },
  { _id: 1, title: "这个是标题2哦", url: "http://www.baidu.com",
    image: "http://reactjs.cn/react/img/logo.svg", "abstract": "这是摘要哦。。。。。。。。。。。", content: "文章内容",
    publishedOn: "2015-01-01", publishedBy: { _id: 0, name: "abc" },
    tags: [ { _id: 0, text: "React" }, { _id: 1, text: "Redux" } ], status: 2, viewCount: 200 } ]


export const sortData = [ { name: "最近更新", _id: 0, actived: true }, { name: "热门排名", _id: 1, actived: false }, { name: "关注度排名", _id: 2 } ]

export const tagData = [ { _id: 0, text: "最热" }, { _id: 1, text: "reactjs" } ]
