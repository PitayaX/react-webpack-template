## react-webpack-template

这是一个react组件开发模板，里面包含了一个button组件的例子，并提供webpack的HMR（Hot Module Replacement）使得代码的更改无需刷新浏
览器即可看到效果，这里有[一篇介绍React组件的文章](http://segmentfault.com/a/1190000003645189?_ea=326686)。更多的资料，请查看本仓库
的[wiki](https://github.com/PitayaX/react-webpack-template/wiki)。

#### 说明

在开始跑之前需要注意两个配置项：

```
{
  port: 3000,
  aliasPath: {
    less: '...'
  }
}
```

确保配置项中的`port`的值是一个未被占用的端口，另外`aliasPath`所配置的对象就是`webpack`的`resolve.alias`配置项，大家需要把`less`改成自己环
境下的绝对路径，该路径指向`./src/less`这个目录。

确保了配置正确后，在命令行工具中输入`npm start`即可开始开发了！

#### 使用该仓库的正确姿势

大家不要把修改直接push到这个仓库，建议大家可以这样：

- clone本仓库，并修改文件夹名字为你自己喜欢的名字
- 在Github网站上创建一个新的仓库，并得到该仓库的url
- 将remote origin修改为新仓库的url

```
> git clone https://github.com/PitayaX/react-webpack-template.git
> mv react-webpack-template mycomponent
> cd mycomponent
> git remote set-url origin https://github.com/somebody/repo.git
```
