### markdown 官方文档

​	https://www.appinn.com/markdown/

### 常用的语法

​	https://www.jianshu.com/p/191d1e21f7ed

### 介绍

**Markdown**是一种[轻量级标记语言](https://zh.wikipedia.org/wiki/%E8%BD%BB%E9%87%8F%E7%BA%A7%E6%A0%87%E8%AE%B0%E8%AF%AD%E8%A8%80) ，用易读易写的纯文本格式编写文档，然后转换成有效的[XHTML](https://zh.wikipedia.org/wiki/XHTML)（或者[HTML](https://zh.wikipedia.org/wiki/HTML)）文档 

#### 标题

总共六级标题，建议在建议在井号后加一个空格，这是最标准的 Markdown 语法 

`command + 1/2/3/4/5/6`

```
# 一级标题
## 二级标题
### 三级标题
### 四级标题
##### 五级标题
###### 六级标题
```

# sasdfa



#### 换行和分段

+ 换行：只需在行末加两个空格键和一个回车键即可换行 
  + `control + 回车键`
+ 分段：段落之间空一行即可

#### 文本样式

+ 加粗：`快捷键 command + B`	 `**abc**`   `__abc__`  **aaa**
+ 斜体：`快捷键 command + I` `_a_` `*a*`  *af*
+ 斜体加粗：`***ab***` ***aaa***
+ 删除线：`快捷键 command + U` `~~ab~~`  ~~aaa~~

#### 列表

+ **无序列表**：在文字前加 `-` 、`+`、`*`
  * 
+ **有序列表**：在文字前加`1.`
  1. aa
  2. 11
  3. 

#### 引用

只要在文本内容之前加 「 > （大于号）」 即可将文本变成引用文本 

「 > >（大于号）」 嵌套使用

> abcd

> > abcd

> aaa

`快捷键 command + Q`

#### 图片与链接

- **图片**
  - `![图片描述](链接的地址)` 	`快捷键 control + shift + I`
  - ![123](D:\16112F02358-1.jpg)

  ![aa]()
- **链接**
  - `[文本内容](链接的地址)`	`快捷键 control + shift + L`
  - [123]()
  - 

#### 代码框

+ ```
  单行代码	`代码内容`
  多行代码	 ```
  			代码内容
  ```
  ```javascript
  var aaa = 10;
  
  
  ```

  aa `afaf` aaa

  ``` javascript
  var jsl
  
  asdf
  ```

  

#### 表格

`快捷键 command + T`

`| abc | abc | abc |`		`control + enter 换行`

| ab | aa |
|||
||



#### 注释

<!-- 注释 -->

####首行缩进

#### 水平分割线

> `---`	`***`
>
> `*****`	`-----`

---

***

*****



#### 注释

hello[^abc]

[^abc]: h1

#### 流程图

```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op

```







 



