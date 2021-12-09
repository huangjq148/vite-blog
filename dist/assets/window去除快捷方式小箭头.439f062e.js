var o=`<p>\u4F7F\u7528\u666E\u901A\u65B9\u6CD5\u4F1A\u4F7F\u7CFB\u7EDF\u51FA\u73B0\u5F02\u5E38\uFF0C\u6BD4\u5982\u5F00\u59CB\u83DC\u5355\u7A0B\u5E8F\u65E0\u6CD5\u5220\u9664\u3001\u6536\u85CF\u5939\u65E0\u6CD5\u5C55\u5F00\u7B49\uFF0C\u7F51\u4E0A\u6D41\u4F20\u4F7F\u7528\u900F\u660E\u56FE\u6807\u7684\u65B9\u6CD5\u4F1A\u5728\u5FEB\u6377\u65B9\u5F0F\u4E0A\u7559\u4E0B\u4E00\u5757\u9ED1\u75E3\u3002\u4E0B\u9762\u7684\u65B9\u6CD5\u662F\u5C0F\u541B\u7814\u7A76\u51FA\u6765\u7684\uFF0C\u6B64\u65B9\u6CD5\u5E76\u4E0D\u662F\u5220\u9664\u4E86\u5C0F\u7BAD\u5934\uFF0C\u800C\u662F\u5C06\u5C0F\u7BAD\u5934\u53D8\u6210\u4E86\u900F\u660E\uFF0C\u5B9E\u9645\u4E0A\u5C0F\u7BAD\u5934\u662F\u4EE5\u900F\u660E\u72B6\u6001\u5B58\u5728\u7684</p>
<p>\u53BB\u6389 Win7 \u5FEB\u6377\u65B9\u5F0F\u5C0F\u7BAD\u5934\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<p>reg add &quot;HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Icons&quot; /v 29 /d &quot;%systemroot%\\system32\\imageres.dll,196&quot; /t reg_sz /f
taskkill /f /im explorer.exe
attrib -s -r -h &quot;%userprofile%\\AppData\\Local\\iconcache.db&quot;
del &quot;%userprofile%\\AppData\\Local\\iconcache.db&quot; /f /q
start explorer
pause</p>
<p>\u64CD\u4F5C\u6B65\u9AA4\u5982\u4E0B\uFF1A
1\u3001\u684C\u9762\u53F3\u952E\u65B0\u5EFA\u4E00\u4E2A\u6587\u672C\u6587\u4EF6</p>
<p>\u6B63\u786E\u53BB\u6389 Win7 \u5FEB\u6377\u65B9\u5F0F\u5C0F\u7BAD\u5934</p>
<p>2\u3001\u7C98\u8D34\u4E0A\u9762\u7684\u4EE3\u7801\u5230\u8BB0\u4E8B\u672C\u4E2D\uFF0C\u6309\u7167\u4E0B\u56FE\u7684\u683C\u5F0F\u7C98\u8D34\uFF0C\u6CE8\u610F\u683C\u5F0F\u4E0D\u8981\u9519\u8BEF\uFF0C\u5426\u5219\u8FD0\u884C\u51FA\u9519</p>
<p>\u6B63\u786E\u53BB\u6389 Win7 \u5FEB\u6377\u65B9\u5F0F\u5C0F\u7BAD\u5934</p>
<p>3\u3001\u53E6\u5B58\u540D\u5B57\u4E3A 123.bat\uFF0C\u6587\u4EF6\u7C7B\u578B\u4E3A\u6240\u6709\u6587\u4EF6</p>
<p>\u6B63\u786E\u53BB\u6389 Win7 \u5FEB\u6377\u65B9\u5F0F\u5C0F\u7BAD\u5934</p>
<p>4\u3001\u53F3\u952E 123.bat\uFF0C\u4EE5\u7BA1\u7406\u5458\u8EAB\u4EFD\u8FD0\u884C
\u6B63\u786E\u53BB\u6389 Win7 \u5FEB\u6377\u65B9\u5F0F\u5C0F\u7BAD\u5934</p>
<p>\u8FD0\u884C\u540E\uFF0C\u5FEB\u6377\u65B9\u5F0F\u7684\u5C0F\u7BAD\u5934\u5C31\u88AB\u201C\u5220\u9664\u201D\u4E86</p>
<p>\u6B63\u786E\u53BB\u6389 Win7 \u5FEB\u6377\u65B9\u5F0F\u5C0F\u7BAD\u5934</p>
<p>\u6B63\u786E\u53BB\u6389 Win7 \u5FEB\u6377\u65B9\u5F0F\u5C0F\u7BAD\u5934</p>
<p>\u6B63\u786E\u53BB\u6389 Win7 \u5FEB\u6377\u65B9\u5F0F\u5C0F\u7BAD\u5934</p>
<p>\u6B63\u786E\u53BB\u6389 Win7 \u5FEB\u6377\u65B9\u5F0F\u5C0F\u7BAD\u5934</p>
<p>XP \u53BB\u6389\u5C0F\u7BAD\u5934\u7684\u65B9\u548C\u548C Win7 \u4E00\u6837\uFF0C\u4F46\u4EE3\u7801\u7565\u6709\u4E0D\u540C</p>
<p>reg add &quot;HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Icons&quot; /v 29 /d &quot;%systemroot%\\system32\\shell32.dll,49&quot; /t reg_sz /f
taskkill /f /im explorer.exe
attrib -s -r -h &quot;%userprofile%\\Local Settings\\Application Data\\iconcache.db&quot;
del &quot;%userprofile%\\Local Settings\\Application Data\\iconcache.db&quot; /f /q
start explorer
pause</p>
<p>\u6B63\u786E\u53BB\u6389 Win7 \u5FEB\u6377\u65B9\u5F0F\u5C0F\u7BAD\u5934</p>
<p>\u6062\u590D Win7 \u5FEB\u6377\u65B9\u5F0F\u7BAD\u5934\uFF0C\u6CE8\u610F\u4EE3\u7801\u683C\u5F0F\u4E0D\u8981\u590D\u5236\u9519\u8BEF</p>
<p>reg\xA0delete\xA0&quot;HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Icons&quot; /v 29 /f
taskkill /f /im explorer.exe
attrib -s -r -h &quot;%userprofile%\\AppData\\Local\\iconcache.db&quot;
del &quot;%userprofile%\\AppData\\Local\\iconcache.db&quot; /f /q
start explorer
pause</p>
<p>\u6062\u590D XP \u5FEB\u6377\u65B9\u5F0F\u7BAD\u5934\uFF0C\u6CE8\u610F\u4EE3\u7801\u683C\u5F0F\u4E0D\u8981\u590D\u5236\u9519\u8BEF</p>
<p>reg\xA0delete\xA0&quot;HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Icons&quot; /v 29 /f
taskkill /f /im explorer.exe
attrib -s -r -h &quot;%userprofile%\\Local Settings\\Application Data\\iconcache.db&quot;
del &quot;%userprofile%\\Local Settings\\Application Data\\iconcache.db&quot; /f /q
start explorer
pause</p>
<p>\u6765\u6E90\uFF1A\xA0<a href="http://blog.sina.com.cn/s/blog_5d2ced280100ocvb.html#comment2">http://blog.sina.com.cn/s/blog_5d2ced280100ocvb.html#comment2</a></p>
`;export{o as default};
