var n=`<pre><code class="language-javascript">// \u4E0B\u5212\u7EBF\u8F6C\u6362\u9A7C\u5CF0
function toHump(name) {
  return name.replace(/\\_(\\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
}
// \u9A7C\u5CF0\u8F6C\u6362\u4E0B\u5212\u7EBF
function toLine(name) {
  return name.replace(/([A-Z])/g, &quot;_$1&quot;).toLowerCase();
}

// \u6D4B\u8BD5
let a = &quot;a_b2_345_c2345&quot;;
console.log(toHump(a));

let b = &quot;aBdaNf&quot;;
console.log(toLine(b));
</code></pre>
<pre><code class="language-javascript">//\u4E0B\u8F7D\u6587\u4EF6
function downloadFile(url){
    try {
        var elemIF = document.createElement(&quot;iframe&quot;);
        elemIF.src = url;
        elemIF.style.display = &quot;none&quot;;
        document.body.appendChild(elemIF);
        setTimeout(()=&gt;{
            document.body.removeChild(elemIF)
        },5000)
    } catch (e) {
      alert(&quot;\u4E0B\u8F7D\u6587\u4EF6\u5931\u8D25\uFF01&quot;);
    }
}

downloadFile(&quot;http://118.190.246.162/payadmin/transaction/withdraw/downFile/98&quot;)


https://blog.csdn.net/zhongmushu/article/details/90343986
</code></pre>
`;export{n as default};
