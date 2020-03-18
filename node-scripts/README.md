## 日常node脚本

### add_suffix

作用：添加后缀（一般用于win10壁纸名称修改）

后记：现在发现有更快的办法，只需在Assets文件夹里直接命令行输入ren *.* *.jpg，一键替换后缀。我之前还写这个脚本，现在瞬间没用了。。

### rename_files

作用：首字母拼接，重命名所有文件名，并生成data.json

### export_docx.js

导出带表格的word文档（数据示例为rename_files.js生成的json文件）

### cascade_output_json

三层级联数据通过stream流读入，再以递归形式重新生成新结构，最后导出json