使用普通方法会使系统出现异常，比如开始菜单程序无法删除、收藏夹无法展开等，网上流传使用透明图标的方法会在快捷方式上留下一块黑痣。下面的方法是小君研究出来的，此方法并不是删除了小箭头，而是将小箭头变成了透明，实际上小箭头是以透明状态存在的

去掉 Win7 快捷方式小箭头的代码如下：

reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v 29 /d "%systemroot%\system32\imageres.dll,196" /t reg_sz /f
taskkill /f /im explorer.exe
attrib -s -r -h "%userprofile%\AppData\Local\iconcache.db"
del "%userprofile%\AppData\Local\iconcache.db" /f /q
start explorer
pause

操作步骤如下：
1、桌面右键新建一个文本文件

正确去掉 Win7 快捷方式小箭头

2、粘贴上面的代码到记事本中，按照下图的格式粘贴，注意格式不要错误，否则运行出错

正确去掉 Win7 快捷方式小箭头

3、另存名字为 123.bat，文件类型为所有文件

正确去掉 Win7 快捷方式小箭头

4、右键 123.bat，以管理员身份运行
正确去掉 Win7 快捷方式小箭头

运行后，快捷方式的小箭头就被“删除”了

正确去掉 Win7 快捷方式小箭头

正确去掉 Win7 快捷方式小箭头

正确去掉 Win7 快捷方式小箭头

正确去掉 Win7 快捷方式小箭头

XP 去掉小箭头的方和和 Win7 一样，但代码略有不同

reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v 29 /d "%systemroot%\system32\shell32.dll,49" /t reg_sz /f
taskkill /f /im explorer.exe
attrib -s -r -h "%userprofile%\Local Settings\Application Data\iconcache.db"
del "%userprofile%\Local Settings\Application Data\iconcache.db" /f /q
start explorer
pause

正确去掉 Win7 快捷方式小箭头

恢复 Win7 快捷方式箭头，注意代码格式不要复制错误

reg delete "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v 29 /f
taskkill /f /im explorer.exe
attrib -s -r -h "%userprofile%\AppData\Local\iconcache.db"
del "%userprofile%\AppData\Local\iconcache.db" /f /q
start explorer
pause

恢复 XP 快捷方式箭头，注意代码格式不要复制错误

reg delete "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v 29 /f
taskkill /f /im explorer.exe
attrib -s -r -h "%userprofile%\Local Settings\Application Data\iconcache.db"
del "%userprofile%\Local Settings\Application Data\iconcache.db" /f /q
start explorer
pause

来源： <http://blog.sina.com.cn/s/blog_5d2ced280100ocvb.html#comment2>
